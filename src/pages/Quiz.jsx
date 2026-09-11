import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { quizzes } from "../data/quizzes";
import "./Quiz.css";

function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("novalearn_user"));

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
        <h2>Quiz próximamente 🚀</h2>

        <p>
          Todavía no hay preguntas disponibles para esta lección.
        </p>

        <Link to="/courses">
          Volver a cursos
        </Link>
      </div>
    );
  }

  const question = questions[currentQuestion];

  const handleAnswer = () => {
    if (!selectedAnswer) return;

    let newScore = score;

    if (selectedAnswer === question.answer) {
      newScore += 1;
      setScore(newScore);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      finishQuiz(newScore);
    }
  };

  const finishQuiz = (finalScore) => {
    const xp = finalScore * 10;

    const completedQuizzes = user.completedQuizzes || [];

    const updatedUser = {
      ...user,
      points: (user.points || 0) + xp,
      completedQuizzes: completedQuizzes.includes(id)
        ? completedQuizzes
        : [...completedQuizzes, id]
    };

    localStorage.setItem(
      "novalearn_user",
      JSON.stringify(updatedUser)
    );

    setScore(finalScore);
    setFinished(true);
  };

  if (finished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <div className="quiz-page">

        <main className="quiz-result">

          <div className="result-icon">
            {percentage >= 60 ? "🎉" : "💪"}
          </div>

          <h1>¡Quiz terminado!</h1>

          <p className="result-score">
            Obtuviste {score} de {questions.length}
          </p>

          <div className="result-percentage">
            {percentage}%
          </div>

          <p className="result-xp">
            ⭐ Ganaste {score * 10} XP
          </p>

          <p>
            {percentage >= 60
              ? "¡Muy bien! Sigue así."
              : "Sigue practicando. ¡Puedes mejorar!"}
          </p>

          <div className="result-buttons">

            <Link to="/dashboard">
              Ir al dashboard
            </Link>

            <Link to="/courses">
              Ver cursos
            </Link>

          </div>

        </main>

      </div>
    );
  }

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-page">

      <header className="quiz-header">

        <Link to="/courses">
          ← Salir del quiz
        </Link>

        <span>
          Pregunta {currentQuestion + 1} de {questions.length}
        </span>

      </header>

      <main className="quiz-container">

        <div className="quiz-progress">
          <div
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <section className="question-card">

          <h1>{question.question}</h1>

          <div className="answer-list">

            {question.options.map((option) => (

              <button
                key={option}
                className={
                  selectedAnswer === option
                    ? "answer selected"
                    : "answer"
                }
                onClick={() => setSelectedAnswer(option)}
              >
                {option}
              </button>

            ))}

          </div>

          <button
            className="next-question"
            onClick={handleAnswer}
            disabled={!selectedAnswer}
          >
            {currentQuestion + 1 === questions.length
              ? "Terminar quiz"
              : "Siguiente →"}
          </button>

        </section>

      </main>

    </div>
  );
}

export default Quiz;