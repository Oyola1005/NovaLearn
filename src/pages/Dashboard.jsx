import { Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const savedUser = localStorage.getItem("novalearn_user");

  if (!savedUser) {
    navigate("/login");
    return null;
  }

  const user = JSON.parse(savedUser);

  const userCourses = courses[user.grade] || [];

  const logout = () => {
    localStorage.removeItem("novalearn_logged");
    navigate("/");
  };

  return (
    <div className="dashboard">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <Link to="/" className="dashboard-logo">
          <span>✦</span>
          NovaLearn
        </Link>

        <nav className="sidebar-nav">

          <Link to="/dashboard" className="sidebar-link active">
            <span>⌂</span>
            Inicio
          </Link>

          <Link to="/courses" className="sidebar-link">
            <span>📚</span>
            Mis cursos
          </Link>

          <Link to="/videos" className="sidebar-link">
            <span>🎥</span>
            Videos
          </Link>

          <Link to="/quizzes" className="sidebar-link">
            <span>🏆</span>
            Quizzes
          </Link>

          <Link to="/profile" className="sidebar-link">
            <span>👤</span>
            Mi perfil
          </Link>

        </nav>

        <div className="sidebar-bottom">

          <button
            className="logout-button"
            onClick={logout}
          >
            <span>↪</span>
            Cerrar sesión
          </button>

        </div>

      </aside>


      {/* MAIN */}

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <span className="dashboard-label">
              TU ESPACIO DE APRENDIZAJE
            </span>

            <h1>
              Hola, {user.name.split(" ")[0]} 👋
            </h1>

            <p>
              ¿Listo para continuar aprendiendo?
            </p>
          </div>

          <div className="header-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>

        </header>


        {/* STATS */}

        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon purple">
              ⭐
            </div>

            <div>
              <span>Experiencia</span>
              <strong>{user.points} XP</strong>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon yellow">
              🏆
            </div>

            <div>
              <span>Nivel</span>
              <strong>{user.level}</strong>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon orange">
              🔥
            </div>

            <div>
              <span>Racha</span>
              <strong>{user.streak} días</strong>
            </div>

          </div>

        </section>


        {/* CONTINUE */}

        <section className="continue-section">

          <div className="section-title">

            <div>
              <span>RECOMENDADO</span>
              <h2>Continúa aprendiendo</h2>
            </div>

            <Link to="/courses">
              Ver todos →
            </Link>

          </div>


          <div className="continue-card">

            <div className="continue-icon">
              {userCourses[0]?.icon || "📚"}
            </div>

            <div className="continue-info">

              <span>
                {userCourses[0]?.name || "Curso"}
              </span>

              <h3>
                Comienza tu primera lección
              </h3>

              <div className="continue-progress">

                <div>
                  <span></span>
                </div>

                <small>0% completado</small>

              </div>

            </div>

            <Link
              to={`/course/${userCourses[0]?.id}`}
              className="continue-button"
            >
              Comenzar →
            </Link>

          </div>

        </section>


        {/* COURSES */}

        <section className="courses-section">

          <div className="section-title">

            <div>
              <span>TUS CURSOS</span>

              <h2>
                Cursos de {user.grade}° de secundaria
              </h2>
            </div>

            <Link to="/courses">
              Ver todos →
            </Link>

          </div>


          <div className="dashboard-courses">

            {userCourses.map((course) => (

              <Link
                to={`/course/${course.id}`}
                className="dashboard-course"
                key={course.id}
              >

                <div className="course-icon">
                  {course.icon}
                </div>

                <div className="course-content">

                  <h3>
                    {course.name}
                  </h3>

                  <p>
                    {course.description}
                  </p>

                  <div className="course-progress">

                    <div>
                      <span
                        style={{
                          width: `${course.progress}%`
                        }}
                      ></span>
                    </div>

                    <small>
                      {course.progress}%
                    </small>

                  </div>

                </div>

                <span className="course-arrow">
                  →
                </span>

              </Link>

            ))}

          </div>

        </section>


        {/* NOVA */}

        <section className="nova-banner">

          <div className="nova-banner-icon">
            ✦
          </div>

          <div>

            <span>CONOCE A NOVA</span>

            <h2>
              ¿Tienes una duda?
            </h2>

            <p>
              Pregúntale a tu asistente educativo.
            </p>

          </div>

          <button
            onClick={() => navigate("/nova")}
          >
            Preguntar a Nova →
          </button>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;