import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { lessons } from "../data/lessons";
import { XP_PER_LESSON, addXP } from "../utils/gamification";
import "./Lesson.css";

function Lesson() {
  const { id } = useParams();

  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  const [completed, setCompleted] = useState(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("novalearn_user")
    );

    return (
      currentUser?.completedLessons?.includes(id) || false
    );
  });

  /*
    Animaciones al hacer scroll
  */
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".lesson-scroll-reveal"
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

    return () => {
      observer.disconnect();
    };
  }, [id]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  /*
    lessons está organizado por curso:

    {
      "mat-1": [...],
      "com-1": [...],
      "cie-1": [...]
    }

    Buscamos la lección dentro de todos los cursos.
  */

  let currentLesson = null;
  let courseId = null;
  let lessonIndex = 0;

  Object.entries(lessons).forEach(
    ([currentCourseId, courseLessons]) => {
      const index = courseLessons.findIndex(
        (lesson) => lesson.id === id
      );

      if (index !== -1) {
        currentLesson = courseLessons[index];
        courseId = currentCourseId;
        lessonIndex = index;
      }
    }
  );

  /*
    Si la lección no existe
  */

  if (!currentLesson) {
    return (
      <div className="lesson-page">
        <Navbar />

        <main className="lesson-container">
          <div className="lesson-not-found lesson-scroll-reveal visible">
            <div className="lesson-not-found-icon">
              📚
            </div>

            <h1>
              Lección no encontrada
            </h1>

            <p>
              No pudimos encontrar la lección que
              estás buscando.
            </p>

            <Link to="/courses">
              Volver a mis cursos
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const courseLessons = lessons[courseId] || [];

  const previousLesson =
    courseLessons[lessonIndex - 1];

  const nextLesson =
    courseLessons[lessonIndex + 1];

  /*
    Detectamos si tenemos un video real de YouTube.
  */

  const hasVideo =
    currentLesson.videoId &&
    currentLesson.videoId !== "REEMPLAZAR";

  /*
    Completar lección
  */

  const handleComplete = () => {
    if (completed) {
      return;
    }

    const currentUser = JSON.parse(
      localStorage.getItem("novalearn_user")
    );

    if (!currentUser) {
      return;
    }

    const completedLessons =
      currentUser.completedLessons || [];

    if (!completedLessons.includes(id)) {
      const updatedUser = addXP(XP_PER_LESSON);

      if (updatedUser) {
        const finalUser = {
          ...updatedUser,
          completedLessons: [
            ...completedLessons,
            id,
          ],
        };

        localStorage.setItem(
          "novalearn_user",
          JSON.stringify(finalUser)
        );

        setCompleted(true);
      }
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="lesson-page">

      <Navbar />

      <main className="lesson-container">

        {/* VOLVER */}

        <Link
          to={`/courses/${courseId}`}
          className="lesson-back lesson-scroll-reveal visible"
        >
          ← Volver al curso
        </Link>


        {/* HEADER */}

        <section className="lesson-header lesson-scroll-reveal">

          <div className="lesson-header-info">

            <span className="lesson-label">
              LECCIÓN {lessonIndex + 1}
            </span>

            <h1>
              {currentLesson.title}
            </h1>

            <p>
              {currentLesson.description}
            </p>

            <div className="lesson-meta">

              <span>
                ⏱️ {currentLesson.duration}
              </span>

              <span>
                ⚡ +{XP_PER_LESSON} XP
              </span>

              {completed && (
                <span className="lesson-completed-badge">
                  ✓ Completada
                </span>
              )}

            </div>

          </div>

          <div className="lesson-number-large">
            {String(lessonIndex + 1).padStart(2, "0")}
          </div>

        </section>


        {/* VIDEO */}

        <section className="lesson-video-section lesson-scroll-reveal">

          <div className="lesson-section-heading">

            <span>
              APRENDE
            </span>

            <h2>
              Video de la lección
            </h2>

          </div>

          {hasVideo ? (
            <div className="lesson-video">

              <iframe
                src={`https://www.youtube.com/embed/${currentLesson.videoId}`}
                title={currentLesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>
          ) : (
            <div className="video-placeholder">

              <div className="video-placeholder-icon">
                ▶
              </div>

              <h3>
                Video educativo
              </h3>

              <p>
                El tutorial de esta lección se
                agregará próximamente.
              </p>

              <small>
                Demo NovaLearn
              </small>

            </div>
          )}

        </section>


        {/* INFORMACIÓN */}

        <section className="lesson-content-card lesson-scroll-reveal">

          <div className="lesson-section-heading">

            <span>
              CONTENIDO
            </span>

            <h2>
              ¿Qué aprenderás?
            </h2>

          </div>

          <p>
            En esta lección aprenderás los conceptos
            principales de{" "}
            <strong>
              {currentLesson.title}
            </strong>.
            Presta atención al contenido y luego
            completa la lección para ganar XP.
          </p>

          <div className="lesson-tip">

            <span>
              💡
            </span>

            <div>

              <strong>
                Consejo de Nova
              </strong>

              <p>
                Intenta explicar con tus propias
                palabras lo que aprendiste. Eso te
                ayudará a recordar mejor el contenido.
              </p>

            </div>

          </div>

        </section>


        {/* COMPLETAR */}

        <section className="lesson-complete-card lesson-scroll-reveal">

          <div>

            <span>
              {completed
                ? "LECCIÓN COMPLETADA"
                : "¿TERMINASTE LA LECCIÓN?"}
            </span>

            <h2>
              {completed
                ? "¡Excelente trabajo! 🎉"
                : "Marca esta lección como completada"}
            </h2>

            <p>
              {completed
                ? `Ya ganaste ${XP_PER_LESSON} XP por esta lección.`
                : `Completa la lección para ganar ${XP_PER_LESSON} XP.`}
            </p>

          </div>

          <button
            onClick={handleComplete}
            disabled={completed}
            className={
              completed
                ? "complete-button completed"
                : "complete-button"
            }
          >
            {completed
              ? "✓ Completada"
              : `Completar +${XP_PER_LESSON} XP`}
          </button>

        </section>


        {/* NAVEGACIÓN */}

        <div className="lesson-navigation lesson-scroll-reveal">

          {previousLesson ? (
            <Link
              to={`/lessons/${previousLesson.id}`}
              className="lesson-nav-button secondary"
            >
              ←

              <span>
                <small>
                  Anterior
                </small>

                {previousLesson.title}
              </span>

            </Link>
          ) : (
            <Link
              to={`/courses/${courseId}`}
              className="lesson-nav-button secondary"
            >
              ←

              <span>
                <small>
                  Volver
                </small>

                Al curso
              </span>

            </Link>
          )}

          {nextLesson ? (
            <Link
              to={`/lessons/${nextLesson.id}`}
              className="lesson-nav-button primary"
            >

              <span>
                <small>
                  Siguiente
                </small>

                {nextLesson.title}
              </span>

              →

            </Link>
          ) : (
            <Link
              to={`/courses/${courseId}`}
              className="lesson-nav-button primary"
            >

              <span>
                <small>
                  Finalizar
                </small>

                Volver al curso
              </span>

              →

            </Link>
          )}

        </div>

      </main>

    </div>
  );
}

export default Lesson;