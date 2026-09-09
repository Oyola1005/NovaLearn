import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("novalearn_user");

    if (!savedUser) {
      alert("No existe una cuenta. Crea una cuenta primero.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (user.email !== email || user.password !== password) {
      alert("Correo o contraseña incorrectos.");
      return;
    }

    localStorage.setItem("novalearn_logged", "true");

    if (user.grade) {
      navigate("/dashboard");
    } else {
      navigate("/grades");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-brand">
        <Link to="/" className="auth-logo">
          <span>✦</span>
          NovaLearn
        </Link>

        <p>
          Aprende. Juega. Descubre.
        </p>
      </div>

      <div className="auth-card">

        <div className="auth-header">
          <span className="auth-label">BIENVENIDO</span>

          <h1>
            Qué bueno verte
          </h1>

          <p>
            Inicia sesión para continuar aprendiendo.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Correo electrónico</label>

            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>

            <input
              type="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-button">
            Iniciar sesión →
          </button>

        </form>

        <div className="auth-footer">
          ¿Todavía no tienes cuenta?

          <Link to="/register">
            Crear cuenta
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Login;