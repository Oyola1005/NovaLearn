import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ReactMarkdown from "react-markdown";
import "./Nova.css";

function Nova() {
  const user = JSON.parse(
    localStorage.getItem("novalearn_user")
  );

  const storageKey = user
    ? `novalearn_nova_chat_${user.email}`
    : null;

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState(() => {
    if (!storageKey) {
      return [
        {
          type: "nova",
          text:
            "¡Hola! 👋 Soy Nova. Estoy aquí para ayudarte a entender tus lecciones. ¿Qué quieres aprender hoy?",
        },
      ];
    }

    const savedMessages = localStorage.getItem(storageKey);

    if (savedMessages) {
      try {
        return JSON.parse(savedMessages);
      } catch {
        return [
          {
            type: "nova",
            text:
              "¡Hola! 👋 Soy Nova. Estoy aquí para ayudarte a entender tus lecciones. ¿Qué quieres aprender hoy?",
          },
        ];
      }
    }

    return [
      {
        type: "nova",
        text:
          "¡Hola! 👋 Soy Nova. Estoy aquí para ayudarte a entender tus lecciones. ¿Qué quieres aprender hoy?",
      },
    ];
  });

  const [loading, setLoading] = useState(false);

  // Guardar automáticamente la conversación
  useEffect(() => {
    if (!storageKey) return;

    localStorage.setItem(
      storageKey,
      JSON.stringify(messages)
    );
  }, [messages, storageKey]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const sendMessage = async (event) => {
    event.preventDefault();

    const cleanMessage = message.trim();

    if (!cleanMessage || loading) return;

    const studentMessage = {
      type: "student",
      text: cleanMessage,
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      studentMessage,
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
          data.error || "No se pudo obtener una respuesta."
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
      console.error("Error al enviar mensaje:", error);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          type: "nova",
          text:
            "Lo siento 😔 No pude responder en este momento. Intenta nuevamente.",
        },
      ]);
    } finally {
      setLoading(false);
    }
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
            <span>NOVA AI</span>
            <h1>Habla con Nova 🤖</h1>
            <p>
              Tu asistente educativo para resolver dudas y
              entender mejor tus lecciones.
            </p>
          </div>
        </section>

        <section className="nova-chat">

          <div className="nova-chat-header">
            <div className="nova-small-avatar">
              ✦
            </div>

            <div>
              <strong>Nova</strong>
              <small>Asistente educativo</small>
            </div>

            <span className="nova-online">
              • En línea
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
  {item.type === "nova" ? (
    <ReactMarkdown>{item.text}</ReactMarkdown>
  ) : (
    item.text
  )}
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
              disabled={loading}
            >
              {loading ? "..." : "➤"}
            </button>
          </form>

        </section>

      </main>
    </div>
  );
}

export default Nova;