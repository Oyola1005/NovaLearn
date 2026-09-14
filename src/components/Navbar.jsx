import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("novalearn_user"))
  );

  const isLogged =
    localStorage.getItem("novalearn_logged") === "true" &&
    !!user;

  const handleLogout = () => {
    localStorage.removeItem("novalearn_logged");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to={isLogged ? "/dashboard" : "/"} className="navbar-logo">
          <span className="logo-icon">✦</span>
          <span>NovaLearn</span>
        </Link>

        {!isLogged ? (
          <>
            <nav className="navbar-links">
              <a href="/#inicio">Inicio</a>
              <a href="/#caracteristicas">Características</a>
              <a href="/#como-funciona">Cómo funciona</a>
            </nav>

            <div className="navbar-actions">
              <Link
                to="/login"
                className="navbar-login"
              >
                Iniciar sesión
              </Link>

              <Link
                to="/register"
                className="navbar-register"
              >
                Crear cuenta
              </Link>
            </div>
          </>
        ) : (
          <>
            <nav className="navbar-links navbar-auth-links">
              <Link to="/dashboard">
                Inicio
              </Link>

              <Link to="/courses">
                Mis cursos
              </Link>

              <Link to="/quizzes">
                Quizzes
              </Link>

              <Link to="/videos">
                Videos
              </Link>

              <Link to="/nova">
                Nova
              </Link>
            </nav>

            <div className="navbar-actions navbar-user-actions">
              <Link
                to="/profile"
                className="navbar-profile"
              >
                <span className="profile-mini">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </span>

                <span>
                  {user?.name?.split(" ")[0] || "Perfil"}
                </span>
              </Link>

              <button
                onClick={handleLogout}
                className="navbar-logout"
              >
                Salir
              </button>
            </div>
          </>
        )}

      </div>
    </header>
  );
}

export default Navbar;