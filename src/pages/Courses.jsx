import { Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import { getCourseProgress } from "../utils/progress";
import "./Courses.css";

function Courses() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("novalearn_user"));

  if (!user) {
    navigate("/login");
    return null;
  }

  const userCourses = courses[user.grade] || [];
  const completedLessons = user.completedLessons || [];

  return (
    <div className="courses-page">
      <div className="courses-container">
        <div className="courses-header">
          <div>
            <p className="courses-eyebrow">NovaLearn</p>

            <h1>Mis cursos 📚</h1>

            <p>
              Continúa aprendiendo y completa tus lecciones para ganar XP.
            </p>
          </div>

          <Link to="/dashboard" className="courses-back">
            ← Dashboard
          </Link>
        </div>

        <div className="courses-grid">
          {userCourses.map((course) => {
            const progress = getCourseProgress(
              course.id,
              completedLessons
            );

            return (
              <div className="course-card" key={course.id}>
                <div className="course-icon">
                  {course.icon}
                </div>

                <h2>{course.name}</h2>

                <p>{course.description}</p>

                <div className="course-progress">
                  <div className="course-progress-header">
                    <span>Progreso</span>
                    <strong>{progress}%</strong>
                  </div>

                  <div className="course-progress-bar">
                    <div
                      className="course-progress-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <Link
                  to={`/course/${course.id}`}
                  className="course-button"
                >
                  {progress === 0
                    ? "Empezar curso"
                    : progress === 100
                    ? "Ver curso"
                    : "Continuar"}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;