import { Link, useNavigate, useParams } from "react-router-dom";
import { lessons } from "../data/lessons";
import "./Lesson.css";

function Lesson() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("novalearn_user"));

  if (!user) {
    navigate("/login");
    return null;
  }

  let lesson = null;
  let courseId = null;

  Object.entries(lessons).forEach(([key, courseLessons]) => {
    const found = courseLessons.find(
      (item) => item.id === id
    );

    if (found) {
      lesson = found;
      courseId = key;
    }
  });

  if (!lesson) {
    return (
      <div className="lesson-message">
        <h2>Lección no encontrada 😕</h2>

        <Link to="/courses">
          Volver a cursos
        </Link>
      </div>
    );
  }

  const completedLessons = user.completedLessons || [];

  const isCompleted = completedLessons.includes(id);

  const completeLesson = () => {
    if (!isCompleted) {

      const updatedUser = {
        ...user,

        points: (user.points || 0) + 20,

        completedLessons: [
          ...completedLessons,
          id
        ]
      };

      localStorage.setItem(
        "novalearn_user",
        JSON.stringify(updatedUser)
      );
    }

    navigate(`/course/${courseId}`);
  };

  return (
    <div className="lesson-page">

      <header className="lesson-header">

        <Link
          to={`/course/${courseId}`}
          className="lesson-back"
        >
          ← Volver al curso
        </Link>

        <p>NovaLearn · Lección</p>

        <h1>{lesson.title}</h1>

        <span>
          ⏱️ {lesson.duration}
        </span>

      </header>

      <main className="lesson-content">

        <section className="video-container">

          {lesson.videoId === "REEMPLAZAR" ? (

            <div className="video-placeholder">
              <div>🎥</div>

              <h2>Video educativo</h2>

              <p>
                Aquí aparecerá el video de YouTube.
              </p>
            </div>

          ) : (

            <iframe
              src={`https://www.youtube.com/embed/${lesson.videoId}`}
              title={lesson.title}
              allowFullScreen
            ></iframe>

          )}

        </section>

        <section className="lesson-text">

          <h2>Sobre esta lección</h2>

          <p>
            {lesson.description}
          </p>

          <div className="lesson-learning">

            <h3>🎯 Objetivo</h3>

            <p>
              Al terminar esta lección podrás comprender
              los conceptos principales y aplicarlos en
              diferentes situaciones.
            </p>

          </div>

        </section>

        <section className="lesson-complete">

          {isCompleted ? (

            <div className="completed-message">
              ✅ Lección completada
            </div>

          ) : (

            <button
              onClick={completeLesson}
              className="complete-button"
            >
              Completar lección +20 XP
            </button>

          )}

        </section>

      </main>

    </div>
  );
}

export default Lesson;