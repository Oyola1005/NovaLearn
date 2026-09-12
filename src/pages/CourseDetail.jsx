import { Link, useNavigate, useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { lessons } from "../data/lessons";
import { getCourseProgress } from "../utils/progress";
import "./CourseDetail.css";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("novalearn_user"));

  if (!user) {
    navigate("/login");
    return null;
  }

  const userCourses = courses[user.grade] || [];

  const course = userCourses.find(
    (item) => item.id === id
  );

  if (!course) {
    return (
      <div className="course-detail-page">
        <h1>Curso no encontrado</h1>

        <Link to="/courses">
          Volver a cursos
        </Link>
      </div>
    );
  }

  const courseLessons = lessons[id] || [];
  const completedLessons = user.completedLessons || [];

  const progress = getCourseProgress(
    id,
    completedLessons
  );

  return (
    <div className="course-detail-page">
      <div className="course-detail-container">

        <Link to="/courses" className="course-detail-back">
          ← Volver a cursos
        </Link>

        <div className="course-detail-header">

          <div className="course-detail-icon">
            {course.icon}
          </div>

          <div className="course-detail-info">
            <p className="course-detail-eyebrow">
              Curso
            </p>

            <h1>{course.name}</h1>

            <p>{course.description}</p>

            <div className="course-detail-progress">
              <div className="course-detail-progress-header">
                <span>Progreso del curso</span>
                <strong>{progress}%</strong>
              </div>

              <div className="course-detail-progress-bar">
                <div
                  className="course-detail-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

        </div>

        <div className="lessons-section">

          <h2>Lecciones 📖</h2>

          <div className="lessons-list">

            {courseLessons.map((lesson, index) => {

              const completed = completedLessons.includes(
                lesson.id
              );

              return (
                <div
                  className={`lesson-card ${
                    completed ? "completed" : ""
                  }`}
                  key={lesson.id}
                >

                  <div className="lesson-number">
                    {completed ? "✓" : index + 1}
                  </div>

                  <div className="lesson-info">

                    <h3>{lesson.title}</h3>

                    <p>{lesson.description}</p>

                    <span>
                      ⏱️ {lesson.duration}
                    </span>

                  </div>

                  <Link
                    to={`/lesson/${lesson.id}`}
                    className="lesson-button"
                  >
                    {completed ? "Repasar" : "Empezar"}
                  </Link>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </div>
  );
}

export default CourseDetail;