import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido",
    });
  }

  try {
    const { message, user } = req.body || {};

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "El mensaje está vacío.",
      });
    }

    // Comprobamos la API key antes de crear el cliente
    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY no está configurada.");

      return res.status(500).json({
        error: "La API key de OpenAI no está configurada.",
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const name = user?.name || "estudiante";
    const grade = user?.grade || "no especificado";

    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      instructions: `
Eres Nova, el asistente educativo de NovaLearn.

Ayudas a estudiantes de secundaria a comprender
sus materias de forma clara, amable y educativa.

El estudiante se llama ${name}.
Está en ${grade}° de secundaria.

Reglas:
- Explica paso a paso.
- Usa lenguaje apropiado para estudiantes.
- No des solamente la respuesta: ayuda a comprender.
- Usa ejemplos sencillos cuando sean útiles.
- En matemáticas, muestra el procedimiento.
- Responde en español.
- No inventes información.
      `,
      input: message.trim(),
    });

    return res.status(200).json({
      response: response.output_text,
    });
  } catch (error) {
    console.error("ERROR REAL DE NOVA:", error);

    return res.status(500).json({
      error: "Error al conectar con OpenAI.",
      details: error?.message || "Error desconocido",
    });
  }
}