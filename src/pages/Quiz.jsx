import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { quizzes } from "../data/quizzes";
import {
  XP_PER_QUIZ_ANSWER,
  addXP,
} from "../utils/gamification";
import "./Quiz.css";

function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  const questions = quizzes[id] || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);

  if (!user) {
    navigate("/login");
    return null;
  }

  if (questions.length === 0) {
    return (
      <div className="quiz-page">
        <div className="quiz-empty">
          <h2>Quiz no encontrado</h2>
          <p>
            Todavía no hay preguntas disponibles para este
            quiz.
          </p>

          <Link to="/quizzes" className="quiz-back-button">
            Volver a quizzes
          </Link>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  const handleAnswer = (answerIndex) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);

    if (answerIndex === question.correctAnswer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const finishQuiz = () => {
    const finalScore =
      score +
      (selectedAnswer === question.correctAnswer ? 1 : 0);

    const xp = finalScore * XP_PER_QUIZ_ANSWER;

    const completedQuizzes =
      user.completedQuizzes || [];

    const alreadyCompleted =
      completedQuizzes.includes(id);

    let updatedUser = user;

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

    setScore(finalScore);
    setEarnedXP(alreadyCompleted ? 0 : xp);
    setFinished(true);
  };

  const nextQuestion = () => {
    if (selectedAnswer === null) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(
        (previousQuestion) => previousQuestion + 1
      );
      setSelectedAnswer(null);
    } else {
      finishQuiz();
    }
  };

  if (finished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <div className="quiz-page">
        <div className="quiz-result">
          <div className="result-icon">
            {percentage >= 80
              ? "🏆"
              : percentage >= 60
              ? "⭐"
              : "💪"}
          </div>

          <h1>¡Quiz terminado!</h1>

          <p className="result-score">
            Obtuviste{" "}
            <strong>
              {score} / {questions.length}
            </strong>
          </p>

          <div className="result-percentage">
            {percentage}%
          </div>

          {earnedXP > 0 ? (
            <p className="result-xp">
              ✨ Ganaste {earnedXP} XP
            </p>
          ) : (
            <p className="result-xp">
              Este quiz ya había sido completado.
            </p>
          )}

          <div className="result-actions">
            <button
              onClick={() => navigate("/quizzes")}
              className="quiz-primary-button"
            >
              Ver mis quizzes
            </button>

            <button
              onClick={() => navigate(-1)}
              className="quiz-secondary-button"
            >
              Volver al curso
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-container">

        <div className="quiz-top">
          <Link to="/quizzes" className="quiz-back">
            ← Volver
          </Link>

          <span className="quiz-progress">
            Pregunta {currentQuestion + 1} de{" "}
            {questions.length}
          </span>
        </div>

        <div className="quiz-progress-bar">
          <div
            style={{
              width: `${
                ((currentQuestion + 1) /
                  questions.length) *
                100
              }%`,
            }}
          />
        </div>

        <div className="quiz-card">

          <span className="quiz-question-number">
            PREGUNTA {currentQuestion + 1}
          </span>

          <h1>{question.question}</h1>

          <div className="quiz-options">
            {question.options.map(
              (option, index) => {

                let optionClass = "";

                if (selectedAnswer !== null) {
                  if (
                    index === question.correctAnswer
                  ) {
                    optionClass = "correct";
                  } else if (
                    index === selectedAnswer
                  ) {
                    optionClass = "incorrect";
                  }
                }

                return (
                  <button
                    key={index}
                    className={`quiz-option ${optionClass}`}
                    onClick={() =>
                      handleAnswer(index)
                    }
                    disabled={
                      selectedAnswer !== null
                    }
                  >
                    <span className="option-letter">
                      {String.fromCharCode(
                        65 + index
                      )}
                    </span>

                    <span>{option}</span>

                    {selectedAnswer !== null &&
                      index ===
                        question.correctAnswer && (
                        <span>✓</span>
                      )}

                    {selectedAnswer !== null &&
                      index === selectedAnswer &&
                      index !==
                        question.correctAnswer && (
                        <span>✕</span>
                      )}
                  </button>
                );
              }
            )}
          </div>

          {selectedAnswer !== null && (
            <div
              className={
                selectedAnswer ===
                question.correctAnswer
                  ? "answer-feedback correct-feedback"
                  : "answer-feedback incorrect-feedback"
              }
            >
              {selectedAnswer ===
              question.correctAnswer
                ? "¡Correcto! 🎉"
                : "Casi. Revisa la respuesta correcta y sigue intentando."}
            </div>
          )}

          <button
            className="quiz-next-button"
            onClick={nextQuestion}
            disabled={selectedAnswer === null}
          >
            {currentQuestion === questions.length - 1
              ? "Terminar quiz"
              : "Siguiente pregunta →"}
          </button>

        </div>
      </div>
    </div>
  );
}

export default Quiz;