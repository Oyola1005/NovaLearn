import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../data/courses";
import { quizzes } from "../data/quizzes";
import "./Quizzes.css";

function Quizzes() {
  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  if (!user) {
    window.location.href = "/login";
    return null;
  }

  const allCourses = Object.values(courses).flat();

  const userCourses = allCourses.filter(
    (course) =>
      Number(course.grade) === Number(user.grade)
  );

  const completedQuizzes =
    user.completedQuizzes || [];

  /*
    Obtenemos todos los quizzes relacionados
    con los cursos del estudiante.
  */

  const availableQuizzes = [];

  userCourses.forEach((course) => {
    const courseQuizzes = Object.entries(quizzes)
      .filter(([quizId]) =>
        quizId.startsWith(`${course.id}-`)
      )
      .map(([quizId, questions]) => ({
        id: quizId,
        questions,
        course,
      }));

    availableQuizzes.push(...courseQuizzes);
  });

  const totalQuestions = availableQuizzes.reduce(
    (total, quiz) =>
      total + quiz.questions.length,
    0
  );

  return (
    <div className="quizzes-page">

      <Navbar />

      <main className="quizzes-container">

        {/* HEADER */}

        <section className="quizzes-header">

          <div>
            <span className="quizzes-label">
              RETOS Y DESAFÍOS
            </span>

            <h1>
              Pon a prueba lo aprendido 🏆
            </h1>

            <p>
              Responde preguntas, demuestra tus
              conocimientos y gana XP.
            </p>
          </div>

          <div className="quiz-header-icon">
            🏆
          </div>

        </section>

        {/* STATS */}

        <section className="quiz-stats">

          <div className="quiz-stat">
            <span>🏆</span>

            <div>
              <strong>
                {availableQuizzes.length}
              </strong>

              <small>
                Quizzes disponibles
              </small>
            </div>
          </div>

          <div className="quiz-stat">
            <span>✓</span>

            <div>
              <strong>
                {completedQuizzes.length}
              </strong>

              <small>
                Quizzes completados
              </small>
            </div>
          </div>

          <div className="quiz-stat">
            <span>❓</span>

            <div>
              <strong>
                {totalQuestions}
              </strong>

              <small>
                Preguntas
              </small>
            </div>
          </div>

        </section>

        {/* LISTA */}

        <section className="quiz-list-section">

          <div className="quiz-section-heading">

            <div>
              <span>
                TUS QUIZZES
              </span>

              <h2>
                Elige un reto
              </h2>
            </div>

          </div>

          {availableQuizzes.length > 0 ? (
            <div className="quiz-grid">

              {availableQuizzes.map((quiz) => {

                const completed =
                  completedQuizzes.includes(
                    quiz.id
                  );

                return (
                  <article
                    className={`quiz-card ${
                      completed
                        ? "quiz-card-completed"
                        : ""
                    }`}
                    key={quiz.id}
                  >

                    <div className="quiz-card-top">

                      <div className="quiz-icon">
                        {quiz.course.icon}
                      </div>

                      {completed && (
                        <span className="quiz-completed">
                          ✓ Completado
                        </span>
                      )}

                    </div>

                    <div className="quiz-card-body">

                      <span className="quiz-course">
                        {quiz.course.name}
                      </span>

                      <h3>
                        Quiz {quiz.id.split("-").pop()}
                      </h3>

                      <p>
                        Demuestra cuánto has aprendido
                        en esta sección.
                      </p>

                      <div className="quiz-card-info">

                        <span>
                          ❓ {quiz.questions.length} preguntas
                        </span>

                        <span>
                          ⚡{" "}
                          {quiz.questions.length * 10} XP
                        </span>

                      </div>

                      <Link
                        to={`/quiz/${quiz.id}`}
                        className={
                          completed
                            ? "quiz-button completed"
                            : "quiz-button"
                        }
                      >
                        {completed
                          ? "Volver a intentar →"
                          : "Comenzar quiz →"}
                      </Link>

                    </div>

                  </article>
                );
              })}

            </div>
          ) : (
            <div className="quiz-empty">

              <span>🏆</span>

              <h2>
                Aún no hay quizzes para tu grado
              </h2>

              <p>
                Estamos preparando nuevos retos
                para ti.
              </p>

              <Link to="/courses">
                Explorar mis cursos
              </Link>

            </div>
          )}

        </section>

      </main>

    </div>
  );
}

export default Quizzes;