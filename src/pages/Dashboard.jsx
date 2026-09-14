import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../data/courses";
import { lessons } from "../data/lessons";
import {
  getCourseProgress,
} from "../utils/progress";
import {
  getLevel,
  getLevelProgress,
} from "../utils/gamification";

import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  useEffect(() => {
    if (!user) return;

    const revealElements =
      document.querySelectorAll(".dashboard-scroll-reveal");

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

    return () => {
      observer.disconnect();
    };
  }, [user]);

  if (!user) {
    navigate("/login");
    return null;
  }

  const allCourses = Array.isArray(courses)
    ? courses
    : Object.values(courses).flat();

  const userCourses = allCourses.filter(
    (course) =>
      Number(course.grade) === Number(user.grade)
  );

  const completedLessons =
    user.completedLessons || [];

  const xp = user.points || 0;

  const level = getLevel(xp);
  const levelProgress = getLevelProgress(xp);

  const totalLessons = userCourses.reduce(
    (total, course) => {
      return (
        total +
        (lessons[course.id]?.length || 0)
      );
    },
    0
  );

  const completedTotal = userCourses.reduce(
    (total, course) => {
      const courseLessons =
        lessons[course.id] || [];

      const completed =
        courseLessons.filter((lesson) =>
          completedLessons.includes(lesson.id)
        ).length;

      return total + completed;
    },
    0
  );

  const overallProgress =
    totalLessons > 0
      ? Math.round(
          (completedTotal / totalLessons) * 100
        )
      : 0;

  const continueCourse =
    userCourses.find((course) => {
      const progress = getCourseProgress(
        course.id,
        completedLessons
      );

      return progress < 100;
    }) || userCourses[0];

  return (
    <div className="dashboard-page">

      <Navbar />

      <main className="dashboard-container">

        {/* BIENVENIDA */}
        <section className="dashboard-welcome dashboard-scroll-reveal">

          <div>
            <span className="dashboard-label">
              TU ESPACIO DE APRENDIZAJE
            </span>

            <h1>
              ¡Hola, {user.name}! 👋
            </h1>

            <p>
              Continúa aprendiendo y alcanza tu
              próximo nivel.
            </p>
          </div>

          <div className="dashboard-level">
            <div className="level-number">
              {level}
            </div>

            <div>
              <span>Nivel</span>
              <strong>{xp} XP</strong>
            </div>
          </div>

        </section>


        {/* ESTADÍSTICAS */}
        <section className="dashboard-stats dashboard-scroll-reveal">

          <div className="dashboard-stat">
            <span className="stat-icon">⚡</span>

            <div>
              <strong>{xp}</strong>
              <small>XP acumulados</small>
            </div>
          </div>

          <div className="dashboard-stat">
            <span className="stat-icon">📚</span>

            <div>
              <strong>{completedTotal}</strong>

              <small>
                Lecciones completadas
              </small>
            </div>
          </div>

          <div className="dashboard-stat">
            <span className="stat-icon">🔥</span>

            <div>
              <strong>
                {user.streak || 0}
              </strong>

              <small>
                Días de racha
              </small>
            </div>
          </div>

          <div className="dashboard-stat">
            <span className="stat-icon">🏆</span>

            <div>
              <strong>
                {(user.completedQuizzes || [])
                  .length}
              </strong>

              <small>
                Quizzes completados
              </small>
            </div>
          </div>

        </section>


        {/* PROGRESO DEL NIVEL */}
        <section className="level-card dashboard-scroll-reveal">

          <div className="level-card-header">

            <div>
              <span>
                PROGRESO DEL NIVEL
              </span>

              <h3>
                Nivel {level}
              </h3>
            </div>

            <strong>
              {levelProgress}/100 XP
            </strong>

          </div>

          <div className="level-progress">
            <div
              style={{
                width: `${levelProgress}%`,
              }}
            />
          </div>

          <p>
            Te faltan{" "}
            <strong>
              {100 - levelProgress} XP
            </strong>{" "}
            para alcanzar el siguiente nivel.
          </p>

        </section>


        {/* CONTINUAR APRENDIENDO */}
        {continueCourse && (
          <section className="continue-section dashboard-scroll-reveal">

            <div className="section-title">

              <div>
                <span>
                  CONTINÚA APRENDIENDO
                </span>

                <h2>
                  Retoma donde lo dejaste
                </h2>
              </div>

              <Link to="/courses">
                Ver todos →
              </Link>

            </div>

            <div className="continue-card">

              <div className="continue-icon">
                {continueCourse.icon}
              </div>

              <div className="continue-info">

                <span>
                  {continueCourse.category ||
                    "Curso"}
                </span>

                <h3>
                  {continueCourse.name}
                </h3>

                <p>
                  {continueCourse.description}
                </p>

                <div className="course-progress">

                  <div className="progress-track">
                    <div
                      style={{
                        width: `${getCourseProgress(
                          continueCourse.id,
                          completedLessons
                        )}%`,
                      }}
                    />
                  </div>

                  <span>
                    {getCourseProgress(
                      continueCourse.id,
                      completedLessons
                    )}
                    %
                  </span>

                </div>

              </div>

              <Link
                to={`/courses/${continueCourse.id}`}
                className="continue-button"
              >
                Continuar →
              </Link>

            </div>

          </section>
        )}


        {/* ACCESOS RÁPIDOS */}
        <section className="dashboard-actions dashboard-scroll-reveal">

          <Link
            to="/courses"
            className="action-card"
          >
            <span>📚</span>

            <div>
              <h3>Mis cursos</h3>

              <p>
                Explora todos tus cursos.
              </p>
            </div>

            <b>→</b>
          </Link>


          <Link
            to="/quizzes"
            className="action-card"
          >
            <span>🏆</span>

            <div>
              <h3>Quizzes</h3>

              <p>
                Pon a prueba lo aprendido.
              </p>
            </div>

            <b>→</b>
          </Link>


          <Link
            to="/videos"
            className="action-card"
          >
            <span>🎥</span>

            <div>
              <h3>Videos</h3>

              <p>
                Aprende con tutoriales.
              </p>
            </div>

            <b>→</b>
          </Link>


          <Link
            to="/nova"
            className="action-card"
          >
            <span>🤖</span>

            <div>
              <h3>Hablar con Nova</h3>

              <p>
                Resuelve tus dudas.
              </p>
            </div>

            <b>→</b>
          </Link>

        </section>


        {/* PROGRESO GENERAL */}
        <section className="overall-card dashboard-scroll-reveal">

          <div>
            <span>
              PROGRESO GENERAL
            </span>

            <h2>
              Vas por buen camino 🚀
            </h2>

            <p>
              Has completado el{" "}
              {overallProgress}% de las
              lecciones de tu grado.
            </p>
          </div>

          <div className="overall-circle">
            <strong>
              {overallProgress}%
            </strong>

            <span>
              completado
            </span>
          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;