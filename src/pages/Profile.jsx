import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getLevel } from "../utils/gamification";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  if (!user) {
    navigate("/login");
    return null;
  }

  const xp = user.points || 0;
  const level = getLevel(xp);

  const completedLessons =
    user.completedLessons || [];

  const completedQuizzes =
    user.completedQuizzes || [];

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

        <section className="profile-header">

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

        <section className="profile-level">

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

          </div>

          <Link to="/courses">
            Continuar aprendiendo →
          </Link>

        </section>

        <section className="profile-stats">

          <div>
            <span>⚡</span>
            <strong>{xp}</strong>
            <small>XP acumulados</small>
          </div>

          <div>
            <span>📚</span>
            <strong>
              {completedLessons.length}
            </strong>
            <small>
              Lecciones completadas
            </small>
          </div>

          <div>
            <span>🏆</span>
            <strong>
              {completedQuizzes.length}
            </strong>
            <small>
              Quizzes completados
            </small>
          </div>

          <div>
            <span>🔥</span>
            <strong>
              {user.streak || 0}
            </strong>
            <small>
              Días de racha
            </small>
          </div>

        </section>

        <section className="profile-information">

          <div className="profile-card">

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

          <div className="profile-actions">

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