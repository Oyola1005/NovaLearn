import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Grades from "./pages/Grades";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Lesson from "./pages/Lesson";
import Quiz from "./pages/Quiz";
import Quizzes from "./pages/Quizzes";
import Videos from "./pages/Videos";
import Profile from "./pages/Profile";
import Nova from "./pages/Nova";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Público */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Configuración */}
        <Route path="/grades" element={<Grades />} />

        {/* Plataforma */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/lessons/:id" element={<Lesson />} />

        {/* Evaluación */}
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:id" element={<Quiz />} />

        {/* Recursos */}
        <Route path="/videos" element={<Videos />} />

        {/* Usuario */}
        <Route path="/profile" element={<Profile />} />

        {/* IA */}
        <Route path="/nova" element={<Nova />} />

        {/* Cualquier ruta desconocida */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;