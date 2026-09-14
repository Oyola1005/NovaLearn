import { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Nova.css";

function Nova() {
  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] = useState([
    {
      type: "nova",
      text:
        "¡Hola! 👋 Soy Nova. Estoy aquí para ayudarte a entender tus lecciones. ¿Qué quieres aprender hoy?",
    },
  ]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const getResponse = (question) => {
    const text =
      question.toLowerCase();

    if (
      text.includes("fracción") ||
      text.includes("fracciones")
    ) {
      return "Una fracción representa una parte de un todo. Tiene un numerador, que indica cuántas partes tomamos, y un denominador, que indica en cuántas partes iguales se divide el todo.";
    }

    if (
      text.includes("ecuación") ||
      text.includes("ecuaciones")
    ) {
      return "Una ecuación es una igualdad matemática que contiene una o más incógnitas. Resolverla significa encontrar el valor que hace verdadera la igualdad.";
    }

    if (
      text.includes("número natural") ||
      text.includes("números naturales")
    ) {
      return "Los números naturales son los números que usamos para contar, como 1, 2, 3, 4 y 5. Dependiendo de la convención, el 0 también puede considerarse natural.";
    }

    if (
      text.includes("célula") ||
      text.includes("celula")
    ) {
      return "La célula es la unidad básica de los seres vivos. Algunas estructuras importantes son la membrana celular, el citoplasma y, en muchas células, el núcleo.";
    }

    if (
      text.includes("ecosistema") ||
      text.includes("ecosistemas")
    ) {
      return "Un ecosistema está formado por los seres vivos y los elementos no vivos de un ambiente, junto con las relaciones que existen entre ellos.";
    }

    if (
      text.includes("energía") ||
      text.includes("energia")
    ) {
      return "La energía es la capacidad de producir cambios o realizar trabajo. Puede presentarse de diferentes formas, como energía cinética, potencial, térmica y eléctrica.";
    }

    if (
      text.includes("velocidad")
    ) {
      return "La velocidad relaciona el desplazamiento de un objeto con el tiempo que tarda en realizarlo. En un movimiento uniforme puede expresarse como v = d / t.";
    }

    if (
      text.includes("fuerza") ||
      text.includes("fuerzas")
    ) {
      return "Una fuerza es una interacción capaz de cambiar el movimiento de un objeto o deformarlo. Se mide en newtons (N).";
    }

    if (
      text.includes("literatura")
    ) {
      return "La literatura utiliza el lenguaje de forma artística para expresar ideas, emociones, historias y experiencias. Puede incluir géneros como narrativa, poesía y teatro.";
    }

    if (
      text.includes("historia")
    ) {
      return "La historia estudia los acontecimientos y procesos de las sociedades humanas a lo largo del tiempo, utilizando diferentes fuentes para comprender el pasado.";
    }

    if (
      text.includes("átomo") ||
      text.includes("atomo") ||
      text.includes("átomos") ||
      text.includes("atomos")
    ) {
      return "El átomo es una unidad fundamental de la materia. Está formado por un núcleo con protones y neutrones, y electrones alrededor del núcleo.";
    }

    if (
      text.includes("química") ||
      text.includes("quimica")
    ) {
      return "La química estudia la materia, sus propiedades, su composición y los cambios que puede experimentar.";
    }

    if (
      text.includes("hola") ||
      text.includes("buenas")
    ) {
      return "¡Hola! 👋 Qué bueno verte. Pregúntame sobre Matemática, Ciencia, Comunicación, Historia u otros temas de tus cursos.";
    }

    return "¡Buena pregunta! 🤔 En esta versión demo todavía estoy aprendiendo más contenidos. Intenta preguntarme sobre fracciones, ecuaciones, números naturales, células, ecosistemas, energía, velocidad, fuerzas, literatura, historia, átomos o química.";
  };

  const sendMessage = (event) => {
    event.preventDefault();

    const cleanMessage =
      message.trim();

    if (!cleanMessage) {
      return;
    }

    const response =
      getResponse(cleanMessage);

    setMessages((previousMessages) => [
      ...previousMessages,

      {
        type: "student",
        text: cleanMessage,
      },

      {
        type: "nova",
        text: response,
      },
    ]);

    setMessage("");
  };

  return (
    <div className="nova-page">

      <Navbar />

      <main className="nova-container">

        <section className="nova-header">

          <div className="nova-main-avatar">
            ✦
          </div>

          <div>
            <span>
              NOVA AI · DEMO
            </span>

            <h1>
              Habla con Nova 🤖
            </h1>

            <p>
              Tu asistente educativo para resolver
              dudas y entender mejor tus lecciones.
            </p>
          </div>

        </section>

        <section className="nova-chat">

          <div className="nova-chat-header">

            <div className="nova-small-avatar">
              ✦
            </div>

            <div>
              <strong>
                Nova
              </strong>

              <small>
                Asistente educativo
              </small>
            </div>

            <span className="nova-online">
              ● En línea
            </span>

          </div>

          <div className="nova-messages">

            {messages.map(
              (item, index) => (
                <div
                  key={index}
                  className={
                    item.type === "nova"
                      ? "nova-message-row"
                      : "student-message-row"
                  }
                >

                  {item.type === "nova" && (
                    <div className="nova-message-avatar">
                      ✦
                    </div>
                  )}

                  <div
                    className={
                      item.type === "nova"
                        ? "nova-message-bubble"
                        : "student-message-bubble"
                    }
                  >
                    {item.text}
                  </div>

                </div>
              )
            )}

          </div>

          <form
            className="nova-input-area"
            onSubmit={sendMessage}
          >

            <input
              type="text"
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              placeholder="Escribe tu pregunta..."
            />

            <button type="submit">
              ➤
            </button>

          </form>

        </section>

        <section className="nova-suggestions">

          <span>
            PRUEBA PREGUNTAR
          </span>

          <div>

            <button
              onClick={() =>
                setMessage(
                  "¿Qué es una fracción?"
                )
              }
            >
              ¿Qué es una fracción?
            </button>

            <button
              onClick={() =>
                setMessage(
                  "¿Qué es una célula?"
                )
              }
            >
              ¿Qué es una célula?
            </button>

            <button
              onClick={() =>
                setMessage(
                  "¿Qué es una ecuación?"
                )
              }
            >
              ¿Qué es una ecuación?
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Nova;  