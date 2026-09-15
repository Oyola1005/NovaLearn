  import { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Nova.css";

function Nova() {
  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "nova",
      text:
        "¡Hola! 👋 Soy Nova. Estoy aquí para ayudarte a entender tus lecciones. ¿Qué quieres aprender hoy?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const sendMessage = async (event) => {
    event.preventDefault();

    const cleanMessage = message.trim();

    if (!cleanMessage || loading) {
      return;
    }

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        type: "student",
        text: cleanMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: cleanMessage,
          user: {
            name: user.name,
            grade: user.grade,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Error al comunicarse con Nova."
        );
      }

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          type: "nova",
          text: data.response,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          type: "nova",
          text:
            "Lo siento 😕 No pude responder en este momento. Intenta nuevamente.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const useSuggestion = (text) => {
    setMessage(text);
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
              NOVA AI
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

            {messages.map((item, index) => (
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
            ))}

            {loading && (
              <div className="nova-message-row">

                <div className="nova-message-avatar">
                  ✦
                </div>

                <div className="nova-message-bubble nova-loading">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>
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
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading || !message.trim()}
            >
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
                useSuggestion("¿Qué es una fracción?")
              }
            >
              ¿Qué es una fracción?
            </button>

            <button
              onClick={() =>
                useSuggestion("¿Qué es una célula?")
              }
            >
              ¿Qué es una célula?
            </button>

            <button
              onClick={() =>
                useSuggestion("¿Qué es una ecuación?")
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