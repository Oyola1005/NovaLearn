import { Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import "./Courses.css";

function Courses() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("novalearn_user"));

  if (!user) {
    navigate("/login");
    return null;
  }

  const userCourses = courses[user.grade] || [];

  return (
    <div className="courses-page">

      <header className="courses-header">
        <div>
          <p className="courses-label">NovaLearn</p>
          <h1>Mis cursos 📚</h1>
          <p>
            Cursos disponibles para {user.grade}° de secundaria.
          </p>
        </div>

        <Link to="/dashboard" className="back-button">
          ← Dashboard
        </Link>
      </header>

      <main className="courses-content">

        <div className="courses-title">
          <h2>Elige un curso</h2>
          <span>{userCourses.length} cursos</span>
        </div>

        <div className="courses-grid">

          {userCourses.map((course) => (
            <article className="course-card" key={course.id}>

              <div className="course-icon">
                {course.icon}
              </div>

              <div className="course-info">
                <h3>{course.name}</h3>

                <p>{course.description}</p>

                <div className="course-progress">
                  <div className="progress-header">
                    <span>Progreso</span>
                    <strong>{course.progress}%</strong>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <Link
                  to={`/course/${course.id}`}
                  className="course-button"
                >
                  Ver curso →
                </Link>
              </div>

            </article>
          ))}

        </div>

      </main>

    </div>
  );
}

export default Courses;