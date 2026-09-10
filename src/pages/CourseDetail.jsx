import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses";
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
            <p>Continúa aprendiendo y consigue XP.</p>
          </div>

          <strong>{course.progress}%</strong>

          <div className="detail-progress-bar">
            <div
              className="detail-progress-fill"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>

        </section>

        <section className="lessons-section">

          <div className="section-heading">
            <h2>Contenido del curso 📖</h2>
            <p>Completa las lecciones para avanzar.</p>
          </div>

          <div className="lesson-list">

            <div className="lesson-card">
              <div className="lesson-number">1</div>

              <div className="lesson-info">
                <h3>Introducción al curso</h3>
                <p>Conoce los conceptos básicos.</p>
              </div>

              <button className="lesson-button">
                Empezar →
              </button>
            </div>

            <div className="lesson-card">
              <div className="lesson-number">2</div>

              <div className="lesson-info">
                <h3>Conceptos fundamentales</h3>
                <p>Aprende los principales conceptos.</p>
              </div>

              <button className="lesson-button">
                Empezar →
              </button>
            </div>

            <div className="lesson-card">
              <div className="lesson-number">3</div>

              <div className="lesson-info">
                <h3>Aplicando lo aprendido</h3>
                <p>Practica con diferentes ejercicios.</p>
              </div>

              <button className="lesson-button">
                Empezar →
              </button>
            </div>

            <div className="lesson-card">
              <div className="lesson-number">4</div>

              <div className="lesson-info">
                <h3>Repaso y evaluación</h3>
                <p>Comprueba cuánto has aprendido.</p>
              </div>

              <button className="lesson-button">
                Empezar →
              </button>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CourseDetail;