import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-icon">✦</span>
        <span>NovaLearn</span>
      </Link>

      <div className="navbar-links">
        <a href="#inicio">Inicio</a>
        <a href="#caracteristicas">Características</a>
        <a href="#como-funciona">Cómo funciona</a>
      </div>

      <div className="navbar-actions">
        <Link to="/login" className="login-link">
          Iniciar sesión
        </Link>

        <Link to="/register" className="register-button">
          Crear cuenta
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;