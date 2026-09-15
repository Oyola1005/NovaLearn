import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../data/courses";
import { lessons } from "../data/lessons";
import { getCourseProgress } from "../utils/progress";
import "./Courses.css";

function Courses() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  useEffect(() => {
    if (!user) return;

    const revealElements = document.querySelectorAll(
      ".courses-scroll-reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [user]);

  if (!user) {
    navigate("/login");
    return null;
  }

  /*
    Obtenemos los cursos del grado del usuario.

    La estructura actual de courses.js puede ser:

    {
      1: [...],
      2: [...],
      3: [...],
      ...
    }

    También dejamos compatibilidad con un array.
  */

  let userCourses = [];

  if (Array.isArray(courses)) {
    userCourses = courses.filter(
      (course) =>
        Number(course.grade) === Number(user.grade)
    );
  } else {
    const coursesByGrade =
      courses[user.grade];

    if (Array.isArray(coursesByGrade)) {
      userCourses = coursesByGrade;
    } else {
      const allCourses =
        Object.values(courses).flat();

      userCourses = allCourses.filter(
        (course) =>
          Number(course.grade) === Number(user.grade)
      );
    }
  }

  const completedLessons =
    user.completedLessons || [];

  const totalLessons =
    userCourses.reduce(
      (total, course) =>
        total +
        (lessons[course.id]?.length || 0),
      0
    );

  const completedTotal =
    userCourses.reduce(
      (total, course) => {
        const courseLessons =
          lessons[course.id] || [];

        const completed =
          courseLessons.filter((lesson) =>
            completedLessons.includes(
              lesson.id
            )
          ).length;

        return total + completed;
      },
      0
    );

  const averageProgress =
    totalLessons > 0
      ? Math.round(
          (completedTotal /
            totalLessons) *
            100
        )
      : 0;

  return (
    <div className="courses-page">

      <Navbar />

      <main className="courses-container">

        {/* ========================================
            HEADER
        ======================================== */}

        <section className="courses-header courses-scroll-reveal visible">

          <div className="courses-header-content">

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

            <strong>
              {user.grade}°
            </strong>

            <span>
              Secundaria
            </span>

          </div>

        </section>

        {/* ========================================
            INFO
        ======================================== */}

        <section className="courses-info">

          <div
            className="courses-info-card courses-scroll-reveal"
            style={{
              "--courses-delay": "0s",
            }}
          >

            <div className="courses-info-icon">
              📚
            </div>

            <div>
              <strong>
                {userCourses.length}
              </strong>

              <span>
                Cursos disponibles
              </span>
            </div>

          </div>

          <div
            className="courses-info-card courses-scroll-reveal"
            style={{
              "--courses-delay": "0.08s",
            }}
          >

            <div className="courses-info-icon">
              📖
            </div>

            <div>
              <strong>
                {totalLessons}
              </strong>

              <span>
                Lecciones
              </span>
            </div>

          </div>

          <div
            className="courses-info-card courses-scroll-reveal"
            style={{
              "--courses-delay": "0.16s",
            }}
          >

            <div className="courses-info-icon">
              ✅
            </div>

            <div>
              <strong>
                {completedTotal}
              </strong>

              <span>
                Lecciones completadas
              </span>
            </div>

          </div>

        </section>

        {/* ========================================
            PROGRESO GENERAL
        ======================================== */}

        {userCourses.length > 0 && (

          <section className="courses-overview courses-scroll-reveal">

            <div>

              <span>
                PROGRESO DE TU GRADO
              </span>

              <h2>
                Sigue avanzando 🚀
              </h2>

            </div>

            <div className="courses-overview-progress">

              <strong>
                {averageProgress}%
              </strong>

              <div className="overview-track">

                <div
                  style={{
                    width: `${averageProgress}%`,
                  }}
                />

              </div>

            </div>

          </section>

        )}

        {/* ========================================
            CURSOS
        ======================================== */}

        <section className="courses-grid">

          {userCourses.map(
            (course, index) => {

              const courseLessons =
                lessons[course.id] || [];

              const progress =
                getCourseProgress(
                  course.id,
                  completedLessons
                );

              return (
                <article
                  className="course-card courses-scroll-reveal"
                  key={course.id}
                  style={{
                    "--card-delay": `${index * 0.08}s`,
                  }}
                >

                  {/* CARD TOP */}

                  <div className="course-card-top">

                    <div className="course-big-icon">
                      {course.icon}
                    </div>

                    <span className="course-percent">
                      {progress}%
                    </span>

                  </div>

                  {/* CARD BODY */}

                  <div className="course-card-body">

                    <span className="course-category">
                      {course.category ||
                        "Curso"}
                    </span>

                    <h2>
                      {course.name}
                    </h2>

                    <p>
                      {course.description}
                    </p>

                    {/* META */}

                    <div className="course-meta">

                      <span>
                        📖{" "}
                        {courseLessons.length}{" "}
                        lecciones
                      </span>

                      <span>
                        ⚡{" "}
                        {courseLessons.length *
                          20}{" "}
                        XP
                      </span>

                    </div>

                    {/* PROGRESS */}

                    <div className="course-progress-area">

                      <div className="course-progress-header">

                        <span>
                          Progreso
                        </span>

                        <strong>
                          {progress}%
                        </strong>

                      </div>

                      <div className="course-progress-track">

                        <div
                          className="course-progress-fill"
                          style={{
                            width: `${progress}%`,
                          }}
                        />

                      </div>

                    </div>

                    {/* BUTTON */}

                    <Link
                      to={`/courses/${course.id}`}
                      className="course-button"
                    >

                      <span>
                        {progress > 0
                          ? "Continuar curso"
                          : "Comenzar curso"}
                      </span>

                      <span>
                        →
                      </span>

                    </Link>

                  </div>

                </article>
              );
            }
          )}

        </section>

        {/* ========================================
            EMPTY
        ======================================== */}

        {userCourses.length === 0 && (

          <section className="courses-empty courses-scroll-reveal visible">

            <div className="empty-icon">
              📚
            </div>

            <h2>
              No encontramos cursos
            </h2>

            <p>
              Revisa que tengas un grado
              seleccionado.
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