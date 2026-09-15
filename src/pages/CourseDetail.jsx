import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../data/courses";
import { lessons } from "../data/lessons";
import { getCourseProgress } from "../utils/progress";
import "./CourseDetail.css";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  useEffect(() => {
    if (!user) return;

    const revealElements = document.querySelectorAll(
      ".course-detail-scroll-reveal"
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
  }, [user]);

  if (!user) {
    navigate("/login");
    return null;
  }

  const allCourses = Object.values(courses).flat();

  const course = allCourses.find(
    (item) => item.id === id
  );

  if (!course) {
    return (
      <div className="course-detail-page">
        <Navbar />

        <main className="course-detail-container">
          <div className="course-not-found course-detail-scroll-reveal visible">
            <span>📚</span>

            <h1>Curso no encontrado</h1>

            <p>
              No pudimos encontrar este curso.
            </p>

            <Link to="/courses">
              Volver a mis cursos
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const courseLessons = lessons[course.id] || [];

  const completedLessons =
    user.completedLessons || [];

  const progress = getCourseProgress(
    course.id,
    completedLessons
  );

  const completedCount =
    courseLessons.filter((lesson) =>
      completedLessons.includes(lesson.id)
    ).length;

  return (
    <div className="course-detail-page">

      <Navbar />

      <main className="course-detail-container">

        {/* VOLVER */}

        <Link
          to="/courses"
          className="back-link course-detail-scroll-reveal visible"
        >
          ← Volver a mis cursos
        </Link>

        {/* HERO */}

        <section className="course-detail-hero course-detail-scroll-reveal">

          <div className="course-detail-icon">
            {course.icon}
          </div>

          <div className="course-detail-info">

            <span className="course-detail-category">
              {course.category}
            </span>

            <h1>
              {course.name}
            </h1>

            <p>
              {course.description}
            </p>

            <div className="course-detail-stats">

              <span>
                📖 {courseLessons.length} lecciones
              </span>

              <span>
                ⚡ {courseLessons.length * 20} XP
              </span>

              <span>
                🎯 {progress}% completado
              </span>

            </div>

          </div>

          <div
            className="course-detail-progress"
            style={{
              "--course-progress": progress,
            }}
          >
            <div className="course-progress-circle">

              <strong>
                {progress}%
              </strong>

              <span>
                Progreso
              </span>

            </div>
          </div>

        </section>

        {/* LECCIONES */}

        <section className="lessons-section">

          <div className="lessons-heading course-detail-scroll-reveal">

            <div>

              <span>
                CONTENIDO DEL CURSO
              </span>

              <h2>
                Lecciones
              </h2>

            </div>

            <strong>
              {completedCount} de {courseLessons.length}
            </strong>

          </div>

          <div className="lessons-list">

            {courseLessons.map((lesson, index) => {

              const completed =
                completedLessons.includes(
                  lesson.id
                );

              return (
                <Link
                  key={lesson.id}
                  to={`/lessons/${lesson.id}`}
                  className={`lesson-card course-detail-scroll-reveal ${
                    completed
                      ? "lesson-completed"
                      : ""
                  }`}
                  style={{
                    "--lesson-delay": `${index * 0.07}s`,
                  }}
                >

                  <div className="lesson-number">
                    {completed
                      ? "✓"
                      : String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="lesson-content">

                    <span>
                      LECCIÓN {index + 1}
                    </span>

                    <h3>
                      {lesson.title}
                    </h3>

                    <p>
                      {lesson.description}
                    </p>

                  </div>

                  <div className="lesson-duration">
                    <span>⏱️</span>
                    {lesson.duration}
                  </div>

                  <div className="lesson-arrow">
                    →
                  </div>

                </Link>
              );
            })}

          </div>

        </section>

      </main>

    </div>
  );
}

export default CourseDetail;