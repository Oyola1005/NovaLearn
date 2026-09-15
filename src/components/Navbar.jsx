import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("novalearn_user"))
  );

  const [menuOpen, setMenuOpen] = useState(false);

  const isLogged =
    localStorage.getItem("novalearn_logged") === "true" &&
    !!user;

  const handleLogout = () => {
    localStorage.removeItem("novalearn_logged");
    setUser(null);
    setMenuOpen(false);
    navigate("/login");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}

        <Link
          to={isLogged ? "/dashboard" : "/"}
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="logo-icon">✦</span>
          <span>NovaLearn</span>
        </Link>

        {/* BOTÓN MÓVIL */}

        <button
          className={`navbar-menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVEGACIÓN */}

        <div
          className={`navbar-content ${
            menuOpen ? "menu-open" : ""
          }`}
        >

          {!isLogged ? (
            <>
              <nav className="navbar-links">
                <a href="/#inicio" onClick={closeMenu}>
                  Inicio
                </a>

                <a
                  href="/#caracteristicas"
                  onClick={closeMenu}
                >
                  Características
                </a>

                <a
                  href="/#como-funciona"
                  onClick={closeMenu}
                >
                  Cómo funciona
                </a>
              </nav>

              <div className="navbar-actions">

                <Link
                  to="/login"
                  className="navbar-login"
                  onClick={closeMenu}
                >
                  Iniciar sesión
                </Link>

                <Link
                  to="/register"
                  className="navbar-register"
                  onClick={closeMenu}
                >
                  Crear cuenta
                </Link>

              </div>
            </>
          ) : (
            <>
              <nav className="navbar-links navbar-auth-links">

                <Link
                  to="/dashboard"
                  onClick={closeMenu}
                >
                  Inicio
                </Link>

                <Link
                  to="/courses"
                  onClick={closeMenu}
                >
                  Mis cursos
                </Link>

                <Link
                  to="/quizzes"
                  onClick={closeMenu}
                >
                  Quizzes
                </Link>

                <Link
                  to="/videos"
                  onClick={closeMenu}
                >
                  Videos
                </Link>

                <Link
                  to="/nova"
                  onClick={closeMenu}
                >
                  Nova
                </Link>

              </nav>

              <div className="navbar-actions navbar-user-actions">

                <Link
                  to="/profile"
                  className="navbar-profile"
                  onClick={closeMenu}
                >
                  <span className="profile-mini">
                    {user?.name
                      ?.charAt(0)
                      ?.toUpperCase() || "U"}
                  </span>

                  <span>
                    {user?.name?.split(" ")[0] ||
                      "Perfil"}
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

      </div>
    </header>
  );
}

export default Navbar;