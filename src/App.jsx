import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function Login() {
  return <h1>Iniciar sesión</h1>;
}

function Register() {
  return <h1>Crear cuenta</h1>;
}

function Grades() {
  return <h1>Selecciona tu grado</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/grades" element={<Grades />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;