const createQuiz = (questions) =>
  questions.map((question) => ({
    question: question.question,
    options: question.options,
    answer: question.answer
  }));

export const quizzes = {

  "mat-1-1": createQuiz([
    {
      question: "¿Cuál de estos es un número natural?",
      options: ["-5", "3", "1.5", "-2"],
      answer: "3"
    },
    {
      question: "¿Cuánto es 8 + 7?",
      options: ["14", "15", "16", "17"],
      answer: "15"
    },
    {
      question: "¿Cuál es mayor?",
      options: ["3", "5", "8", "2"],
      answer: "8"
    },
    {
      question: "¿Cuánto es 10 - 4?",
      options: ["4", "5", "6", "7"],
      answer: "6"
    },
    {
      question: "¿Cuánto es 5 × 2?",
      options: ["7", "8", "10", "12"],
      answer: "10"
    }
  ]),

  "mat-1-2": createQuiz([
    {
      question: "¿Cuánto es 6 + 9?",
      options: ["13", "14", "15", "16"],
      answer: "15"
    },
    {
      question: "¿Cuánto es 20 - 8?",
      options: ["10", "11", "12", "13"],
      answer: "12"
    },
    {
      question: "¿Cuánto es 4 × 5?",
      options: ["15", "20", "25", "30"],
      answer: "20"
    },
    {
      question: "¿Cuánto es 24 ÷ 6?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "¿Cuánto es 7 × 3?",
      options: ["18", "20", "21", "24"],
      answer: "21"
    }
  ]),

  "com-1-1": createQuiz([
    {
      question: "¿Qué ayuda a comprender un texto?",
      options: [
        "Las ideas principales",
        "Ignorar el título",
        "Leer sin atención",
        "Memorizar cada palabra"
      ],
      answer: "Las ideas principales"
    },
    {
      question: "¿Qué debemos identificar al leer?",
      options: [
        "El tema",
        "Solo los colores",
        "El número de páginas",
        "Nada"
      ],
      answer: "El tema"
    },
    {
      question: "¿Qué es una idea principal?",
      options: [
        "La información central",
        "Un detalle pequeño",
        "Una palabra",
        "El nombre del autor"
      ],
      answer: "La información central"
    }
  ]),

  "cie-1-1": createQuiz([
    {
      question: "¿Cuál es un ser vivo?",
      options: [
        "Una roca",
        "Una planta",
        "Una mesa",
        "Un lápiz"
      ],
      answer: "Una planta"
    },
    {
      question: "¿Qué necesitan los seres vivos?",
      options: [
        "Energía",
        "Juguetes",
        "Dinero",
        "Computadoras"
      ],
      answer: "Energía"
    },
    {
      question: "¿Cuál es una característica de los seres vivos?",
      options: [
        "Crecen",
        "Son de metal",
        "Nunca cambian",
        "No necesitan energía"
      ],
      answer: "Crecen"
    }
  ]),

  "soc-1-1": createQuiz([
    {
      question: "¿Qué estudian las Ciencias Sociales?",
      options: [
        "La sociedad",
        "Solo los números",
        "Solo los animales",
        "Solo las plantas"
      ],
      answer: "La sociedad"
    },
    {
      question: "¿Qué es una sociedad?",
      options: [
        "Un conjunto de personas que conviven",
        "Un objeto",
        "Una planta",
        "Una máquina"
      ],
      answer: "Un conjunto de personas que conviven"
    },
    {
      question: "¿Qué influye en una sociedad?",
      options: [
        "La cultura",
        "Solo el clima",
        "Nada",
        "Los objetos"
      ],
      answer: "La cultura"
    }
  ])
};