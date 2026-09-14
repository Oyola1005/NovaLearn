import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { quizzes } from "../data/quizzes";
import {
  XP_PER_QUIZ_ANSWER,
  addXP,
} from "../utils/gamification";
import "./Quiz.css";

function Quiz() {
  const { id } = useParams();

  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  const questions = quizzes[id] || [];

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [score, setScore] =
    useState(0);

  const [finished, setFinished] =
    useState(false);

  const [earnedXP, setEarnedXP] =
    useState(0);

  const [answerChecked, setAnswerChecked] =
    useState(false);

  /* ========================================
     SCROLL REVEAL
  ======================================== */

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".quiz-scroll-reveal"
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

    return () => observer.disconnect();
  }, [currentQuestion, finished]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (questions.length === 0) {
    return (
      <div className="quiz-page">
        <Navbar />

        <main className="quiz-container">
          <div className="quiz-not-found quiz-scroll-reveal visible">
            <div>🏆</div>

            <h1>
              Quiz no encontrado
            </h1>

            <p>
              No encontramos este quiz.
            </p>

            <Link to="/quizzes">
              Volver a quizzes
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const question =
    questions[currentQuestion];

  /* ========================================
     COMPROBAR RESPUESTA
  ======================================== */

  const isCorrectAnswer = (answerIndex) => {
    if (answerIndex === null) {
      return false;
    }

    const selected =
      question.options[answerIndex];

    return (
      String(selected).trim().toLowerCase() ===
      String(question.answer).trim().toLowerCase()
    );
  };

  /* ========================================
     SELECCIONAR RESPUESTA
  ======================================== */

  const handleAnswer = (answerIndex) => {
    if (answerChecked) {
      return;
    }

    setSelectedAnswer(answerIndex);

    setAnswerChecked(true);

    if (isCorrectAnswer(answerIndex)) {
      setScore(
        (previousScore) =>
          previousScore + 1
      );
    }
  };

  /* ========================================
     FINALIZAR QUIZ
  ======================================== */

  const finishQuiz = (finalScore) => {
    const xp =
      finalScore * XP_PER_QUIZ_ANSWER;

    const currentUser = JSON.parse(
      localStorage.getItem("novalearn_user")
    );

    if (!currentUser) {
      return;
    }

    const completedQuizzes =
      currentUser.completedQuizzes || [];

    const alreadyCompleted =
      completedQuizzes.includes(id);

    let updatedUser = currentUser;

    if (!alreadyCompleted) {
      const xpUser = addXP(xp);

      if (xpUser) {
        updatedUser = {
          ...xpUser,

          completedQuizzes: [
            ...completedQuizzes,
            id,
          ],
        };

        localStorage.setItem(
          "novalearn_user",
          JSON.stringify(updatedUser)
        );
      }
    }

    setEarnedXP(
      alreadyCompleted ? 0 : xp
    );

    setFinished(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ========================================
     SIGUIENTE PREGUNTA
  ======================================== */

  const nextQuestion = () => {
    if (!answerChecked) {
      return;
    }

    /*
      handleAnswer() ya sumó el punto
      de la respuesta actual.

      Por eso, en la última pregunta
      usamos directamente score.
    */

    if (
      currentQuestion ===
      questions.length - 1
    ) {
      const finalScore = score;

      finishQuiz(finalScore);

      return;
    }

    setCurrentQuestion(
      (previousQuestion) =>
        previousQuestion + 1
    );

    setSelectedAnswer(null);

    setAnswerChecked(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ========================================
     REINICIAR QUIZ
  ======================================== */

  const restartQuiz = () => {
    setCurrentQuestion(0);

    setSelectedAnswer(null);

    setScore(0);

    setFinished(false);

    setEarnedXP(0);

    setAnswerChecked(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ========================================
     RESULTADO
  ======================================== */

  if (finished) {
    const percentage =
      Math.round(
        (score / questions.length) * 100
      );

    let resultMessage =
      "Sigue practicando. Cada intento te ayuda a mejorar.";

    if (percentage === 100) {
      resultMessage =
        "¡Excelente! Dominaste este quiz. 🌟";
    } else if (percentage >= 70) {
      resultMessage =
        "¡Muy buen trabajo! Ya estás dominando el tema. 🚀";
    } else if (percentage >= 50) {
      resultMessage =
        "¡Bien! Repasa un poco más y vuelve a intentarlo. 💪";
    }

    return (
      <div className="quiz-page">
        <Navbar />

        <main className="quiz-container">
          <div className="quiz-result quiz-scroll-reveal visible">
            <div className="result-icon">
              {percentage === 100
                ? "🏆"
                : percentage >= 70
                ? "🎉"
                : "💪"}
            </div>

            <span className="result-label">
              RESULTADO
            </span>

            <h1>
              ¡Quiz terminado!
            </h1>

            <p className="result-score-label">
              Obtuviste
            </p>

            <div className="result-score">
              {score}

              <span>
                / {questions.length}
              </span>
            </div>

            <div className="result-percentage">
              {percentage}%
            </div>

            <p className="result-message">
              {resultMessage}
            </p>

            {earnedXP > 0 && (
              <div className="xp-earned quiz-scroll-reveal visible">
                <span>
                  ⚡
                </span>

                <div>
                  <strong>
                    +{earnedXP} XP
                  </strong>

                  <small>
                    XP ganados
                  </small>
                </div>
              </div>
            )}

            {earnedXP === 0 && (
              <div className="already-completed quiz-scroll-reveal visible">
                Este quiz ya había sido completado.
                Puedes volver a intentarlo para practicar.
              </div>
            )}

            <div className="result-actions quiz-scroll-reveal visible">
              <Link
                to="/quizzes"
                className="result-button primary"
              >
                Ver más quizzes
              </Link>

              <button
                onClick={restartQuiz}
                className="result-button secondary"
              >
                Intentar de nuevo
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  /* ========================================
     PROGRESO
  ======================================== */

  const progress =
    ((currentQuestion + 1) /
      questions.length) *
    100;

  const selectedIsCorrect =
    isCorrectAnswer(selectedAnswer);

  /* ========================================
     QUIZ
  ======================================== */

  return (
    <div className="quiz-page">
      <Navbar />

      <main className="quiz-container">

        <div className="quiz-top quiz-scroll-reveal visible">
          <Link
            to="/quizzes"
            className="quiz-back"
          >
            ← Volver
          </Link>

          <div className="quiz-progress-info">
            <span>
              Pregunta{" "}
              {currentQuestion + 1} de{" "}
              {questions.length}
            </span>

            <strong>
              {Math.round(progress)}%
            </strong>
          </div>
        </div>

        <div className="quiz-progress-bar quiz-scroll-reveal visible">
          <div
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <section className="question-card quiz-scroll-reveal">

          <div className="question-number">
            PREGUNTA {currentQuestion + 1}
          </div>

          <h1>
            {question.question}
          </h1>

          <p className="question-instruction">
            Selecciona una respuesta
          </p>

          <div className="answer-options">

            {question.options.map(
              (option, index) => {

                const selected =
                  selectedAnswer === index;

                const correct =
                  String(option)
                    .trim()
                    .toLowerCase() ===
                  String(question.answer)
                    .trim()
                    .toLowerCase();

                let optionClass =
                  "answer-option";

                if (answerChecked) {
                  if (correct) {
                    optionClass +=
                      " answer-correct";
                  } else if (selected) {
                    optionClass +=
                      " answer-incorrect";
                  }
                } else if (selected) {
                  optionClass +=
                    " answer-selected";
                }

                return (
                  <button
                    key={index}
                    type="button"
                    className={optionClass}
                    onClick={() =>
                      handleAnswer(index)
                    }
                    disabled={answerChecked}
                  >
                    <span className="answer-letter">
                      {String.fromCharCode(
                        65 + index
                      )}
                    </span>

                    <span className="answer-text">
                      {option}
                    </span>

                    <span className="answer-status">
                      {answerChecked &&
                        correct &&
                        "✓"}

                      {answerChecked &&
                        selected &&
                        !correct &&
                        "✕"}
                    </span>
                  </button>
                );
              }
            )}

          </div>

          {/* FEEDBACK */}

          {answerChecked && (
            <div
              className={
                selectedIsCorrect
                  ? "answer-feedback correct quiz-scroll-reveal visible"
                  : "answer-feedback incorrect quiz-scroll-reveal visible"
              }
            >
              <span>
                {selectedIsCorrect
                  ? "✓"
                  : "!"}
              </span>

              <div>
                <strong>
                  {selectedIsCorrect
                    ? "¡Respuesta correcta!"
                    : "Respuesta incorrecta"}
                </strong>

                <p>
                  {selectedIsCorrect
                    ? "Muy bien. Continúa con la siguiente pregunta."
                    : `La respuesta correcta es: ${question.answer}`}
                </p>
              </div>
            </div>
          )}

          {/* SIGUIENTE */}

          <button
            className="next-question-button"
            onClick={nextQuestion}
            disabled={!answerChecked}
          >
            {currentQuestion ===
            questions.length - 1
              ? "Ver resultado →"
              : "Siguiente pregunta →"}
          </button>

        </section>

      </main>
    </div>
  );
}

export default Quiz;