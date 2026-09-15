import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../data/courses";
import { lessons } from "../data/lessons";
import "./Videos.css";

function Videos() {
  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  useEffect(() => {
    if (!user) return;

    const revealElements = document.querySelectorAll(
      ".videos-scroll-reveal"
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

        {/* HEADER */}

        <section className="videos-header videos-scroll-reveal">

          <div className="videos-header-content">

            <span className="videos-label">
              APRENDE CON VIDEOS
            </span>

            <h1>
              Videos educativos <span>🎥</span>
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

        {/* STATS */}

        <section className="videos-stats">

          <div
            className="videos-stat-card videos-scroll-reveal"
            style={{ "--video-delay": "0s" }}
          >
            <div className="videos-stat-icon">
              📚
            </div>

            <div>
              <strong>
                {videoLessons.length}
              </strong>

              <span>
                Lecciones disponibles
              </span>
            </div>
          </div>

          <div
            className="videos-stat-card videos-scroll-reveal"
            style={{ "--video-delay": "0.08s" }}
          >
            <div className="videos-stat-icon">
              ▶️
            </div>

            <div>
              <strong>
                {availableVideos.length}
              </strong>

              <span>
                Videos disponibles
              </span>
            </div>
          </div>

          <div
            className="videos-stat-card videos-scroll-reveal"
            style={{ "--video-delay": "0.16s" }}
          >
            <div className="videos-stat-icon">
              🎓
            </div>

            <div>
              <strong>
                {userCourses.length}
              </strong>

              <span>
                Cursos
              </span>
            </div>
          </div>

        </section>

        {/* VIDEOS */}

        <section className="videos-section">

          <div className="videos-section-heading videos-scroll-reveal">

            <span>
              TUTORIALES
            </span>

            <h2>
              Aprende visualmente
            </h2>

            <p>
              Explora contenido audiovisual relacionado
              con las lecciones de tus cursos.
            </p>

          </div>

          <div className="videos-grid">

            {videoLessons.map((lesson, index) => {

              const hasVideo =
                lesson.videoId &&
                lesson.videoId !== "REEMPLAZAR";

              return (
                <article
                  className="video-card videos-scroll-reveal"
                  key={lesson.id}
                  style={{
                    "--video-delay": `${index * 0.07}s`,
                  }}
                >

                  {/* PREVIEW */}

                  <div className="video-card-preview">

                    {hasVideo ? (
                      <div className="video-frame-wrapper">

                        <iframe
                          src={`https://www.youtube.com/embed/${lesson.videoId}`}
                          title={lesson.title}
                          allowFullScreen
                        />

                        <div className="video-frame-overlay" />

                      </div>
                    ) : (
                      <div className="video-placeholder">

                        <div className="video-play-button">
                          ▶
                        </div>

                        <span>
                          Video próximamente
                        </span>

                        <small>
                          Estamos preparando este contenido
                        </small>

                      </div>
                    )}

                  </div>

                  {/* BODY */}

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

                      <span className="video-duration">
                        ⏱️ {lesson.duration}
                      </span>

                      <Link
                        to={`/lessons/${lesson.id}`}
                        className="video-lesson-link"
                      >
                        Ver lección
                        <span>→</span>
                      </Link>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

          {videoLessons.length === 0 && (
            <div className="videos-empty videos-scroll-reveal visible">

              <div>
                📚
              </div>

              <h3>
                No hay lecciones disponibles
              </h3>

              <p>
                Todavía no hay contenido disponible
                para tu grado.
              </p>

              <Link to="/courses">
                Explorar cursos →
              </Link>

            </div>
          )}

        </section>

      </main>

    </div>
  );
}

export default Videos;