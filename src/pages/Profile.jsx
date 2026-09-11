import { Link, useNavigate } from "react-router-dom";
import { getLevelProgress } from "../utils/gamification";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  if (!user) {
    navigate("/login");
    return null;
  }

  const xp = user.points || 0;
  const level = user.level || 1;

  const progress = getLevelProgress(xp);

  const lessonsCompleted =
    user.completedLessons?.length || 0;

  const quizzesCompleted =
    user.completedQuizzes?.length || 0;

  return (
    <div className="profile-page">

      <header className="profile-header">

        <Link to="/dashboard">
          ← Dashboard
        </Link>

        <h1>Mi perfil 👤</h1>

      </header>

      <main className="profile-content">

        <section className="profile-card">

          <div className="profile-avatar">
            {user.name?.charAt(0).toUpperCase()}
          </div>

          <h2>{user.name}</h2>

          <p>{user.email}</p>

          <span>
            {user.grade}° de secundaria
          </span>

        </section>


        <section className="stats-grid">

          <div className="profile-stat">
            <strong>⭐ {xp}</strong>
            <span>XP total</span>
          </div>

          <div className="profile-stat">
            <strong>🆙 {level}</strong>
            <span>Nivel</span>
          </div>

          <div className="profile-stat">
            <strong>📖 {lessonsCompleted}</strong>
            <span>Lecciones</span>
          </div>

          <div className="profile-stat">
            <strong>🧠 {quizzesCompleted}</strong>
            <span>Quizzes</span>
          </div>

        </section>


        <section className="level-card">

          <div className="level-title">
            <span>Nivel {level}</span>
            <strong>{progress}/100 XP</strong>
          </div>

          <div className="level-bar">
            <div
              style={{
                width: `${progress}%`
              }}
            />
          </div>

          <p>
            ¡Sigue aprendiendo para alcanzar el siguiente nivel!
          </p>

        </section>


        <section className="achievements">

          <h2>🏆 Logros</h2>

          <div className="achievement-grid">

            <div className={
              lessonsCompleted >= 1
                ? "achievement unlocked"
                : "achievement"
            }>
              📖
              <span>Primera lección</span>
            </div>

            <div className={
              quizzesCompleted >= 1
                ? "achievement unlocked"
                : "achievement"
            }>
              🧠
              <span>Primer quiz</span>
            </div>

            <div className={
              xp >= 100
                ? "achievement unlocked"
                : "achievement"
            }>
              ⭐
              <span>100 XP</span>
            </div>

            <div className={
              xp >= 500
                ? "achievement unlocked"
                : "achievement"
            }>
              🚀
              <span>500 XP</span>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Profile;