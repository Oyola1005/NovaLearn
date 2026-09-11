import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nova.css";

const demoAnswers = [
  {
    keywords: ["numero natural", "número natural"],
    answer:
      "Los números naturales son los números que usamos para contar. Por ejemplo: 1, 2, 3, 4, 5..."
  },
  {
    keywords: ["fraccion", "fracción"],
    answer:
      "Una fracción representa una parte de un todo. Tiene un numerador arriba y un denominador abajo."
  },
  {
    keywords: ["ecosistema"],
    answer:
      "Un ecosistema está formado por los seres vivos y los elementos del ambiente que interactúan entre sí."
  },
  {
    keywords: ["velocidad"],
    answer:
      "La velocidad indica qué tan rápido cambia la posición de un objeto respecto al tiempo."
  },
  {
    keywords: ["celula", "célula"],
    answer:
      "La célula es la unidad básica de los seres vivos. Puede ser procariota o eucariota."
  }
];

function Nova() {
  const [messages, setMessages] = useState([
    {
      type: "nova",
      text:
        "¡Hola! Soy Nova 🤖. Estoy aquí para ayudarte a estudiar. Pregúntame algo sobre tus cursos."
    }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      type: "user",
      text: input
    };

    const normalized = input.toLowerCase();

    const found = demoAnswers.find((item) =>
      item.keywords.some((keyword) =>
        normalized.includes(keyword)
      )
    );

    const novaMessage = {
      type: "nova",
      text: found
        ? found.answer
        : "🤔 Todavía estoy aprendiendo sobre ese tema. En la versión completa de NovaLearn podré responder preguntas sobre todo tu contenido."
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
      novaMessage
    ]);

    setInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="nova-page">

      <header className="nova-header">

        <Link to="/dashboard">
          ← Dashboard
        </Link>

        <div>
          <span>NovaLearn</span>
          <h1>Nova 🤖</h1>
        </div>

      </header>


      <main className="nova-container">

        <div className="nova-info">
          <div className="nova-avatar">
            🤖
          </div>

          <div>
            <h2>Tu asistente de estudio</h2>
            <p>
              Haz preguntas sobre los temas que estás aprendiendo.
            </p>
          </div>
        </div>


        <div className="chat-box">

          <div className="messages">

            {messages.map((message, index) => (

              <div
                key={index}
                className={`message ${message.type}`}
              >
                {message.text}
              </div>

            ))}

          </div>


          <div className="chat-input">

            <input
              type="text"
              placeholder="Escribe tu pregunta..."
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleKeyDown}
            />

            <button onClick={sendMessage}>
              Enviar
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Nova;