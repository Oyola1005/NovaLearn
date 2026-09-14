import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../data/courses";
import { lessons } from "../data/lessons";
import { getCourseProgress } from "../utils/progress";
import "./Courses.css";

function Courses() {
  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  if (!user) {
    window.location.href = "/login";
    return null;
  }

  const allCourses = Object.values(courses).flat();

  const userCourses = allCourses.filter(
    (course) =>
      Number(course.grade) === Number(user.grade)
  );

  const completedLessons =
    user.completedLessons || [];

  return (
    <div className="courses-page">
      <Navbar />

      <main className="courses-container">

        <section className="courses-header">
          <div>
            <span className="courses-label">
              TU APRENDIZAJE
            </span>

            <h1>
              Mis cursos 📚
            </h1>

            <p>
              Explora los cursos de tu grado y
              continúa aprendiendo a tu ritmo.
            </p>
          </div>

          <div className="grade-badge">
            {user.grade}°
            <span>Secundaria</span>
          </div>
        </section>

        <section className="courses-info">
          <div>
            <strong>{userCourses.length}</strong>
            <span>Cursos disponibles</span>
          </div>

          <div>
            <strong>
              {userCourses.reduce(
                (total, course) =>
                  total + (lessons[course.id]?.length || 0),
                0
              )}
            </strong>
            <span>Lecciones</span>
          </div>

          <div>
            <strong>
              {completedLessons.length}
            </strong>
            <span>Completadas</span>
          </div>
        </section>

        <section className="courses-grid">

          {userCourses.map((course) => {
            const courseLessons =
              lessons[course.id] || [];

            const progress = getCourseProgress(
              course.id,
              completedLessons
            );

            return (
              <article
                className="course-card"
                key={course.id}
              >

                <div className="course-card-top">
                  <div className="course-big-icon">
                    {course.icon}
                  </div>

                  <span className="course-percent">
                    {progress}%
                  </span>
                </div>

                <div className="course-card-body">

                  <span className="course-category">
                    {course.category}
                  </span>

                  <h2>
                    {course.name}
                  </h2>

                  <p>
                    {course.description}
                  </p>

                  <div className="course-meta">
                    <span>
                      📖 {courseLessons.length} lecciones
                    </span>

                    <span>
                      ⭐ {courseLessons.length * 20} XP
                    </span>
                  </div>

                  <div className="course-progress-area">

                    <div className="course-progress-track">
                      <div
                        className="course-progress-fill"
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    </div>

                    <span>
                      {progress}% completado
                    </span>

                  </div>

                  <Link
                    to={`/courses/${course.id}`}
                    className="course-button"
                  >
                    {progress > 0
                      ? "Continuar curso →"
                      : "Comenzar curso →"}
                  </Link>

                </div>

              </article>
            );
          })}

        </section>

        {userCourses.length === 0 && (
          <section className="courses-empty">
            <span>📚</span>
            <h2>No encontramos cursos</h2>
            <p>
              Revisa que tengas un grado seleccionado.
            </p>

            <Link to="/grades">
              Seleccionar grado
            </Link>
          </section>
        )}

      </main>
    </div>
  );
}

export default Courses;