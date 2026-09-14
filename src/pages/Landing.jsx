import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Landing.css";

function Landing() {
  const landingRef = useRef(null);

  useEffect(() => {
    const elements = landingRef.current?.querySelectorAll(".reveal");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing" ref={landingRef}>

      <Navbar />

      {/* HERO */}
      <section className="hero" id="inicio">

        <div className="hero-content">

          <div className="hero-badge">
            ✦ La nueva forma de aprender
          </div>

          <h1>
            Aprende.
            <br />
            <span>Juega.</span>
            <br />
            Descubre.
          </h1>

          <p>
            NovaLearn es tu espacio para aprender, practicar
            y descubrir nuevos conocimientos de una forma
            divertida.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-button">
              Comenzar ahora →
            </Link>

            <a
              href="#caracteristicas"
              className="secondary-button"
            >
              Explorar
            </a>
          </div>

          <div className="hero-stats">

            <div>
              <strong>5</strong>
              <span>Grados</span>
            </div>

            <div>
              <strong>📚</strong>
              <span>Cursos</span>
            </div>

            <div>
              <strong>🏆</strong>
              <span>Retos</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="floating-card card-one">
            <span>🔥</span>

            <div>
              <strong>Racha de aprendizaje</strong>
              <small>5 días seguidos</small>
            </div>
          </div>

          <div className="learning-card">

            <div className="learning-card-top">
              <span>Tu progreso</span>
              <span>+120 XP</span>
            </div>

            <div className="progress-circle">

              <div>
                <strong>72%</strong>
                <small>Completado</small>
              </div>

            </div>

            <h3>Continúa aprendiendo</h3>

            <div className="mini-course">

              <span>📐</span>

              <div>
                <strong>Matemática</strong>
                <small>8 de 12 lecciones</small>
              </div>

            </div>

            <div className="mini-progress">
              <div></div>
            </div>

            <button>
              Continuar lección →
            </button>

          </div>

          <div className="floating-card card-two">

            <span>🏆</span>

            <div>
              <strong>¡Nuevo logro!</strong>
              <small>Maestro de Matemática</small>
            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section
        className="features-section reveal"
        id="caracteristicas"
      >

        <div className="section-heading">

          <span>TODO EN UN SOLO LUGAR</span>

          <h2>
            Aprender nunca fue tan divertido
          </h2>

          <p>
            Todo lo que necesitas para avanzar en tus estudios
            y convertir cada aprendizaje en un reto.
          </p>

        </div>

        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon purple">
              📚
            </div>

            <h3>Cursos por grado</h3>

            <p>
              Encuentra cursos organizados especialmente
              para tu grado escolar.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon blue">
              🎥
            </div>

            <h3>Videos educativos</h3>

            <p>
              Aprende con videos tutoriales seleccionados
              para complementar tus lecciones.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon yellow">
              🏆
            </div>

            <h3>Quizzes y retos</h3>

            <p>
              Pon a prueba tus conocimientos y gana XP
              mientras avanzas.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon green">
              🤖
            </div>

            <h3>Nova AI</h3>

            <p>
              Un asistente educativo que te ayudará a
              resolver tus dudas.
            </p>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section
        className="how-section reveal"
        id="como-funciona"
      >

        <div className="section-heading">

          <span>¿CÓMO FUNCIONA?</span>

          <h2>
            Empieza en cuatro pasos
          </h2>

        </div>

        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <h3>
              Crea tu cuenta
            </h3>

            <p>
              Regístrate gratis y comienza tu experiencia
              en NovaLearn.
            </p>

          </div>

          <div className="step">

            <div className="step-number">
              02
            </div>

            <h3>
              Elige tu grado
            </h3>

            <p>
              Selecciona entre primero y quinto de secundaria.
            </p>

          </div>

          <div className="step">

            <div className="step-number">
              03
            </div>

            <h3>
              Aprende
            </h3>

            <p>
              Explora cursos, lecciones y videos educativos.
            </p>

          </div>

          <div className="step">

            <div className="step-number">
              04
            </div>

            <h3>
              Gana XP
            </h3>

            <p>
              Completa quizzes, consigue logros y sube de nivel.
            </p>

          </div>

        </div>

      </section>

      {/* AI */}
      <section className="ai-section reveal">

        <div className="ai-content">

          <div className="ai-label">
            ✦ NOVA AI
          </div>

          <h2>
            ¿Tienes una duda?
            <br />
            <span>Pregúntale a Nova.</span>
          </h2>

          <p>
            Nuestro asistente educativo estará ahí para
            explicarte conceptos y ayudarte a entender
            tus lecciones.
          </p>

          <Link
            to="/dashboard"
            className="primary-button"
          >
            Conocer a Nova →
          </Link>

        </div>

        <div className="ai-chat">

          <div className="chat-header">

            <div className="nova-avatar">
              ✦
            </div>

            <div>
              <strong>Nova</strong>
              <small>Asistente educativo</small>
            </div>

            <span className="online-dot"></span>

          </div>

          <div className="chat-body">

            <div className="nova-message">
              ¡Hola! 👋 Soy Nova.
              <br />
              ¿Qué quieres aprender hoy?
            </div>

            <div className="student-message">
              ¿Puedes ayudarme con matemáticas?
            </div>

            <div className="nova-message">
              ¡Claro! 📐 Puedo ayudarte a entender
              ecuaciones, geometría y mucho más.
            </div>

          </div>

          <div className="chat-input">
            Escribe tu pregunta...
            <span>➤</span>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section reveal">

        <div>

          <span>
            ¿LISTO PARA COMENZAR?
          </span>

          <h2>
            Tu próxima aventura de aprendizaje comienza aquí.
          </h2>

        </div>

        <Link
          to="/register"
          className="cta-button"
        >
          Crear mi cuenta →
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-brand">

          <div className="navbar-logo">

            <span className="logo-icon">
              ✦
            </span>

            <span>
              NovaLearn
            </span>

          </div>

          <p>
            Aprende. Juega. Descubre.
          </p>

        </div>

        <div className="footer-copy">
          © 2026 NovaLearn. Proyecto educativo.
        </div>

      </footer>

    </div>
  );
}

export default Landing;