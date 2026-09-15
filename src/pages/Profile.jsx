import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  getLevel,
  getLevelProgress,
  getNextLevelXP,
} from "../utils/gamification";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  /* ========================================
     SCROLL REVEAL
  ======================================== */

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".profile-scroll-reveal"
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
  }, []);

  if (!user) {
    navigate("/login");
    return null;
  }

  const xp = user.points || 0;
  const level = getLevel(xp);

  const levelProgress = getLevelProgress(xp);
  const nextLevelXP = getNextLevelXP(xp);

  const completedLessons =
    user.completedLessons || [];

  const completedQuizzes =
    user.completedQuizzes || [];

  const levelPercentage = levelProgress;

  const handleLogout = () => {
    localStorage.removeItem(
      "novalearn_logged"
    );

    navigate("/login");
  };

  return (
    <div className="profile-page">

      <Navbar />

      <main className="profile-container">

        {/* ========================================
            HEADER
        ======================================== */}

        <section className="profile-header profile-scroll-reveal">

          <div className="profile-avatar">
            {user.name
              ?.charAt(0)
              ?.toUpperCase() || "U"}
          </div>

          <div>
            <span>
              MI PERFIL
            </span>

            <h1>
              {user.name}
            </h1>

            <p>
              {user.email}
            </p>
          </div>

        </section>

        {/* ========================================
            LEVEL / XP
        ======================================== */}

        <section className="profile-level profile-scroll-reveal">

          <div className="profile-level-number">
            {level}
          </div>

          <div className="profile-level-info">

            <span>
              NIVEL ACTUAL
            </span>

            <h2>
              Nivel {level}
            </h2>

            <p>
              {xp} XP acumulados
            </p>

            <div className="profile-xp-progress">

              <div className="profile-xp-top">
                <span>
                  Progreso al siguiente nivel
                </span>

                <strong>
                  {levelProgress}/100 XP
                </strong>
              </div>

              <div className="profile-xp-bar">
                <div
                  style={{
                    width: `${levelPercentage}%`,
                  }}
                />
              </div>

              <small>
                Faltan {nextLevelXP} XP para subir de nivel
              </small>

            </div>

          </div>

          <Link to="/courses">
            Continuar aprendiendo →
          </Link>

        </section>

        {/* ========================================
            STATS
        ======================================== */}

        <section className="profile-stats">

          <div className="profile-stat-card profile-scroll-reveal">
            <span>⚡</span>

            <strong>
              {xp}
            </strong>

            <small>
              XP acumulados
            </small>
          </div>

          <div className="profile-stat-card profile-scroll-reveal">
            <span>📚</span>

            <strong>
              {completedLessons.length}
            </strong>

            <small>
              Lecciones completadas
            </small>
          </div>

          <div className="profile-stat-card profile-scroll-reveal">
            <span>🏆</span>

            <strong>
              {completedQuizzes.length}
            </strong>

            <small>
              Quizzes completados
            </small>
          </div>

          <div className="profile-stat-card profile-scroll-reveal">
            <span>🔥</span>

            <strong>
              {user.streak || 0}
            </strong>

            <small>
              Días de racha
            </small>
          </div>

        </section>

        {/* ========================================
            GAMIFICATION
        ======================================== */}

        <section className="profile-gamification profile-scroll-reveal">

          <div className="gamification-heading">

            <div>
              <span>
                TU PROGRESO
              </span>

              <h2>
                Sigue avanzando 🚀
              </h2>
            </div>

            <div className="gamification-level-badge">
              NIVEL {level}
            </div>

          </div>

          <div className="gamification-message">

            <div className="gamification-message-icon">
              ⚡
            </div>

            <div>
              <strong>
                {nextLevelXP === 100
                  ? "¡Comienza tu próximo nivel!"
                  : `Te faltan ${nextLevelXP} XP para subir`}
              </strong>

              <p>
                Completa lecciones y quizzes para
                conseguir más XP y avanzar en NovaLearn.
              </p>
            </div>

          </div>

        </section>

        {/* ========================================
            INFORMATION
        ======================================== */}

        <section className="profile-information">

          <div className="profile-card profile-scroll-reveal">

            <span>
              INFORMACIÓN
            </span>

            <h2>
              Datos del estudiante
            </h2>

            <div className="profile-row">
              <span>
                Nombre
              </span>

              <strong>
                {user.name}
              </strong>
            </div>

            <div className="profile-row">
              <span>
                Correo
              </span>

              <strong>
                {user.email}
              </strong>
            </div>

            <div className="profile-row">
              <span>
                Grado
              </span>

              <strong>
                {user.grade}° de secundaria
              </strong>
            </div>

          </div>

          <div className="profile-actions profile-scroll-reveal">

            <Link to="/dashboard">
              ← Volver al Dashboard
            </Link>

            <button
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Profile;