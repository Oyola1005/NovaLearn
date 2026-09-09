import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { grades } from "../data/grades";
import "./Grades.css";

function Grades() {
  const navigate = useNavigate();

  const [selectedGrade, setSelectedGrade] = useState(null);

  const handleContinue = () => {
    if (!selectedGrade) {
      alert("Selecciona un grado para continuar.");
      return;
    }

    const savedUser = localStorage.getItem("novalearn_user");

    if (!savedUser) {
      navigate("/register");
      return;
    }

    const user = JSON.parse(savedUser);

    const updatedUser = {
      ...user,
      grade: selectedGrade
    };

    localStorage.setItem(
      "novalearn_user",
      JSON.stringify(updatedUser)
    );

    localStorage.setItem("novalearn_logged", "true");

    navigate("/dashboard");
  };

  return (
    <div className="grades-page">

      <div className="grades-container">

        <div className="grades-header">

          <div className="grades-logo">
            ✦
          </div>

          <span>UN ÚLTIMO PASO</span>

          <h1>
            ¿En qué grado estás?
          </h1>

          <p>
            Selecciona tu grado para mostrarte los cursos
            adecuados para ti.
          </p>

        </div>

        <div className="grades-grid">

          {grades.map((grade) => (

            <button
              key={grade.id}
              className={`grade-card ${
                selectedGrade === grade.id
                  ? "selected"
                  : ""
              }`}
              onClick={() => setSelectedGrade(grade.id)}
            >

              <div className="grade-number">
                {grade.number}
              </div>

              <div className="grade-info">

                <h3>
                  {grade.name}
                </h3>

                <p>
                  {grade.description}
                </p>

              </div>

              <div className="grade-check">
                {selectedGrade === grade.id ? "✓" : "→"}
              </div>

            </button>

          ))}

        </div>

        <button
          className="grades-button"
          onClick={handleContinue}
        >
          Continuar →
        </button>

      </div>

    </div>
  );
}

export default Grades;