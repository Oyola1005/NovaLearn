import { useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import { quizzes } from "../data/quizzes";

import {
  XP_PER_QUIZ_ANSWER,
  getLevel,
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
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!user) {
    navigate("/login");
    return null;
  }

  if (questions.length === 0) {
    return (
      <div className="quiz-message">
        <h2>Quiz no encontrado 😕</h2>

        <Link to="/courses">
          Volver a cursos
        </Link>
      </div>
    );
  }

  const question = questions[currentQuestion];

  const completedQuizzes =
    user.completedQuizzes || [];

  const alreadyCompleted =
    completedQuizzes.includes(id);

  const handleAnswer = () => {
    if (!selectedAnswer) {
      return;
    }

    const isCorrect =
      selectedAnswer === question.answer;

    const newScore =
      isCorrect ? score + 1 : score;

    setScore(newScore);

    const isLastQuestion =
      currentQuestion === questions.length - 1;

    if (isLastQuestion) {
      finishQuiz(newScore);
      return;
    }

    setCurrentQuestion(
      currentQuestion + 1
    );

    setSelectedAnswer("");
  };

  const finishQuiz = (finalScore) => {
    /*
      Si el quiz ya fue completado anteriormente,
      no damos XP otra vez.
    */
    if (alreadyCompleted) {
      setFinished(true);
      return;
    }

    const earnedXP =
      finalScore * XP_PER_QUIZ_ANSWER;

    const currentXP =
      user.points || 0;

    const newXP =
      currentXP + earnedXP;

    const updatedUser = {
      ...user,

      points: newXP,

      level: getLevel(newXP),

      completedQuizzes: [
        ...completedQuizzes,
        id,
      ],
    };

    localStorage.setItem(
      "novalearn_user",
      JSON.stringify(updatedUser)
    );
    
    setFinished(true);
  };

  if (finished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    const earnedXP =
      alreadyCompleted
        ? 0
        : score * XP_PER_QUIZ_ANSWER;

    return (
      <div className="quiz-page">

        <div className="quiz-result">

          <div className="quiz-result-icon">
            {percentage >= 70 ? "🎉" : "💪"}
          </div>

          <h1>¡Quiz terminado!</h1>

          <p className="quiz-result-score">
            {percentage}%
          </p>

          <p>
            Respondiste correctamente{" "}
            <strong>
              {score}
            </strong>{" "}
            de{" "}
            <strong>
              {questions.length}
            </strong>{" "}
            preguntas.
          </p>

          {alreadyCompleted ? (
            <p className="quiz-no-xp">
              Este quiz ya había sido completado.
              No se otorgó XP adicional.
            </p>
          ) : (
            <p className="quiz-earned-xp">
              ⭐ +{earnedXP} XP
            </p>
          )}

          <div className="quiz-result-actions">

            <Link
              to="/courses"
              className="quiz-button"
            >
              Volver a cursos
            </Link>

            <Link
              to="/profile"
              className="quiz-secondary-button"
            >
              Ver mi perfil
            </Link>

          </div>

        </div>

      </div>
    );
  }

  const progress =
    ((currentQuestion + 1) /
      questions.length) *
    100;

  return (
    <div className="quiz-page">

      <div className="quiz-container">

        <Link
          to="/courses"
          className="quiz-back"
        >
          ← Volver a cursos
        </Link>

        <div className="quiz-header">

          <p>NovaLearn · Quiz</p>

          <h1>
            Pon a prueba tus conocimientos 🧠
          </h1>

          <div className="quiz-progress-info">

            <span>
              Pregunta{" "}
              {currentQuestion + 1}{" "}
              de{" "}
              {questions.length}
            </span>

            <span>
              {Math.round(progress)}%
            </span>

          </div>

          <div className="quiz-progress-bar">

            <div
              className="quiz-progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        <div className="quiz-card">

          <h2>
            {question.question}
          </h2>

          <div className="quiz-options">

            {question.options.map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  className={`quiz-option ${
                    selectedAnswer === option
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedAnswer(option)
                  }
                >
                  {option}
                </button>
              )
            )}

          </div>

          <button
            type="button"
            className="quiz-next-button"
            onClick={handleAnswer}
            disabled={!selectedAnswer}
          >
            {currentQuestion ===
            questions.length - 1
              ? "Terminar quiz"
              : "Siguiente pregunta →"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Quiz;