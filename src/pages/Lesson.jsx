import { Link, useNavigate, useParams } from "react-router-dom";
import { lessons } from "../data/lessons";
import { quizzes } from "../data/quizzes";
import {
  XP_PER_LESSON,
  getLevel,
} from "../utils/gamification";
import "./Lesson.css";

function Lesson() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("novalearn_user"));

  if (!user) {
    navigate("/login");
    return null;
  }

  let lesson = null;
  let courseId = null;

  Object.entries(lessons).forEach(([key, courseLessons]) => {
    const found = courseLessons.find(
      (item) => item.id === id
    );

    if (found) {
      lesson = found;
      courseId = key;
    }
  });

  if (!lesson) {
    return (
      <div className="lesson-message">
        <h2>Lección no encontrada 😕</h2>

        <Link to="/courses">
          Volver a cursos
        </Link>
      </div>
    );
  }

  const completedLessons = user.completedLessons || [];

  const isCompleted = completedLessons.includes(id);

  const hasQuiz =
    quizzes[id] && quizzes[id].length > 0;

  const completeLesson = () => {
    // Evita ganar XP varias veces por la misma lección
    if (isCompleted) {
      return;
    }

    const currentXP = user.points || 0;

    const newXP = currentXP + XP_PER_LESSON;

    const updatedUser = {
      ...user,

      // Actualizamos XP
      points: newXP,

      // Actualizamos automáticamente el nivel
      level: getLevel(newXP),

      // Guardamos la lección como completada
      completedLessons: [
        ...completedLessons,
        id,
      ],
    };

    localStorage.setItem(
      "novalearn_user",
      JSON.stringify(updatedUser)
    );

    // Recargamos para actualizar toda la interfaz
    window.location.reload();
  };

  return (
    <div className="lesson-page">

      <header className="lesson-header">

        <Link
          to={`/course/${courseId}`}
          className="lesson-back"
        >
          ← Volver al curso
        </Link>

        <p>NovaLearn · Lección</p>

        <h1>{lesson.title}</h1>

        <span>
          ⏱️ {lesson.duration}
        </span>

      </header>

      <main className="lesson-content">

        {/* VIDEO */}

        <section className="video-container">

          {lesson.videoId === "REEMPLAZAR" ? (

            <div className="video-placeholder">

              <div>🎥</div>

              <h2>Video educativo</h2>

              <p>
                Aquí aparecerá el video de YouTube.
              </p>

            </div>

          ) : (

            <iframe
              src={`https://www.youtube.com/embed/${lesson.videoId}`}
              title={lesson.title}
              allowFullScreen
            ></iframe>

          )}

        </section>


        {/* CONTENIDO */}

        <section className="lesson-text">

          <h2>📖 Contenido de la lección</h2>

          <p>
            {lesson.description}
          </p>

          <div className="lesson-learning">

            <h3>🎯 ¿Qué aprenderás?</h3>

            <p>
              En esta lección aprenderás los conceptos
              fundamentales del tema y podrás ponerlos
              en práctica mediante un quiz.
            </p>

          </div>

        </section>


        {/* COMPLETAR */}

        <section className="lesson-complete">

          {!isCompleted ? (

            <button
              onClick={completeLesson}
              className="complete-button"
            >
              ✅ Completar lección +{XP_PER_LESSON} XP
            </button>

          ) : (

            <div className="completed-message">
              ✅ Lección completada
            </div>

          )}

        </section>


        {/* QUIZ */}

        {hasQuiz && (

          <section className="lesson-quiz-card">

            <div className="quiz-card-icon">
              🧠
            </div>

            <div className="quiz-card-content">

              <h2>
                Pon a prueba tus conocimientos
              </h2>

              <p>
                Responde las preguntas de esta lección
                y consigue más XP.
              </p>

              <span>
                {quizzes[id].length} preguntas ·
                {" "}10 XP por respuesta correcta
              </span>

            </div>

            <Link
              to={`/quiz/${id}`}
              className="quiz-button"
            >
              Hacer quiz →
            </Link>

          </section>

        )}

      </main>

    </div>
  );
}

export default Lesson;