import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { lessons } from "../data/lessons";
import "./CourseDetail.css";

function CourseDetail() {
  const { id } = useParams();

  const user = JSON.parse(localStorage.getItem("novalearn_user"));

  if (!user) {
    return (
      <div className="course-detail-message">
        <h2>Debes iniciar sesión.</h2>
        <Link to="/login">Ir al login</Link>
      </div>
    );
  }

  const userCourses = courses[user.grade] || [];

  const course = userCourses.find((item) => item.id === id);

  if (!course) {
    return (
      <div className="course-detail-message">
        <h2>Curso no encontrado 😕</h2>

        <Link to="/courses">
          ← Volver a cursos
        </Link>
      </div>
    );
  }

  const courseLessons = lessons[id] || [];

  return (
    <div className="course-detail-page">

      <header className="course-detail-header">

        <Link to="/courses" className="course-back">
          ← Volver a cursos
        </Link>

        <div className="course-hero">

          <div className="course-detail-icon">
            {course.icon}
          </div>

          <div>
            <p>Curso</p>

            <h1>{course.name}</h1>

            <span>{course.description}</span>
          </div>

        </div>

      </header>

      <main className="course-detail-content">

        <section className="course-progress-card">

          <div>
            <h2>Tu progreso</h2>

            <p>
              Completa las lecciones para ganar XP.
            </p>
          </div>

          <strong>{course.progress}%</strong>

          <div className="detail-progress-bar">
            <div
              className="detail-progress-fill"
              style={{
                width: `${course.progress}%`
              }}
            ></div>
          </div>

        </section>

        <section className="lessons-section">

          <div className="section-heading">
            <h2>Lecciones 📖</h2>

            <p>
              Aprende paso a paso y pon a prueba tus conocimientos.
            </p>
          </div>

          <div className="lesson-list">

            {courseLessons.length === 0 ? (

              <div className="empty-lessons">
                <h3>Contenido próximamente 🚀</h3>

                <p>
                  Estamos preparando las lecciones para este curso.
                </p>
              </div>

            ) : (

              courseLessons.map((lesson, index) => (

                <div
                  className="lesson-card"
                  key={lesson.id}
                >

                  <div className="lesson-number">
                    {index + 1}
                  </div>

                  <div className="lesson-info">

                    <h3>{lesson.title}</h3>

                    <p>
                      {lesson.description}
                    </p>

                    <small>
                      ⏱️ {lesson.duration}
                    </small>

                  </div>

                  <Link
                    to={`/lesson/${lesson.id}`}
                    className="lesson-button"
                  >
                    Empezar →
                  </Link>

                </div>

              ))

            )}

          </div>

        </section>

      </main>

    </div>
  );
}

export default CourseDetail;