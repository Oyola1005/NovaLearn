import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../data/courses";
import { lessons } from "../data/lessons";
import "./Videos.css";

function Videos() {
  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  if (!user) {
    return null;
  }

  const grade = user.grade || 1;
  const gradeCourses = courses[grade] || [];

  return (
    <div className="videos-page">

      <Navbar />

      <main className="videos-container">

        <section className="videos-header">
          <span>🎥 NOVALEARN</span>

          <h1>Videos educativos</h1>

          <p>
            Aprende cada tema con videos y
            complementa tus lecciones.
          </p>
        </section>

        <div className="videos-grid">

          {gradeCourses.map((course) => {
            const courseLessons =
              lessons[course.id] || [];

            return (
              <section
                className="video-course"
                key={course.id}
              >

                <div className="video-course-header">
                  <div>
                    <span className="video-course-icon">
                      {course.icon}
                    </span>

                    <div>
                      <h2>{course.name}</h2>

                      <p>
                        {courseLessons.length} lecciones
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/course/${course.id}`}
                    className="video-course-link"
                  >
                    Ver curso →
                  </Link>
                </div>

                <div className="video-lessons">

                  {courseLessons.map((lesson) => (

                    <article
                      className="video-card"
                      key={lesson.id}
                    >

                      <div className="video-preview">

                        {lesson.videoId === "REEMPLAZAR" ? (

                          <div className="video-placeholder-small">
                            🎥
                            <span>
                              Video próximamente
                            </span>
                          </div>

                        ) : (

                          <iframe
                            src={`https://www.youtube.com/embed/${lesson.videoId}`}
                            title={lesson.title}
                            allowFullScreen
                          ></iframe>

                        )}

                      </div>

                      <div className="video-card-content">

                        <span>
                          Lección · {lesson.duration}
                        </span>

                        <h3>
                          {lesson.title}
                        </h3>

                        <p>
                          {lesson.description}
                        </p>

                        <Link
                          to={`/lesson/${lesson.id}`}
                        >
                          Ir a la lección →
                        </Link>

                      </div>

                    </article>

                  ))}

                </div>

              </section>
            );
          })}

        </div>

      </main>

    </div>
  );
}

export default Videos;