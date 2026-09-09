import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Completa todos los campos.");
      return;
    }

    const user = {
      name,
      email,
      password,
      grade: null,
      points: 0,
      level: 1,
      completedLessons: [],
      completedQuizzes: [],
      streak: 0
    };

    localStorage.setItem("novalearn_user", JSON.stringify(user));

    navigate("/grades");
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
          <span className="auth-label">CREAR CUENTA</span>

          <h1>
            Comienza tu aventura
          </h1>

          <p>
            Crea tu cuenta y comienza a aprender con NovaLearn.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Nombre</label>

            <input
              type="text"
              placeholder="Escribe tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
              placeholder="Crea una contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-button">
            Crear cuenta →
          </button>

        </form>

        <div className="auth-footer">
          ¿Ya tienes una cuenta?

          <Link to="/login">
            Iniciar sesión
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Register;