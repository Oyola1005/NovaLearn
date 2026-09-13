import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../data/courses";
import { lessons } from "../data/lessons";
import { quizzes } from "../data/quizzes";
import "./Quizzes.css";

function Quizzes() {
  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  if (!user) {
    return null;
  }

  const grade = user.grade || 1;
  const gradeCourses = courses[grade] || [];
  const completedQuizzes =
    user.completedQuizzes || [];

  return (
    <div className="quizzes-page">

      <Navbar />

      <main className="quizzes-container">

        <section className="quizzes-header">

          <span>🧠 NOVALEARN</span>

          <h1>Quizzes y retos</h1>

          <p>
            Pon a prueba lo que aprendiste y
            consigue XP.
          </p>

        </section>

        <div className="quiz-summary">

          <div>
            <strong>
              {completedQuizzes.length}
            </strong>

            <span>Quizzes completados</span>
          </div>

          <div>
            <strong>+10 XP</strong>

            <span>Por respuesta correcta</span>
          </div>

        </div>

        <div className="quizzes-courses">

          {gradeCourses.map((course) => {

            const courseLessons =
              lessons[course.id] || [];

            return (
              <section
                className="quiz-course"
                key={course.id}
              >

                <div className="quiz-course-title">

                  <span>
                    {course.icon}
                  </span>

                  <div>
                    <h2>{course.name}</h2>
                    <p>
                      {courseLessons.length} retos
                    </p>
                  </div>

                </div>

                <div className="quiz-list">

                  {courseLessons.map((lesson) => {

                    const questionList =
                      quizzes[lesson.id] || [];

                    const completed =
                      completedQuizzes.includes(
                        lesson.id
                      );

                    return (
                      <article
                        className="quiz-item"
                        key={lesson.id}
                      >

                        <div className="quiz-item-icon">
                          {completed
                            ? "✅"
                            : "🧠"}
                        </div>

                        <div className="quiz-item-info">

                          <span>
                            {questionList.length} preguntas
                          </span>

                          <h3>
                            {lesson.title}
                          </h3>

                          <p>
                            {completed
                              ? "Quiz completado"
                              : "Aún no completado"}
                          </p>

                        </div>

                        <Link
                          to={`/quiz/${lesson.id}`}
                          className={
                            completed
                              ? "quiz-retake"
                              : "quiz-start"
                          }
                        >
                          {completed
                            ? "Repetir →"
                            : "Comenzar →"}
                        </Link>

                      </article>
                    );

                  })}

                </div>

              </section>
            );

          })}

        </div>

      </main>

    </div>
  );
}

export default Quizzes;