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
    window.location.href = "/login";
    return null;
  }

  const allCourses = Object.values(courses).flat();

  const userCourses = allCourses.filter(
    (course) =>
      Number(course.grade) === Number(user.grade)
  );

  const videoLessons = [];

  userCourses.forEach((course) => {
    const courseLessons =
      lessons[course.id] || [];

    courseLessons.forEach((lesson) => {
      videoLessons.push({
        ...lesson,
        course,
      });
    });
  });

  const availableVideos =
    videoLessons.filter(
      (lesson) =>
        lesson.videoId &&
        lesson.videoId !== "REEMPLAZAR"
    );

  return (
    <div className="videos-page">

      <Navbar />

      <main className="videos-container">

        <section className="videos-header">

          <div>
            <span className="videos-label">
              APRENDE CON VIDEOS
            </span>

            <h1>
              Videos educativos 🎥
            </h1>

            <p>
              Refuerza tus conocimientos con
              tutoriales relacionados con tus cursos.
            </p>
          </div>

          <div className="videos-header-icon">
            🎥
          </div>

        </section>

        <section className="videos-stats">

          <div>
            <strong>
              {videoLessons.length}
            </strong>

            <span>
              Lecciones disponibles
            </span>
          </div>

          <div>
            <strong>
              {availableVideos.length}
            </strong>

            <span>
              Videos disponibles
            </span>
          </div>

          <div>
            <strong>
              {userCourses.length}
            </strong>

            <span>
              Cursos
            </span>
          </div>

        </section>

        <section className="videos-section">

          <div className="videos-section-heading">

            <span>
              TUTORIALES
            </span>

            <h2>
              Aprende visualmente
            </h2>

          </div>

          <div className="videos-grid">

            {videoLessons.map((lesson) => {

              const hasVideo =
                lesson.videoId &&
                lesson.videoId !==
                  "REEMPLAZAR";

              return (
                <article
                  className="video-card"
                  key={lesson.id}
                >

                  <div className="video-card-preview">

                    {hasVideo ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${lesson.videoId}`}
                        title={lesson.title}
                        allowFullScreen
                      />
                    ) : (
                      <div className="video-placeholder">

                        <div>
                          ▶
                        </div>

                        <span>
                          Video próximamente
                        </span>

                      </div>
                    )}

                  </div>

                  <div className="video-card-body">

                    <span className="video-course">
                      {lesson.course.name}
                    </span>

                    <h3>
                      {lesson.title}
                    </h3>

                    <p>
                      {lesson.description}
                    </p>

                    <div className="video-card-footer">

                      <span>
                        ⏱️ {lesson.duration}
                      </span>

                      <Link
                        to={`/lessons/${lesson.id}`}
                      >
                        Ver lección →
                      </Link>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </section>

      </main>

    </div>
  );
}

export default Videos;