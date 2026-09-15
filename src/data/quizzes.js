const createQuiz = (questions) =>
  questions.map((question) => ({
    question: question.question,
    options: question.options,
    answer: question.answer,
  }));

export const quizzes = {

  // =====================================================
  // 1° SECUNDARIA - MATEMÁTICA
  // =====================================================

  "mat-1-1": createQuiz([
    {
      question: "¿Cuál de estos es un número natural?",
      options: ["-5", "3", "1.5", "-2"],
      answer: "3",
    },
    {
      question: "¿Cuánto es 8 + 7?",
      options: ["14", "15", "16", "17"],
      answer: "15",
    },
    {
      question: "¿Cuál es mayor?",
      options: ["3", "5", "8", "2"],
      answer: "8",
    },
  ]),

  "mat-1-2": createQuiz([
    {
      question: "¿Cuánto es 6 + 9?",
      options: ["13", "14", "15", "16"],
      answer: "15",
    },
    {
      question: "¿Cuánto es 20 - 8?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      question: "¿Cuánto es 4 × 5?",
      options: ["15", "20", "25", "30"],
      answer: "20",
    },
  ]),

  "mat-1-3": createQuiz([
    {
      question: "¿Qué representa una fracción?",
      options: [
        "Una parte de un todo",
        "Solo un número natural",
        "Una figura geométrica",
        "Una unidad de tiempo",
      ],
      answer: "Una parte de un todo",
    },
    {
      question: "En la fracción 3/4, ¿qué número es el numerador?",
      options: ["3", "4", "7", "1"],
      answer: "3",
    },
    {
      question: "¿Cuál fracción representa una mitad?",
      options: ["1/2", "1/3", "2/3", "3/4"],
      answer: "1/2",
    },
  ]),

  "mat-1-4": createQuiz([
    {
      question: "¿Cuántos lados tiene un triángulo?",
      options: ["2", "3", "4", "5"],
      answer: "3",
    },
    {
      question: "¿Cuántos lados tiene un cuadrado?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "¿Cómo se llama una figura con cuatro lados?",
      options: [
        "Triángulo",
        "Cuadrilátero",
        "Pentágono",
        "Círculo",
      ],
      answer: "Cuadrilátero",
    },
  ]),

  // =====================================================
  // 1° SECUNDARIA - COMUNICACIÓN
  // =====================================================

  "com-1-1": createQuiz([
    {
      question: "¿Qué ayuda a comprender un texto?",
      options: [
        "Las ideas principales",
        "Ignorar el título",
        "Leer sin atención",
        "Memorizar cada palabra",
      ],
      answer: "Las ideas principales",
    },
    {
      question: "¿Qué debemos identificar al leer?",
      options: [
        "El tema",
        "Solo los colores",
        "El número de páginas",
        "Nada",
      ],
      answer: "El tema",
    },
    {
      question: "¿Qué es una idea principal?",
      options: [
        "La información central",
        "Un detalle pequeño",
        "Una palabra",
        "El nombre del autor",
      ],
      answer: "La información central",
    },
  ]),

  "com-1-2": createQuiz([
    {
      question: "¿Qué caracteriza a un texto narrativo?",
      options: [
        "Cuenta hechos o acontecimientos",
        "Solo presenta números",
        "Solo contiene preguntas",
        "No tiene información",
      ],
      answer: "Cuenta hechos o acontecimientos",
    },
    {
      question: "¿Qué puede aparecer en una narración?",
      options: [
        "Personajes",
        "Solo fórmulas",
        "Solo gráficos",
        "Solo operaciones",
      ],
      answer: "Personajes",
    },
    {
      question: "¿Qué elemento indica dónde ocurre una historia?",
      options: [
        "El espacio",
        "El título",
        "El número",
        "La portada",
      ],
      answer: "El espacio",
    },
  ]),

  "com-1-3": createQuiz([
    {
      question: "¿Cuál es la idea principal de un texto?",
      options: [
        "La información más importante",
        "Un dato secundario",
        "Una palabra difícil",
        "El último punto",
      ],
      answer: "La información más importante",
    },
    {
      question: "¿Para qué sirven los detalles de un texto?",
      options: [
        "Para apoyar las ideas principales",
        "Para eliminar el tema",
        "Para cambiar el idioma",
        "Para decorar la página",
      ],
      answer: "Para apoyar las ideas principales",
    },
    {
      question: "¿Qué debemos hacer para identificar información importante?",
      options: [
        "Leer con atención",
        "Ignorar el texto",
        "Leer solamente el final",
        "No pensar en el tema",
      ],
      answer: "Leer con atención",
    },
  ]),

  "com-1-4": createQuiz([
    {
      question: "¿Qué es producir un texto?",
      options: [
        "Escribir y organizar ideas",
        "Copiar cualquier palabra",
        "Dibujar solamente",
        "Leer sin comprender",
      ],
      answer: "Escribir y organizar ideas",
    },
    {
      question: "¿Qué debemos hacer antes de escribir?",
      options: [
        "Planificar nuestras ideas",
        "Borrar todo",
        "No pensar en el tema",
        "Escribir al azar",
      ],
      answer: "Planificar nuestras ideas",
    },
    {
      question: "¿Qué ayuda a organizar un texto?",
      options: [
        "Una estructura clara",
        "Ideas desordenadas",
        "Frases incompletas",
        "Palabras sin relación",
      ],
      answer: "Una estructura clara",
    },
  ]),

  // =====================================================
  // 1° SECUNDARIA - CIENCIA
  // =====================================================

  "cie-1-1": createQuiz([
    {
      question: "¿Cuál es un ser vivo?",
      options: ["Una roca", "Una planta", "Una mesa", "Un lápiz"],
      answer: "Una planta",
    },
    {
      question: "¿Qué necesitan los seres vivos?",
      options: ["Energía", "Juguetes", "Dinero", "Computadoras"],
      answer: "Energía",
    },
    {
      question: "¿Cuál es una característica de los seres vivos?",
      options: ["Crecen", "Son de metal", "Nunca cambian", "No necesitan energía"],
      answer: "Crecen",
    },
  ]),

  "cie-1-2": createQuiz([
    {
      question: "¿Qué es un ecosistema?",
      options: [
        "Seres vivos y su ambiente",
        "Solo animales",
        "Solo plantas",
        "Una máquina",
      ],
      answer: "Seres vivos y su ambiente",
    },
    {
      question: "¿Cuál es un factor no vivo de un ecosistema?",
      options: ["Agua", "Un árbol", "Un animal", "Un hongo"],
      answer: "Agua",
    },
    {
      question: "¿Qué relación existe entre los seres vivos y su ambiente?",
      options: [
        "Interactúan entre sí",
        "Nunca se relacionan",
        "No dependen del ambiente",
        "Solo ocurre en ciudades",
      ],
      answer: "Interactúan entre sí",
    },
  ]),

  "cie-1-3": createQuiz([
    {
      question: "¿Cuál es un estado de la materia?",
      options: ["Sólido", "Rápido", "Grande", "Pesado"],
      answer: "Sólido",
    },
    {
      question: "¿Cuál es un ejemplo de materia?",
      options: ["Agua", "Una idea", "Una emoción", "Un sonido"],
      answer: "Agua",
    },
    {
      question: "¿Qué puede cambiar cuando calentamos una sustancia?",
      options: [
        "Su estado",
        "Su nombre siempre",
        "Su historia",
        "Su ubicación en el planeta",
      ],
      answer: "Su estado",
    },
  ]),

  "cie-1-4": createQuiz([
    {
      question: "¿Qué es la energía?",
      options: [
        "La capacidad de producir cambios",
        "Un objeto",
        "Una planta",
        "Una unidad de longitud",
      ],
      answer: "La capacidad de producir cambios",
    },
    {
      question: "¿Cuál es una fuente de energía?",
      options: ["El Sol", "Una piedra", "Una silla", "Un cuaderno"],
      answer: "El Sol",
    },
    {
      question: "¿Qué forma de energía utilizamos al movernos?",
      options: [
        "Energía mecánica",
        "Energía inexistente",
        "Energía escrita",
        "Energía textual",
      ],
      answer: "Energía mecánica",
    },
  ]),

  // =====================================================
  // 1° SECUNDARIA - SOCIALES
  // =====================================================

  "soc-1-1": createQuiz([
    {
      question: "¿Qué estudian las Ciencias Sociales?",
      options: [
        "La sociedad",
        "Solo los números",
        "Solo los animales",
        "Solo las plantas",
      ],
      answer: "La sociedad",
    },
    {
      question: "¿Qué es una sociedad?",
      options: [
        "Un conjunto de personas que conviven",
        "Un objeto",
        "Una planta",
        "Una máquina",
      ],
      answer: "Un conjunto de personas que conviven",
    },
    {
      question: "¿Qué influye en una sociedad?",
      options: ["La cultura", "Solo el clima", "Nada", "Los objetos"],
      answer: "La cultura",
    },
  ]),

  "soc-1-2": createQuiz([
    {
      question: "¿Qué estudia la historia?",
      options: [
        "Los acontecimientos del pasado",
        "Solo el futuro",
        "Solo los números",
        "Solo los animales",
      ],
      answer: "Los acontecimientos del pasado",
    },
    {
      question: "¿Qué usamos para ordenar acontecimientos?",
      options: [
        "El tiempo",
        "El color",
        "El tamaño",
        "El peso",
      ],
      answer: "El tiempo",
    },
    {
      question: "¿Qué es una fuente histórica?",
      options: [
        "Una evidencia del pasado",
        "Una operación matemática",
        "Un planeta",
        "Un alimento",
      ],
      answer: "Una evidencia del pasado",
    },
  ]),

  "soc-1-3": createQuiz([
    {
      question: "¿Qué es un territorio?",
      options: [
        "Un espacio geográfico",
        "Una operación",
        "Un animal",
        "Un idioma",
      ],
      answer: "Un espacio geográfico",
    },
    {
      question: "¿Qué podemos encontrar en un territorio?",
      options: [
        "Personas y recursos",
        "Solo números",
        "Solo letras",
        "Nada",
      ],
      answer: "Personas y recursos",
    },
    {
      question: "¿Qué ciencia estudia el espacio geográfico?",
      options: [
        "Geografía",
        "Matemática",
        "Literatura",
        "Música",
      ],
      answer: "Geografía",
    },
  ]),

  "soc-1-4": createQuiz([
    {
      question: "¿Qué es una cultura?",
      options: [
        "Conjunto de costumbres y formas de vida",
        "Una máquina",
        "Una operación",
        "Un planeta",
      ],
      answer: "Conjunto de costumbres y formas de vida",
    },
    {
      question: "¿Cuál es un ejemplo de manifestación cultural?",
      options: ["Una tradición", "Una calculadora", "Una roca", "Un automóvil"],
      answer: "Una tradición",
    },
    {
      question: "¿Por qué son importantes las culturas antiguas?",
      options: [
        "Ayudan a comprender nuestro pasado",
        "No tienen importancia",
        "Solo sirven para las matemáticas",
        "Solo sirven para jugar",
      ],
      answer: "Ayudan a comprender nuestro pasado",
    },
  ]),

  // =====================================================
  // 2° SECUNDARIA - MATEMÁTICA
  // =====================================================

  "mat-2-1": createQuiz([
    {
      question: "¿Qué representa una variable en álgebra?",
      options: [
        "Un valor que puede cambiar",
        "Siempre el número 1",
        "Una figura",
        "Una unidad de tiempo",
      ],
      answer: "Un valor que puede cambiar",
    },
    {
      question: "¿Cuál es una expresión algebraica?",
      options: ["2x + 3", "25", "Hola", "Lunes"],
      answer: "2x + 3",
    },
    {
      question: "Si x = 2, ¿cuánto vale 3x?",
      options: ["5", "6", "8", "9"],
      answer: "6",
    },
  ]),

  "mat-2-2": createQuiz([
    {
      question: "¿Qué es una ecuación?",
      options: [
        "Una igualdad con una o más incógnitas",
        "Una figura geométrica",
        "Una palabra",
        "Un gráfico sin datos",
      ],
      answer: "Una igualdad con una o más incógnitas",
    },
    {
      question: "Si x + 3 = 7, ¿cuánto vale x?",
      options: ["2", "3", "4", "5"],
      answer: "4",
    },
    {
      question: "Si x - 5 = 2, ¿cuánto vale x?",
      options: ["3", "5", "7", "10"],
      answer: "7",
    },
  ]),

  "mat-2-3": createQuiz([
    {
      question: "¿Qué es una proporción?",
      options: [
        "Una igualdad entre dos razones",
        "Una figura",
        "Una resta",
        "Una unidad",
      ],
      answer: "Una igualdad entre dos razones",
    },
    {
      question: "Si 2/4 = 1/x, ¿cuánto vale x?",
      options: ["1", "2", "3", "4"],
      answer: "2",
    },
    {
      question: "¿Cuál es equivalente a 2/3?",
      options: ["4/6", "3/4", "2/5", "5/6"],
      answer: "4/6",
    },
  ]),

  "mat-2-4": createQuiz([
    {
      question: "¿Cuántos grados tiene un ángulo recto?",
      options: ["45°", "90°", "180°", "360°"],
      answer: "90°",
    },
    {
      question: "¿Cuántos lados tiene un pentágono?",
      options: ["4", "5", "6", "7"],
      answer: "5",
    },
    {
      question: "¿Cuánto suman los ángulos interiores de un triángulo?",
      options: ["90°", "180°", "270°", "360°"],
      answer: "180°",
    },
  ]),

  // =====================================================
  // 2° SECUNDARIA - COMUNICACIÓN
  // =====================================================

  "com-2-1": createQuiz([
    {
      question: "¿Qué es un texto narrativo?",
      options: [
        "Un texto que cuenta acontecimientos",
        "Un conjunto de números",
        "Una fórmula",
        "Una tabla",
      ],
      answer: "Un texto que cuenta acontecimientos",
    },
    {
      question: "¿Quién realiza las acciones en una historia?",
      options: ["El personaje", "El título", "El índice", "La portada"],
      answer: "El personaje",
    },
    {
      question: "¿Qué elemento puede indicar cuándo ocurre una historia?",
      options: ["El tiempo", "El color", "El tamaño", "La página"],
      answer: "El tiempo",
    },
  ]),

  "com-2-2": createQuiz([
    {
      question: "¿Qué hace un texto descriptivo?",
      options: [
        "Explica cómo es algo",
        "Resuelve ecuaciones",
        "Cuenta únicamente números",
        "Muestra solo fechas",
      ],
      answer: "Explica cómo es algo",
    },
    {
      question: "¿Qué podemos describir?",
      options: [
        "Personas, lugares u objetos",
        "Solo números",
        "Solo operaciones",
        "Solo fechas",
      ],
      answer: "Personas, lugares u objetos",
    },
    {
      question: "¿Qué ayuda a realizar una descripción?",
      options: [
        "Los adjetivos",
        "Las ecuaciones",
        "Los mapas",
        "Las fracciones",
      ],
      answer: "Los adjetivos",
    },
  ]),

  "com-2-3": createQuiz([
    {
      question: "¿Qué es argumentar?",
      options: [
        "Presentar razones para defender una idea",
        "Copiar un texto",
        "Dibujar una figura",
        "Resolver una división",
      ],
      answer: "Presentar razones para defender una idea",
    },
    {
      question: "¿Qué debe tener un argumento?",
      options: [
        "Razones o evidencias",
        "Solo imágenes",
        "Solo preguntas",
        "Ninguna explicación",
      ],
      answer: "Razones o evidencias",
    },
    {
      question: "¿Qué se busca al argumentar?",
      options: [
        "Sustentar una postura",
        "Eliminar las ideas",
        "Evitar explicar",
        "No comunicar",
      ],
      answer: "Sustentar una postura",
    },
  ]),

  "com-2-4": createQuiz([
    {
      question: "¿Qué es la literatura?",
      options: [
        "Una manifestación artística mediante el lenguaje",
        "Una operación",
        "Una ciencia exacta",
        "Una unidad de medida",
      ],
      answer: "Una manifestación artística mediante el lenguaje",
    },
    {
      question: "¿Cuál es un género literario?",
      options: ["Poesía", "Álgebra", "Geometría", "Química"],
      answer: "Poesía",
    },
    {
      question: "¿Qué utiliza la literatura como medio principal?",
      options: ["El lenguaje", "El metal", "La electricidad", "El sonido solamente"],
      answer: "El lenguaje",
    },
  ]),

  // =====================================================
  // 2° SECUNDARIA - CIENCIA
  // =====================================================

  "cie-2-1": createQuiz([
    {
      question: "¿Cuál es la unidad básica de los seres vivos?",
      options: ["La célula", "El planeta", "El átomo", "El ecosistema"],
      answer: "La célula",
    },
    {
      question: "¿Qué estructura contiene información genética?",
      options: ["ADN", "Agua", "Oxígeno", "Glucosa"],
      answer: "ADN",
    },
    {
      question: "¿Qué necesitan las células para funcionar?",
      options: ["Energía", "Juguetes", "Dinero", "Libros"],
      answer: "Energía",
    },
  ]),

  "cie-2-2": createQuiz([
    {
      question: "¿Qué sistema permite respirar?",
      options: [
        "Sistema respiratorio",
        "Sistema óseo",
        "Sistema nervioso",
        "Sistema muscular",
      ],
      answer: "Sistema respiratorio",
    },
    {
      question: "¿Qué órgano bombea la sangre?",
      options: ["Corazón", "Pulmón", "Estómago", "Cerebro"],
      answer: "Corazón",
    },
    {
      question: "¿Qué sistema coordina muchas funciones del cuerpo?",
      options: [
        "Sistema nervioso",
        "Sistema digestivo",
        "Sistema óseo",
        "Sistema muscular",
      ],
      answer: "Sistema nervioso",
    },
  ]),

  "cie-2-3": createQuiz([
    {
      question: "¿Qué es un ecosistema?",
      options: [
        "Un conjunto de seres vivos y factores ambientales",
        "Solo animales",
        "Solo plantas",
        "Una ciudad",
      ],
      answer: "Un conjunto de seres vivos y factores ambientales",
    },
    {
      question: "¿Cuál es un productor en un ecosistema?",
      options: ["Una planta", "Un león", "Un hongo", "Una persona"],
      answer: "Una planta",
    },
    {
      question: "¿Qué función cumplen los descomponedores?",
      options: [
        "Descomponen materia orgánica",
        "Producen luz",
        "Crean planetas",
        "Eliminan el agua",
      ],
      answer: "Descomponen materia orgánica",
    },
  ]),

  "cie-2-4": createQuiz([
    {
      question: "¿Qué fenómeno está relacionado con el aumento de la temperatura global?",
      options: [
        "Cambio climático",
        "Rotación terrestre",
        "Eclipse",
        "Marea",
      ],
      answer: "Cambio climático",
    },
    {
      question: "¿Cuál es un gas de efecto invernadero?",
      options: [
        "Dióxido de carbono",
        "Helio únicamente",
        "Hierro",
        "Sal",
      ],
      answer: "Dióxido de carbono",
    },
    {
      question: "¿Qué acción ayuda a cuidar el ambiente?",
      options: [
        "Reducir residuos",
        "Desperdiciar agua",
        "Quemar basura",
        "Contaminar ríos",
      ],
      answer: "Reducir residuos",
    },
  ]),

  // =====================================================
  // 2° SECUNDARIA - SOCIALES
  // =====================================================

  "soc-2-1": createQuiz([
    {
      question: "¿Qué caracteriza a una civilización?",
      options: [
        "Una sociedad organizada",
        "Solo un animal",
        "Una operación matemática",
        "Un objeto",
      ],
      answer: "Una sociedad organizada",
    },
    {
      question: "¿Dónde surgieron algunas de las primeras civilizaciones?",
      options: [
        "Cerca de grandes ríos",
        "Solo en montañas",
        "Solo en desiertos",
        "En el espacio",
      ],
      answer: "Cerca de grandes ríos",
    },
    {
      question: "¿Qué desarrollaron muchas civilizaciones antiguas?",
      options: [
        "Escritura",
        "Internet",
        "Satélites modernos",
        "Computadoras",
      ],
      answer: "Escritura",
    },
  ]),

  "soc-2-2": createQuiz([
    {
      question: "¿Qué periodo siguió a la Edad Antigua?",
      options: [
        "Edad Media",
        "Edad Moderna",
        "Edad Contemporánea",
        "Prehistoria",
      ],
      answer: "Edad Media",
    },
    {
      question: "¿Qué sistema social fue importante en la Edad Media europea?",
      options: ["Feudalismo", "Internet", "Industrialización", "Globalización"],
      answer: "Feudalismo",
    },
    {
      question: "¿Qué institución tuvo gran influencia en Europa medieval?",
      options: ["La Iglesia", "Una empresa tecnológica", "Una red social", "Una fábrica moderna"],
      answer: "La Iglesia",
    },
  ]),

  "soc-2-3": createQuiz([
    {
      question: "¿Qué forma parte de la cultura?",
      options: [
        "Costumbres",
        "Solo edificios",
        "Solo números",
        "Solo máquinas",
      ],
      answer: "Costumbres",
    },
    {
      question: "¿Qué puede transmitirse entre generaciones?",
      options: ["Tradiciones", "Solo objetos", "Solo monedas", "Solo mapas"],
      answer: "Tradiciones",
    },
    {
      question: "¿Qué ayuda a construir la identidad cultural?",
      options: [
        "La historia y las costumbres",
        "Solo las matemáticas",
        "Solo el clima",
        "Nada",
      ],
      answer: "La historia y las costumbres",
    },
  ]),

  "soc-2-4": createQuiz([
    {
      question: "¿Qué estudia la geografía?",
      options: [
        "El espacio geográfico",
        "Solo la literatura",
        "Solo las ecuaciones",
        "Solo los seres vivos",
      ],
      answer: "El espacio geográfico",
    },
    {
      question: "¿Qué elemento pertenece al espacio geográfico?",
      options: ["Ríos", "Ecuaciones", "Poemas", "Átomos"],
      answer: "Ríos",
    },
    {
      question: "¿Qué representa un mapa?",
      options: [
        "Información sobre un espacio geográfico",
        "Una fórmula",
        "Una narración",
        "Una reacción química",
      ],
      answer: "Información sobre un espacio geográfico",
    },
  ]),

  // =====================================================
  // 3° SECUNDARIA - MATEMÁTICA
  // =====================================================

  "mat-3-1": createQuiz([
    {
      question: "¿Cuál es una expresión algebraica?",
      options: ["3x + 2", "Lima", "Martes", "Agua"],
      answer: "3x + 2",
    },
    {
      question: "Si x = 4, ¿cuánto vale 2x?",
      options: ["6", "8", "10", "12"],
      answer: "8",
    },
    {
      question: "¿Qué representa una variable?",
      options: [
        "Un valor que puede cambiar",
        "Siempre cero",
        "Una figura",
        "Un color",
      ],
      answer: "Un valor que puede cambiar",
    },
  ]),

  "mat-3-2": createQuiz([
    {
      question: "Resuelve: x + 5 = 12",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      question: "Resuelve: 2x = 10",
      options: ["2", "4", "5", "8"],
      answer: "5",
    },
    {
      question: "¿Qué buscamos normalmente al resolver una ecuación?",
      options: [
        "El valor de la incógnita",
        "El color",
        "El tamaño",
        "El nombre",
      ],
      answer: "El valor de la incógnita",
    },
  ]),

  "mat-3-3": createQuiz([
    {
      question: "¿Qué es una función?",
      options: [
        "Una relación entre cantidades",
        "Una figura",
        "Un texto",
        "Una unidad",
      ],
      answer: "Una relación entre cantidades",
    },
    {
      question: "¿Qué puede representar una función?",
      options: ["Una relación entre x e y", "Solo una palabra", "Un objeto", "Un color"],
      answer: "Una relación entre x e y",
    },
    {
      question: "¿Cuál puede ser una variable independiente?",
      options: ["x", "Siempre 0", "Un punto", "Una unidad"],
      answer: "x",
    },
  ]),

  "mat-3-4": createQuiz([
    {
      question: "¿Qué estudia la estadística?",
      options: [
        "Datos e información",
        "Solo figuras",
        "Solo literatura",
        "Solo planetas",
      ],
      answer: "Datos e información",
    },
    {
      question: "¿Qué representa la media?",
      options: [
        "Un promedio",
        "El valor más pequeño siempre",
        "El valor más grande siempre",
        "Una figura",
      ],
      answer: "Un promedio",
    },
    {
      question: "¿Cuál es una forma de representar datos?",
      options: ["Gráfico", "Poema", "Mapa político únicamente", "Ecuación siempre"],
      answer: "Gráfico",
    },
  ]),

  // =====================================================
  // 3° SECUNDARIA - COMUNICACIÓN
  // =====================================================

  "com-3-1": createQuiz([
    {
      question: "¿Qué es analizar una obra literaria?",
      options: [
        "Estudiar sus elementos y significado",
        "Contar sus páginas",
        "Ignorar su contenido",
        "Solo copiarla",
      ],
      answer: "Estudiar sus elementos y significado",
    },
    {
      question: "¿Qué puede analizarse en una narración?",
      options: ["Personajes", "Solo números", "Solo fechas", "Solo colores"],
      answer: "Personajes",
    },
    {
      question: "¿Qué elemento indica quién cuenta la historia?",
      options: ["Narrador", "Título", "Portada", "Índice"],
      answer: "Narrador",
    },
  ]),

  "com-3-2": createQuiz([
    {
      question: "¿Qué es argumentar?",
      options: [
        "Defender una idea con razones",
        "Copiar información",
        "Dibujar",
        "Memorizar palabras",
      ],
      answer: "Defender una idea con razones",
    },
    {
      question: "¿Qué fortalece un argumento?",
      options: ["Evidencias", "Rumores", "Contradicciones", "Silencio"],
      answer: "Evidencias",
    },
    {
      question: "¿Qué debe tener una buena argumentación?",
      options: [
        "Una postura clara",
        "Ninguna idea",
        "Solo imágenes",
        "Información desordenada",
      ],
      answer: "Una postura clara",
    },
  ]),

  "com-3-3": createQuiz([
    {
      question: "¿Qué es la comunicación oral?",
      options: [
        "Intercambio de mensajes mediante el habla",
        "Solo escribir",
        "Solo dibujar",
        "Resolver operaciones",
      ],
      answer: "Intercambio de mensajes mediante el habla",
    },
    {
      question: "¿Qué ayuda a una buena exposición?",
      options: [
        "Hablar con claridad",
        "No organizar ideas",
        "Hablar sin escuchar",
        "Evitar el tema",
      ],
      answer: "Hablar con claridad",
    },
    {
      question: "¿Qué debemos considerar al hablar con otras personas?",
      options: [
        "Escuchar y respetar",
        "Interrumpir siempre",
        "Ignorar al interlocutor",
        "No responder",
      ],
      answer: "Escuchar y respetar",
    },
  ]),

  "com-3-4": createQuiz([
    {
      question: "¿Qué es producir un texto?",
      options: [
        "Organizar y expresar ideas por escrito",
        "Copiar palabras sin entender",
        "Solo dibujar",
        "Resolver problemas",
      ],
      answer: "Organizar y expresar ideas por escrito",
    },
    {
      question: "¿Qué ayuda a organizar un texto?",
      options: [
        "Introducción, desarrollo y cierre",
        "Ideas al azar",
        "Solo imágenes",
        "Ninguna estructura",
      ],
      answer: "Introducción, desarrollo y cierre",
    },
    {
      question: "¿Qué debemos revisar al terminar un texto?",
      options: [
        "Ortografía y coherencia",
        "Solo el color",
        "Solo el tamaño",
        "Nada",
      ],
      answer: "Ortografía y coherencia",
    },
  ]),

  // =====================================================
  // 3° SECUNDARIA - FÍSICA
  // =====================================================

  "fis-3-1": createQuiz([
    {
      question: "¿Qué estudia la física?",
      options: [
        "Fenómenos de la naturaleza",
        "Solo literatura",
        "Solo historia",
        "Solo idiomas",
      ],
      answer: "Fenómenos de la naturaleza",
    },
    {
      question: "¿Qué es el movimiento?",
      options: [
        "Cambio de posición",
        "Cambio de nombre",
        "Cambio de color solamente",
        "Una unidad",
      ],
      answer: "Cambio de posición",
    },
    {
      question: "¿Qué necesitamos para describir un movimiento?",
      options: [
        "Referencia y tiempo",
        "Solo color",
        "Solo peso",
        "Solo temperatura",
      ],
      answer: "Referencia y tiempo",
    },
  ]),

  "fis-3-2": createQuiz([
    {
      question: "¿Qué representa la velocidad?",
      options: [
        "Cambio de posición respecto al tiempo",
        "Solo distancia",
        "Solo masa",
        "Solo temperatura",
      ],
      answer: "Cambio de posición respecto al tiempo",
    },
    {
      question: "¿Cuál es una unidad común de velocidad?",
      options: ["m/s", "kg", "L", "°C"],
      answer: "m/s",
    },
    {
      question: "Si un objeto recorre 20 m en 4 s, su velocidad media es:",
      options: ["4 m/s", "5 m/s", "6 m/s", "8 m/s"],
      answer: "5 m/s",
    },
  ]),

  "fis-3-3": createQuiz([
    {
      question: "¿Qué es una fuerza?",
      options: [
        "Una interacción que puede cambiar el movimiento",
        "Una unidad de masa",
        "Una temperatura",
        "Un sonido",
      ],
      answer: "Una interacción que puede cambiar el movimiento",
    },
    {
      question: "¿Cuál es una unidad de fuerza?",
      options: ["Newton", "Metro", "Segundo", "Litro"],
      answer: "Newton",
    },
    {
      question: "¿Qué puede hacer una fuerza?",
      options: [
        "Cambiar el movimiento",
        "Cambiar siempre la masa",
        "Eliminar el tiempo",
        "Crear agua",
      ],
      answer: "Cambiar el movimiento",
    },
  ]),

  "fis-3-4": createQuiz([
    {
      question: "¿Qué es la energía?",
      options: [
        "Capacidad de producir cambios",
        "Una longitud",
        "Una masa",
        "Un color",
      ],
      answer: "Capacidad de producir cambios",
    },
    {
      question: "¿Cuál es una forma de energía?",
      options: ["Cinética", "Textual", "Alfabética", "Geográfica"],
      answer: "Cinética",
    },
    {
      question: "¿Qué tiene energía cinética?",
      options: [
        "Un objeto en movimiento",
        "Un objeto sin movimiento siempre",
        "Una palabra",
        "Un mapa",
      ],
      answer: "Un objeto en movimiento",
    },
  ]),

  // =====================================================
  // 3° SECUNDARIA - HISTORIA
  // =====================================================

  "his-3-1": createQuiz([
    {
      question: "¿Qué estudia la historia?",
      options: [
        "Los procesos del pasado",
        "Solo el futuro",
        "Solo las matemáticas",
        "Solo la naturaleza",
      ],
      answer: "Los procesos del pasado",
    },
    {
      question: "¿Qué es una fuente histórica?",
      options: [
        "Una evidencia del pasado",
        "Una fórmula",
        "Una planta",
        "Una máquina",
      ],
      answer: "Una evidencia del pasado",
    },
    {
      question: "¿Qué civilización se desarrolló en Mesopotamia?",
      options: ["Sumeria", "Inca", "Azteca", "Maya"],
      answer: "Sumeria",
    },
  ]),

  "his-3-2": createQuiz([
    {
      question: "¿Qué periodo corresponde a la Edad Moderna?",
      options: [
        "Un periodo histórico posterior a la Edad Media",
        "La prehistoria",
        "La Edad Antigua solamente",
        "El futuro",
      ],
      answer: "Un periodo histórico posterior a la Edad Media",
    },
    {
      question: "¿Qué hecho se relaciona tradicionalmente con el inicio de la Edad Moderna?",
      options: [
        "La llegada europea a América en 1492",
        "La invención de Internet",
        "La Revolución Industrial",
        "La llegada a la Luna",
      ],
      answer: "La llegada europea a América en 1492",
    },
    {
      question: "¿Qué fue importante durante la Edad Moderna?",
      options: [
        "El Renacimiento",
        "Internet",
        "La inteligencia artificial",
        "Los teléfonos móviles",
      ],
      answer: "El Renacimiento",
    },
  ]),

  "his-3-3": createQuiz([
    {
      question: "¿Qué es una revolución?",
      options: [
        "Un cambio profundo en una sociedad",
        "Una operación matemática",
        "Una estación del año",
        "Un planeta",
      ],
      answer: "Un cambio profundo en una sociedad",
    },
    {
      question: "¿Qué revolución transformó la producción mediante máquinas?",
      options: [
        "Revolución Industrial",
        "Revolución Digital únicamente",
        "Revolución Astronómica",
        "Revolución Geográfica",
      ],
      answer: "Revolución Industrial",
    },
    {
      question: "¿Qué puede provocar una revolución?",
      options: [
        "Cambios sociales y políticos",
        "Nada",
        "Solo cambios de clima",
        "Solo cambios de idioma",
      ],
      answer: "Cambios sociales y políticos",
    },
  ]),

  "his-3-4": createQuiz([
    {
      question: "¿Qué estudia la historia contemporánea?",
      options: [
        "Procesos históricos recientes",
        "Solo la prehistoria",
        "Solo los dinosaurios",
        "Solo la geometría",
      ],
      answer: "Procesos históricos recientes",
    },
    {
      question: "¿Qué caracteriza al mundo contemporáneo?",
      options: [
        "Grandes cambios tecnológicos y sociales",
        "Ausencia total de tecnología",
        "Solo sociedades antiguas",
        "Solo agricultura",
      ],
      answer: "Grandes cambios tecnológicos y sociales",
    },
    {
      question: "¿Por qué estudiamos historia?",
      options: [
        "Para comprender procesos y cambios del pasado",
        "Solo para memorizar fechas",
        "Para evitar pensar",
        "Solo para hacer cálculos",
      ],
      answer: "Para comprender procesos y cambios del pasado",
    },
  ]),

  // =====================================================
  // 4° SECUNDARIA - MATEMÁTICA
  // =====================================================

  "mat-4-1": createQuiz([
    {
      question: "¿Qué puede representar una función?",
      options: [
        "Una relación entre variables",
        "Solo una figura",
        "Solo una palabra",
        "Un objeto",
      ],
      answer: "Una relación entre variables",
    },
    {
      question: "¿Cuál puede ser una variable independiente?",
      options: ["x", "Siempre 1", "Un triángulo", "Un color"],
      answer: "x",
    },
    {
      question: "¿Qué puede utilizarse para representar una función?",
      options: [
        "Una gráfica",
        "Solo una fotografía",
        "Solo una palabra",
        "Solo una fecha",
      ],
      answer: "Una gráfica",
    },
  ]),

  "mat-4-2": createQuiz([
    {
      question: "¿Cuánto mide un ángulo de 180°?",
      options: [
        "Ángulo llano",
        "Ángulo recto",
        "Ángulo agudo",
        "Ángulo completo",
      ],
      answer: "Ángulo llano",
    },
    {
      question: "¿Cuánto vale aproximadamente sen(30°)?",
      options: ["0.5", "1", "2", "0"],
      answer: "0.5",
    },
    {
      question: "¿Qué estudia la trigonometría?",
      options: [
        "Relaciones entre ángulos y lados",
        "Solo estadísticas",
        "Solo números naturales",
        "Solo historia",
      ],
      answer: "Relaciones entre ángulos y lados",
    },
  ]),

  "mat-4-3": createQuiz([
    {
      question: "¿Cuántas dimensiones tiene un plano?",
      options: ["2", "1", "3", "4"],
      answer: "2",
    },
    {
      question: "¿Qué estudia la geometría?",
      options: [
        "Figuras, formas y propiedades",
        "Solo números",
        "Solo textos",
        "Solo historia",
      ],
      answer: "Figuras, formas y propiedades",
    },
    {
      question: "¿Cuál es una figura tridimensional?",
      options: ["Cubo", "Triángulo", "Cuadrado", "Círculo"],
      answer: "Cubo",
    },
  ]),

  "mat-4-4": createQuiz([
    {
      question: "¿Qué estudia la estadística?",
      options: [
        "Datos e información",
        "Solo geometría",
        "Solo literatura",
        "Solo historia",
      ],
      answer: "Datos e información",
    },
    {
      question: "¿Qué es la mediana?",
      options: [
        "El valor central de datos ordenados",
        "El valor más grande siempre",
        "El valor más pequeño siempre",
        "El promedio siempre",
      ],
      answer: "El valor central de datos ordenados",
    },
    {
      question: "¿Qué gráfico puede representar categorías?",
      options: [
        "Gráfico de barras",
        "Solo una ecuación",
        "Una narración",
        "Un mapa histórico",
      ],
      answer: "Gráfico de barras",
    },
  ]),

  // =====================================================
  // 4° SECUNDARIA - COMUNICACIÓN
  // =====================================================

  "com-4-1": createQuiz([
    {
      question: "¿Qué es una obra literaria?",
      options: [
        "Una creación artística mediante el lenguaje",
        "Una ecuación",
        "Un mapa",
        "Una fórmula química",
      ],
      answer: "Una creación artística mediante el lenguaje",
    },
    {
      question: "¿Cuál es un género literario?",
      options: ["Narrativa", "Álgebra", "Química", "Geometría"],
      answer: "Narrativa",
    },
    {
      question: "¿Qué recurso puede utilizar un texto literario?",
      options: ["Metáfora", "Ecuación", "Fórmula", "Gráfico estadístico"],
      answer: "Metáfora",
    },
  ]),

  "com-4-2": createQuiz([
    {
      question: "¿Qué necesita una argumentación?",
      options: [
        "Una postura y razones",
        "Solo imágenes",
        "Solo preguntas",
        "Ninguna idea",
      ],
      answer: "Una postura y razones",
    },
    {
      question: "¿Qué es una evidencia?",
      options: [
        "Información que respalda una idea",
        "Una opinión sin fundamento",
        "Una pregunta",
        "Un dibujo",
      ],
      answer: "Información que respalda una idea",
    },
    {
      question: "¿Qué hace más sólido un argumento?",
      options: [
        "Evidencias pertinentes",
        "Información falsa",
        "Ideas contradictorias",
        "Ausencia de razones",
      ],
      answer: "Evidencias pertinentes",
    },
  ]),

  "com-4-3": createQuiz([
    {
      question: "¿Qué significa analizar un texto?",
      options: [
        "Examinar sus ideas y elementos",
        "Contar palabras únicamente",
        "Ignorar su contenido",
        "Copiarlo",
      ],
      answer: "Examinar sus ideas y elementos",
    },
    {
      question: "¿Qué podemos identificar en un texto?",
      options: [
        "Tema e ideas principales",
        "Solo colores",
        "Solo páginas",
        "Solo letras",
      ],
      answer: "Tema e ideas principales",
    },
    {
      question: "¿Qué ayuda a comprender un texto?",
      options: [
        "Relacionar sus ideas",
        "Ignorar el contexto",
        "No leer",
        "Eliminar información",
      ],
      answer: "Relacionar sus ideas",
    },
  ]),

  "com-4-4": createQuiz([
    {
      question: "¿Qué es comunicarse efectivamente?",
      options: [
        "Transmitir y comprender mensajes con claridad",
        "Hablar sin escuchar",
        "No organizar ideas",
        "Evitar responder",
      ],
      answer: "Transmitir y comprender mensajes con claridad",
    },
    {
      question: "¿Qué es importante al escuchar?",
      options: [
        "Prestar atención",
        "Interrumpir",
        "Ignorar",
        "Cambiar de tema",
      ],
      answer: "Prestar atención",
    },
    {
      question: "¿Qué ayuda a expresar una idea?",
      options: [
        "Claridad",
        "Desorden",
        "Contradicciones",
        "Silencio",
      ],
      answer: "Claridad",
    },
  ]),

  // =====================================================
  // 4° SECUNDARIA - FÍSICA
  // =====================================================

  "fis-4-1": createQuiz([
    {
      question: "¿Qué estudia la cinemática?",
      options: [
        "El movimiento sin analizar sus causas",
        "Solo la electricidad",
        "Solo el calor",
        "Solo la química",
      ],
      answer: "El movimiento sin analizar sus causas",
    },
    {
      question: "¿Qué magnitud indica cuánto recorre un objeto?",
      options: ["Distancia", "Masa", "Temperatura", "Densidad"],
      answer: "Distancia",
    },
    {
      question: "¿Qué unidad se usa para medir el tiempo?",
      options: ["Segundo", "Newton", "Metro", "Joule"],
      answer: "Segundo",
    },
  ]),

  "fis-4-2": createQuiz([
    {
      question: "¿Qué estudia la dinámica?",
      options: [
        "Las causas del movimiento",
        "Solo la posición",
        "Solo la temperatura",
        "Solo el volumen",
      ],
      answer: "Las causas del movimiento",
    },
    {
      question: "¿Qué ley relaciona fuerza, masa y aceleración?",
      options: [
        "Segunda ley de Newton",
        "Primera ley de Newton",
        "Ley de Ohm",
        "Ley de conservación de la masa",
      ],
      answer: "Segunda ley de Newton",
    },
    {
      question: "¿Cuál es la unidad de fuerza?",
      options: ["Newton", "Joule", "Watt", "Volt"],
      answer: "Newton",
    },
  ]),

  "fis-4-3": createQuiz([
    {
      question: "¿Qué es el trabajo en física?",
      options: [
        "Transferencia de energía mediante una fuerza y desplazamiento",
        "Solo esfuerzo personal",
        "Una unidad de tiempo",
        "Una temperatura",
      ],
      answer: "Transferencia de energía mediante una fuerza y desplazamiento",
    },
    {
      question: "¿Cuál es una unidad de energía?",
      options: ["Joule", "Metro", "Segundo", "Newton por metro"],
      answer: "Joule",
    },
    {
      question: "¿Qué principio indica que la energía no se crea ni se destruye?",
      options: [
        "Conservación de la energía",
        "Ley de Ohm",
        "Ley de reflexión",
        "Ley de gravitación",
      ],
      answer: "Conservación de la energía",
    },
  ]),

  "fis-4-4": createQuiz([
    {
      question: "¿Qué es la corriente eléctrica?",
      options: [
        "Movimiento ordenado de cargas eléctricas",
        "Movimiento de agua",
        "Una forma de masa",
        "Una temperatura",
      ],
      answer: "Movimiento ordenado de cargas eléctricas",
    },
    {
      question: "¿Cuál es la unidad de corriente eléctrica?",
      options: ["Amperio", "Voltio", "Ohmio", "Joule"],
      answer: "Amperio",
    },
    {
      question: "¿Qué magnitud se mide en voltios?",
      options: [
        "Diferencia de potencial",
        "Masa",
        "Distancia",
        "Tiempo",
      ],
      answer: "Diferencia de potencial",
    },
  ]),

  // =====================================================
  // 4° SECUNDARIA - QUÍMICA
  // =====================================================

  "qui-4-1": createQuiz([
    {
      question: "¿Qué es la materia?",
      options: [
        "Todo lo que tiene masa y ocupa un lugar",
        "Solo los líquidos",
        "Solo los gases",
        "Solo los objetos sólidos",
      ],
      answer: "Todo lo que tiene masa y ocupa un lugar",
    },
    {
      question: "¿Cuál es un estado de la materia?",
      options: ["Sólido", "Rápido", "Grande", "Pesado"],
      answer: "Sólido",
    },
    {
      question: "¿Qué propiedad tiene la materia?",
      options: ["Masa", "Color siempre", "Sonido siempre", "Movimiento siempre"],
      answer: "Masa",
    },
  ]),

  "qui-4-2": createQuiz([
    {
      question: "¿Qué es un átomo?",
      options: [
        "Una unidad básica de la materia",
        "Una célula",
        "Un planeta",
        "Una molécula de agua siempre",
      ],
      answer: "Una unidad básica de la materia",
    },
    {
      question: "¿Qué partícula tiene carga negativa?",
      options: ["Electrón", "Protón", "Neutrón", "Núcleo"],
      answer: "Electrón",
    },
    {
      question: "¿Dónde se encuentran protones y neutrones?",
      options: ["En el núcleo", "En la corteza terrestre", "En el aire", "En el agua"],
      answer: "En el núcleo",
    },
  ]),

  "qui-4-3": createQuiz([
    {
      question: "¿Qué organiza la tabla periódica?",
      options: [
        "Los elementos químicos",
        "Los planetas",
        "Los animales",
        "Las ciudades",
      ],
      answer: "Los elementos químicos",
    },
    {
      question: "¿Cuál es el símbolo químico del oxígeno?",
      options: ["O", "Ox", "Og", "C"],
      answer: "O",
    },
    {
      question: "¿Cuál es el símbolo químico del hidrógeno?",
      options: ["H", "He", "Hg", "Ho"],
      answer: "H",
    },
  ]),

  "qui-4-4": createQuiz([
    {
      question: "¿Qué es un enlace químico?",
      options: [
        "Una interacción que une átomos",
        "Una fuerza mecánica",
        "Una unidad de masa",
        "Una reacción física solamente",
      ],
      answer: "Una interacción que une átomos",
    },
    {
      question: "¿Qué enlace implica compartir electrones?",
      options: [
        "Covalente",
        "Iónico",
        "Gravitacional",
        "Mecánico",
      ],
      answer: "Covalente",
    },
    {
      question: "¿Qué partículas participan principalmente en los enlaces?",
      options: [
        "Electrones",
        "Neutrones únicamente",
        "Protones únicamente",
        "Núcleos completos",
      ],
      answer: "Electrones",
    },
  ]),

  // =====================================================
  // 5° SECUNDARIA - MATEMÁTICA
  // =====================================================

  "mat-5-1": createQuiz([
    {
      question: "¿Qué puede representar una función avanzada?",
      options: [
        "Una relación entre variables",
        "Solo una figura",
        "Solo una palabra",
        "Un objeto físico",
      ],
      answer: "Una relación entre variables",
    },
    {
      question: "¿Qué tipo de función puede tener una expresión cuadrática?",
      options: [
        "Función cuadrática",
        "Función textual",
        "Función histórica",
        "Función química",
      ],
      answer: "Función cuadrática",
    },
    {
      question: "¿Qué puede utilizarse para estudiar una función?",
      options: [
        "Su gráfica",
        "Solo su nombre",
        "Solo su color",
        "Una fecha",
      ],
      answer: "Su gráfica",
    },
  ]),

  "mat-5-2": createQuiz([
    {
      question: "¿Qué estudia la probabilidad?",
      options: [
        "La posibilidad de que ocurra un evento",
        "Solo figuras",
        "Solo ecuaciones",
        "Solo historia",
      ],
      answer: "La posibilidad de que ocurra un evento",
    },
    {
      question: "¿Cuál es el valor máximo de una probabilidad?",
      options: ["1", "2", "10", "100"],
      answer: "1",
    },
    {
      question: "¿Qué probabilidad representa un evento imposible?",
      options: ["0", "0.5", "1", "2"],
      answer: "0",
    },
  ]),

  "mat-5-3": createQuiz([
    {
      question: "¿Qué estudia la geometría analítica?",
      options: [
        "Figuras mediante coordenadas y ecuaciones",
        "Solo números naturales",
        "Solo literatura",
        "Solo química",
      ],
      answer: "Figuras mediante coordenadas y ecuaciones",
    },
    {
      question: "¿Cómo se llama el punto donde se cruzan los ejes coordenados?",
      options: [
        "Origen",
        "Centroide",
        "Vértice",
        "Radio",
      ],
      answer: "Origen",
    },
    {
      question: "¿Qué eje es horizontal?",
      options: ["Eje X", "Eje Y", "Eje Z", "Ninguno"],
      answer: "Eje X",
    },
  ]),

  "mat-5-4": createQuiz([
    {
      question: "¿Qué ayuda a resolver problemas matemáticos?",
      options: [
        "Identificar datos y estrategia",
        "Adivinar siempre",
        "Ignorar los datos",
        "No revisar el resultado",
      ],
      answer: "Identificar datos y estrategia",
    },
    {
      question: "¿Qué debemos hacer después de resolver un problema?",
      options: [
        "Comprobar el resultado",
        "Borrarlo",
        "Ignorarlo",
        "Cambiar los datos",
      ],
      answer: "Comprobar el resultado",
    },
    {
      question: "¿Qué habilidad es importante en matemática?",
      options: [
        "Razonamiento",
        "Memorización sin comprensión",
        "Adivinación",
        "Copiar",
      ],
      answer: "Razonamiento",
    },
  ]),

  // =====================================================
  // 5° SECUNDARIA - COMUNICACIÓN
  // =====================================================

  "com-5-1": createQuiz([
    {
      question: "¿Qué implica el análisis crítico?",
      options: [
        "Evaluar información y argumentos",
        "Aceptar todo sin analizar",
        "Copiar información",
        "Ignorar evidencias",
      ],
      answer: "Evaluar información y argumentos",
    },
    {
      question: "¿Qué debemos evaluar en una fuente?",
      options: [
        "Su confiabilidad",
        "Solo su color",
        "Solo su tamaño",
        "Solo su título",
      ],
      answer: "Su confiabilidad",
    },
    {
      question: "¿Qué ayuda a desarrollar pensamiento crítico?",
      options: [
        "Comparar evidencias",
        "No hacer preguntas",
        "Aceptar rumores",
        "Evitar analizar",
      ],
      answer: "Comparar evidencias",
    },
  ]),

  "com-5-2": createQuiz([
    {
      question: "¿Qué estudia la literatura peruana?",
      options: [
        "Obras y autores vinculados al Perú",
        "Solo literatura extranjera",
        "Solo matemáticas",
        "Solo ciencias",
      ],
      answer: "Obras y autores vinculados al Perú",
    },
    {
      question: "¿Qué puede reflejar una obra literaria?",
      options: [
        "La sociedad y su contexto",
        "Solo números",
        "Solo fórmulas",
        "Solo mapas",
      ],
      answer: "La sociedad y su contexto",
    },
    {
      question: "¿Qué elemento puede analizarse en una obra?",
      options: [
        "Tema",
        "Solo número de páginas",
        "Solo tamaño",
        "Solo color",
      ],
      answer: "Tema",
    },
  ]),

  "com-5-3": createQuiz([
    {
      question: "¿Qué es un ensayo?",
      options: [
        "Un texto que desarrolla y argumenta una idea",
        "Una lista de números",
        "Una fórmula",
        "Un mapa",
      ],
      answer: "Un texto que desarrolla y argumenta una idea",
    },
    {
      question: "¿Qué suele contener un ensayo?",
      options: [
        "Introducción, desarrollo y conclusión",
        "Solo preguntas",
        "Solo imágenes",
        "Solo datos sin explicación",
      ],
      answer: "Introducción, desarrollo y conclusión",
    },
    {
      question: "¿Qué ayuda a sustentar un ensayo?",
      options: [
        "Argumentos y evidencias",
        "Rumores",
        "Ideas sin relación",
        "Ausencia de fuentes",
      ],
      answer: "Argumentos y evidencias",
    },
  ]),

  "com-5-4": createQuiz([
    {
      question: "¿Qué caracteriza a la comunicación académica?",
      options: [
        "Claridad y organización",
        "Desorden",
        "Ausencia de fuentes",
        "Información sin estructura",
      ],
      answer: "Claridad y organización",
    },
    {
      question: "¿Qué suele respaldar una afirmación académica?",
      options: [
        "Fuentes o evidencias",
        "Rumores",
        "Opiniones sin explicación",
        "Información inventada",
      ],
      answer: "Fuentes o evidencias",
    },
    {
      question: "¿Qué debe evitarse en un texto académico?",
      options: [
        "Plagio",
        "Citar fuentes",
        "Organizar ideas",
        "Revisar el texto",
      ],
      answer: "Plagio",
    },
  ]),

  // =====================================================
  // 5° SECUNDARIA - FÍSICA
  // =====================================================

  "fis-5-1": createQuiz([
    {
      question: "¿Qué estudia el movimiento avanzado?",
      options: [
        "El comportamiento del movimiento mediante modelos físicos",
        "Solo literatura",
        "Solo historia",
        "Solo química",
      ],
      answer: "El comportamiento del movimiento mediante modelos físicos",
    },
    {
      question: "¿Qué magnitud mide el cambio de velocidad?",
      options: ["Aceleración", "Masa", "Distancia", "Temperatura"],
      answer: "Aceleración",
    },
    {
      question: "¿Cuál es una unidad de aceleración?",
      options: ["m/s²", "kg", "N", "J"],
      answer: "m/s²",
    },
  ]),

  "fis-5-2": createQuiz([
    {
      question: "¿Qué estudia la electricidad?",
      options: [
        "Fenómenos relacionados con cargas eléctricas",
        "Solo movimiento mecánico",
        "Solo temperatura",
        "Solo sonido",
      ],
      answer: "Fenómenos relacionados con cargas eléctricas",
    },
    {
      question: "¿Qué unidad mide la resistencia eléctrica?",
      options: ["Ohmio", "Voltio", "Amperio", "Joule"],
      answer: "Ohmio",
    },
    {
      question: "¿Qué ley relaciona voltaje, corriente y resistencia?",
      options: [
        "Ley de Ohm",
        "Ley de Newton",
        "Ley de conservación",
        "Ley de Snell",
      ],
      answer: "Ley de Ohm",
    },
  ]),

  "fis-5-3": createQuiz([
    {
      question: "¿Qué es una onda?",
      options: [
        "Una perturbación que se propaga",
        "Una masa",
        "Una temperatura",
        "Una partícula siempre",
      ],
      answer: "Una perturbación que se propaga",
    },
    {
      question: "¿Cuál es un ejemplo de onda?",
      options: ["Sonido", "Masa", "Temperatura", "Densidad"],
      answer: "Sonido",
    },
    {
      question: "¿Qué puede transportar una onda?",
      options: [
        "Energía",
        "Siempre materia completa",
        "Solo masa",
        "Solo objetos",
      ],
      answer: "Energía",
    },
  ]),

  "fis-5-4": createQuiz([
    {
      question: "¿Qué estudia la física moderna?",
      options: [
        "Fenómenos como los cuánticos y relativistas",
        "Solo movimiento cotidiano",
        "Solo geometría",
        "Solo biología",
      ],
      answer: "Fenómenos como los cuánticos y relativistas",
    },
    {
      question: "¿Qué teoría está relacionada con Einstein?",
      options: [
        "Relatividad",
        "Evolución",
        "Tectónica de placas",
        "Selección natural",
      ],
      answer: "Relatividad",
    },
    {
      question: "¿Qué estudia la física cuántica?",
      options: [
        "Fenómenos a escala microscópica",
        "Solo planetas",
        "Solo montañas",
        "Solo organismos",
      ],
      answer: "Fenómenos a escala microscópica",
    },
  ]),

  // =====================================================
  // 5° SECUNDARIA - QUÍMICA
  // =====================================================

  "qui-5-1": createQuiz([
    {
      question: "¿Qué es una reacción química?",
      options: [
        "Un proceso donde unas sustancias se transforman en otras",
        "Solo un cambio de lugar",
        "Un movimiento mecánico",
        "Una figura",
      ],
      answer: "Un proceso donde unas sustancias se transforman en otras",
    },
    {
      question: "¿Cómo se llaman las sustancias iniciales?",
      options: ["Reactivos", "Productos", "Catalizadores siempre", "Elementos"],
      answer: "Reactivos",
    },
    {
      question: "¿Cómo se llaman las sustancias obtenidas?",
      options: ["Productos", "Reactivos", "Átomos", "Electrones"],
      answer: "Productos",
    },
  ]),

  "qui-5-2": createQuiz([
    {
      question: "¿Qué estudia la estequiometría?",
      options: [
        "Relaciones cuantitativas en las reacciones químicas",
        "Solo temperaturas",
        "Solo colores",
        "Solo estados físicos",
      ],
      answer: "Relaciones cuantitativas en las reacciones químicas",
    },
    {
      question: "¿Qué unidad se utiliza para medir cantidad de sustancia?",
      options: ["Mol", "Metro", "Segundo", "Newton"],
      answer: "Mol",
    },
    {
      question: "¿Qué debe cumplir una ecuación química balanceada?",
      options: [
        "Conservar el número de átomos",
        "Cambiar los elementos",
        "Eliminar productos",
        "Eliminar reactivos",
      ],
      answer: "Conservar el número de átomos",
    },
  ]),

  "qui-5-3": createQuiz([
    {
      question: "¿Qué estudia la química orgánica principalmente?",
      options: [
        "Compuestos del carbono",
        "Solo metales",
        "Solo agua",
        "Solo minerales",
      ],
      answer: "Compuestos del carbono",
    },
    {
      question: "¿Cuál es un compuesto orgánico?",
      options: ["Metano", "Agua", "Cloruro de sodio", "Oxígeno"],
      answer: "Metano",
    },
    {
      question: "¿Qué elemento es fundamental en la química orgánica?",
      options: ["Carbono", "Hierro", "Sodio", "Helio"],
      answer: "Carbono",
    },
  ]),

  "qui-5-4": createQuiz([
    {
      question: "¿Dónde encontramos química en la vida cotidiana?",
      options: [
        "En alimentos, medicamentos y productos",
        "Solo en laboratorios",
        "Solo en planetas",
        "En ningún lugar",
      ],
      answer: "En alimentos, medicamentos y productos",
    },
    {
      question: "¿Qué proceso químico ocurre al cocinar?",
      options: [
        "Transformaciones de sustancias",
        "Solo cambios de ubicación",
        "Ningún cambio",
        "Solo cambios de tamaño",
      ],
      answer: "Transformaciones de sustancias",
    },
    {
      question: "¿Por qué es importante la química?",
      options: [
        "Ayuda a comprender y transformar la materia",
        "Solo sirve para memorizar",
        "Solo sirve para dibujar",
        "No tiene aplicaciones",
      ],
      answer: "Ayuda a comprender y transformar la materia",
    },
  ]),
    // =====================================================
  // 1° SECUNDARIA - INGLÉS
  // =====================================================

  "ing-1-1": createQuiz([
    {
      question: "¿Cómo se dice 'Hola' en inglés?",
      options: ["Hello", "Goodbye", "Thanks", "Please"],
      answer: "Hello",
    },
    {
      question: "¿Cómo se dice 'Buenos días'?",
      options: ["Good night", "Good morning", "Goodbye", "Good afternoon"],
      answer: "Good morning",
    },
    {
      question: "¿Cuál es una forma de presentarse?",
      options: ["My name is...", "See you...", "Good night", "Thank you"],
      answer: "My name is...",
    },
  ]),

  "ing-1-2": createQuiz([
    {
      question: "¿Cuál es el número 5 en inglés?",
      options: ["Four", "Five", "Six", "Seven"],
      answer: "Five",
    },
    {
      question: "¿Cómo se dice 'rojo'?",
      options: ["Blue", "Green", "Red", "Yellow"],
      answer: "Red",
    },
    {
      question: "¿Cómo se dice 'libro'?",
      options: ["Book", "Table", "Chair", "Pen"],
      answer: "Book",
    },
  ]),

  "ing-1-3": createQuiz([
    {
      question: "¿Cuál es un pronombre personal?",
      options: ["I", "Book", "School", "Blue"],
      answer: "I",
    },
    {
      question: "Completa: I ___ a student.",
      options: ["am", "is", "are", "be"],
      answer: "am",
    },
    {
      question: "Completa: She ___ my friend.",
      options: ["am", "is", "are", "be"],
      answer: "is",
    },
  ]),

  "ing-1-4": createQuiz([
    {
      question: "¿Cuál oración está correctamente escrita?",
      options: [
        "I am a student.",
        "I student am.",
        "Am I student a.",
        "Student I am a.",
      ],
      answer: "I am a student.",
    },
    {
      question: "¿Cómo se dice 'Yo tengo un libro'?",
      options: [
        "I have a book.",
        "I am a book.",
        "I is a book.",
        "I book have.",
      ],
      answer: "I have a book.",
    },
    {
      question: "¿Qué significa 'My name is Ana'?",
      options: [
        "Mi nombre es Ana",
        "Ana es mi amiga",
        "Tengo una amiga llamada Ana",
        "Ana es estudiante",
      ],
      answer: "Mi nombre es Ana",
    },
  ]),

  // =====================================================
  // 1° SECUNDARIA - EDUCACIÓN AMBIENTAL
  // =====================================================

  "amb-1-1": createQuiz([
    {
      question: "¿Qué es el ambiente?",
      options: [
        "El conjunto de elementos que nos rodean",
        "Solo los animales",
        "Solo las plantas",
        "Solo las ciudades",
      ],
      answer: "El conjunto de elementos que nos rodean",
    },
    {
      question: "¿Cuál forma parte del ambiente?",
      options: ["Agua", "Solo computadoras", "Solo edificios", "Solo vehículos"],
      answer: "Agua",
    },
    {
      question: "¿Por qué es importante cuidar el ambiente?",
      options: [
        "Porque permite la vida",
        "Porque elimina la naturaleza",
        "Porque aumenta los residuos",
        "Porque evita la biodiversidad",
      ],
      answer: "Porque permite la vida",
    },
  ]),

  "amb-1-2": createQuiz([
    {
      question: "¿Cuál es un recurso natural?",
      options: ["Agua", "Una computadora", "Una carretera", "Un cuaderno"],
      answer: "Agua",
    },
    {
      question: "¿Cuál es un recurso natural renovable?",
      options: ["Luz solar", "Petróleo", "Carbón", "Gas natural"],
      answer: "Luz solar",
    },
    {
      question: "¿Por qué debemos cuidar los recursos naturales?",
      options: [
        "Porque son importantes para la vida",
        "Porque no tienen utilidad",
        "Porque siempre son infinitos",
        "Porque contaminan por sí mismos",
      ],
      answer: "Porque son importantes para la vida",
    },
  ]),

  "amb-1-3": createQuiz([
    {
      question: "¿Qué es la contaminación?",
      options: [
        "La introducción de sustancias o elementos dañinos al ambiente",
        "La protección de los ecosistemas",
        "La conservación del agua",
        "La limpieza de un lugar",
      ],
      answer: "La introducción de sustancias o elementos dañinos al ambiente",
    },
    {
      question: "¿Cuál puede contaminar el agua?",
      options: [
        "Arrojar residuos a un río",
        "Ahorrar agua",
        "Plantar árboles",
        "Reciclar",
      ],
      answer: "Arrojar residuos a un río",
    },
    {
      question: "¿Qué puede causar la contaminación?",
      options: [
        "Daños a los ecosistemas",
        "Mayor biodiversidad siempre",
        "Agua más limpia",
        "Menos residuos",
      ],
      answer: "Daños a los ecosistemas",
    },
  ]),

  "amb-1-4": createQuiz([
    {
      question: "¿Qué acción ayuda a cuidar el ambiente?",
      options: [
        "Reducir los residuos",
        "Arrojar basura al río",
        "Desperdiciar agua",
        "Quemar residuos",
      ],
      answer: "Reducir los residuos",
    },
    {
      question: "¿Qué podemos hacer con algunos residuos?",
      options: ["Reciclarlos", "Arrojarlos al río", "Quemarlos siempre", "Dejarlos en la calle"],
      answer: "Reciclarlos",
    },
    {
      question: "¿Qué recurso debemos evitar desperdiciar?",
      options: ["Agua", "Basura", "Contaminación", "Humo"],
      answer: "Agua",
    },
  ]),

  // =====================================================
  // 2° SECUNDARIA - INGLÉS
  // =====================================================

  "ing-2-1": createQuiz([
    {
      question: "¿Qué significa 'every day'?",
      options: ["Todos los días", "Una vez", "Nunca", "Ayer"],
      answer: "Todos los días",
    },
    {
      question: "¿Cuál es una actividad diaria?",
      options: ["Wake up", "Yesterday", "Blue", "Schoolbag"],
      answer: "Wake up",
    },
    {
      question: "¿Cómo se dice 'desayunar'?",
      options: ["Have breakfast", "Go to bed", "Play football", "Go home"],
      answer: "Have breakfast",
    },
  ]),

  "ing-2-2": createQuiz([
    {
      question: "Completa: I ___ to school every day.",
      options: ["go", "goes", "going", "went"],
      answer: "go",
    },
    {
      question: "Completa: She ___ English.",
      options: ["study", "studies", "studying", "studied"],
      answer: "studies",
    },
    {
      question: "¿Qué tiempo verbal se usa para rutinas?",
      options: [
        "Present simple",
        "Past simple",
        "Future perfect",
        "Present perfect",
      ],
      answer: "Present simple",
    },
  ]),

  "ing-2-3": createQuiz([
    {
      question: "¿Cómo se pregunta '¿Dónde vives?'?",
      options: [
        "Where do you live?",
        "What are you?",
        "When do you sleep?",
        "Who are you?",
      ],
      answer: "Where do you live?",
    },
    {
      question: "¿Cuál es una respuesta correcta a 'How are you?'?",
      options: ["I'm fine.", "I'm blue.", "I'm school.", "I'm book."],
      answer: "I'm fine.",
    },
    {
      question: "¿Qué palabra se usa para preguntar por una persona?",
      options: ["Who", "Where", "When", "How"],
      answer: "Who",
    },
  ]),

  "ing-2-4": createQuiz([
    {
      question: "¿Cómo se dice 'Me levanto a las siete'?",
      options: [
        "I get up at seven.",
        "I sleep at seven.",
        "I eat at seven.",
        "I study at seven.",
      ],
      answer: "I get up at seven.",
    },
    {
      question: "¿Qué expresión indica una hora?",
      options: ["At seven", "Every blue", "In school", "My book"],
      answer: "At seven",
    },
    {
      question: "¿Qué significa 'I go to school'?",
      options: [
        "Voy a la escuela",
        "Duermo en la escuela",
        "Trabajo en la escuela",
        "Vivo en la escuela",
      ],
      answer: "Voy a la escuela",
    },
  ]),

  // =====================================================
  // 2° SECUNDARIA - TECNOLOGÍA
  // =====================================================

  "tec-2-1": createQuiz([
    {
      question: "¿Qué es la tecnología?",
      options: [
        "Aplicación de conocimientos para resolver necesidades",
        "Solo computadoras",
        "Solo teléfonos",
        "Solo internet",
      ],
      answer: "Aplicación de conocimientos para resolver necesidades",
    },
    {
      question: "¿Para qué puede servir la tecnología?",
      options: [
        "Resolver problemas",
        "Crear problemas siempre",
        "Eliminar el aprendizaje",
        "Evitar soluciones",
      ],
      answer: "Resolver problemas",
    },
    {
      question: "¿Cuál es un ejemplo de tecnología?",
      options: ["Una computadora", "Una montaña", "Un río", "Una planta"],
      answer: "Una computadora",
    },
  ]),

  "tec-2-2": createQuiz([
    {
      question: "¿Qué es un dato?",
      options: [
        "Una representación de información",
        "Una herramienta física siempre",
        "Una planta",
        "Una emoción",
      ],
      answer: "Una representación de información",
    },
    {
      question: "¿Dónde podemos almacenar información digital?",
      options: ["En un dispositivo de almacenamiento", "En una piedra", "En el aire", "En una sombra"],
      answer: "En un dispositivo de almacenamiento",
    },
    {
      question: "¿Qué debemos hacer con información personal en internet?",
      options: [
        "Protegerla",
        "Compartirla con cualquiera",
        "Publicarla siempre",
        "Ignorar su seguridad",
      ],
      answer: "Protegerla",
    },
  ]),

  "tec-2-3": createQuiz([
    {
      question: "¿Qué es el pensamiento computacional?",
      options: [
        "Una forma de resolver problemas de manera estructurada",
        "Solo usar una computadora",
        "Jugar videojuegos",
        "Escribir textos",
      ],
      answer: "Una forma de resolver problemas de manera estructurada",
    },
    {
      question: "¿Qué ayuda a resolver un problema complejo?",
      options: [
        "Dividirlo en partes",
        "Ignorarlo",
        "Aumentarlo",
        "No analizarlo",
      ],
      answer: "Dividirlo en partes",
    },
    {
      question: "¿Qué es un algoritmo?",
      options: [
        "Una secuencia de pasos para resolver un problema",
        "Un dispositivo",
        "Un videojuego",
        "Una imagen",
      ],
      answer: "Una secuencia de pasos para resolver un problema",
    },
  ]),

  "tec-2-4": createQuiz([
    {
      question: "¿Qué debemos hacer antes de diseñar una solución?",
      options: [
        "Identificar el problema",
        "Ignorar la necesidad",
        "Construir sin planificar",
        "Eliminar los datos",
      ],
      answer: "Identificar el problema",
    },
    {
      question: "¿Qué puede ayudar a diseñar una solución?",
      options: [
        "Un plan",
        "La improvisación total",
        "Ignorar al usuario",
        "No probarla",
      ],
      answer: "Un plan",
    },
    {
      question: "¿Por qué debemos probar una solución?",
      options: [
        "Para comprobar si funciona",
        "Para evitar mejorarla",
        "Para eliminarla",
        "Para no encontrar errores",
      ],
      answer: "Para comprobar si funciona",
    },
  ]),

  // =====================================================
  // 3° SECUNDARIA - INGLÉS
  // =====================================================

  "ing-3-1": createQuiz([
    {
      question: "¿Cuál es el pasado de 'go'?",
      options: ["Went", "Goed", "Goes", "Going"],
      answer: "Went",
    },
    {
      question: "¿Cuál es el pasado de 'play'?",
      options: ["Played", "Play", "Playing", "Plays"],
      answer: "Played",
    },
    {
      question: "¿Qué tiempo se usa para acciones terminadas en el pasado?",
      options: ["Past simple", "Present simple", "Future", "Present continuous"],
      answer: "Past simple",
    },
  ]),

  "ing-3-2": createQuiz([
    {
      question: "¿Qué significa 'I visited my grandmother'?",
      options: [
        "Visité a mi abuela",
        "Visito a mi abuela",
        "Visitaré a mi abuela",
        "Vivo con mi abuela",
      ],
      answer: "Visité a mi abuela",
    },
    {
      question: "¿Qué palabra indica pasado?",
      options: ["Yesterday", "Tomorrow", "Today", "Every day"],
      answer: "Yesterday",
    },
    {
      question: "Completa: We ___ a movie yesterday.",
      options: ["watched", "watch", "watches", "watching"],
      answer: "watched",
    },
  ]),

  "ing-3-3": createQuiz([
    {
      question: "¿Qué debemos buscar primero al leer un texto?",
      options: ["La idea principal", "Solo una palabra", "El número de líneas", "El color"],
      answer: "La idea principal",
    },
    {
      question: "¿Qué significa 'school'?",
      options: ["Escuela", "Casa", "Libro", "Comida"],
      answer: "Escuela",
    },
    {
      question: "¿Qué ayuda a comprender un texto en inglés?",
      options: [
        "El contexto",
        "Ignorar las palabras",
        "No leer",
        "Traducir siempre cada letra",
      ],
      answer: "El contexto",
    },
  ]),

  "ing-3-4": createQuiz([
    {
      question: "¿Cuál oración está en pasado?",
      options: [
        "I visited Cusco.",
        "I visit Cusco.",
        "I am visiting Cusco.",
        "I will visit Cusco.",
      ],
      answer: "I visited Cusco.",
    },
    {
      question: "¿Qué significa 'last year'?",
      options: ["El año pasado", "El próximo año", "Hoy", "Cada año"],
      answer: "El año pasado",
    },
    {
      question: "¿Qué ayuda a escribir una experiencia?",
      options: [
        "Ordenar los acontecimientos",
        "Escribir ideas sin relación",
        "No usar verbos",
        "Ignorar el tiempo",
      ],
      answer: "Ordenar los acontecimientos",
    },
  ]),

  // =====================================================
  // 3° SECUNDARIA - BIOLOGÍA
  // =====================================================

  "bio-3-1": createQuiz([
    {
      question: "¿Cuál es la unidad básica de la vida?",
      options: ["La célula", "El tejido", "El órgano", "El ecosistema"],
      answer: "La célula",
    },
    {
      question: "¿Qué contiene la información genética?",
      options: ["ADN", "Agua", "Oxígeno", "Glucosa"],
      answer: "ADN",
    },
    {
      question: "¿Qué estructura controla muchas actividades celulares?",
      options: ["Núcleo", "Pared celular", "Vacuola", "Membrana"],
      answer: "Núcleo",
    },
  ]),

  "bio-3-2": createQuiz([
    {
      question: "¿Qué tienen las células vegetales que las células animales no tienen típicamente?",
      options: ["Pared celular", "Núcleo", "ADN", "Membrana"],
      answer: "Pared celular",
    },
    {
      question: "¿Qué estructura permite a las plantas realizar fotosíntesis?",
      options: ["Cloroplasto", "Núcleo", "Ribosoma", "Vacuola"],
      answer: "Cloroplasto",
    },
    {
      question: "¿Qué tienen en común las células animales y vegetales?",
      options: [
        "Material genético",
        "Solo cloroplastos",
        "Solo pared celular",
        "Ninguna estructura",
      ],
      answer: "Material genético",
    },
  ]),

  "bio-3-3": createQuiz([
    {
      question: "¿Qué es un tejido?",
      options: [
        "Conjunto de células con funciones relacionadas",
        "Un órgano completo",
        "Un organismo",
        "Una molécula",
      ],
      answer: "Conjunto de células con funciones relacionadas",
    },
    {
      question: "¿Qué nivel de organización está formado por tejidos?",
      options: ["Órgano", "Átomo", "Molécula", "Célula"],
      answer: "Órgano",
    },
    {
      question: "¿Qué forman varios órganos que trabajan juntos?",
      options: ["Sistema", "Célula", "Tejido", "Molécula"],
      answer: "Sistema",
    },
  ]),

  "bio-3-4": createQuiz([
    {
      question: "¿Qué necesitan los seres vivos para obtener energía?",
      options: ["Nutrientes", "Plástico", "Metal", "Vidrio"],
      answer: "Nutrientes",
    },
    {
      question: "¿Qué función permite obtener y utilizar nutrientes?",
      options: ["Nutrición", "Relación", "Reproducción", "Movimiento"],
      answer: "Nutrición",
    },
    {
      question: "¿Cuál es una función vital?",
      options: ["Nutrición", "Decoración", "Construcción", "Transporte"],
      answer: "Nutrición",
    },
  ]),

  // =====================================================
  // 4° SECUNDARIA - INGLÉS
  // =====================================================

  "ing-4-1": createQuiz([
    {
      question: "¿Cuál oración usa present perfect?",
      options: [
        "I have studied.",
        "I studied yesterday.",
        "I study every day.",
        "I will study.",
      ],
      answer: "I have studied.",
    },
    {
      question: "Completa: She ___ visited Lima.",
      options: ["has", "have", "had", "is"],
      answer: "has",
    },
    {
      question: "Completa: They ___ finished the work.",
      options: ["have", "has", "is", "was"],
      answer: "have",
    },
  ]),

  "ing-4-2": createQuiz([
    {
      question: "¿Cuál palabra se usa para comparar dos cosas?",
      options: ["More", "Yesterday", "Always", "Never"],
      answer: "More",
    },
    {
      question: "¿Cuál es el comparativo de 'small'?",
      options: ["Smaller", "Smallest", "More small", "Small"],
      answer: "Smaller",
    },
    {
      question: "¿Qué palabra puede introducir una comparación?",
      options: ["Than", "Yesterday", "Because", "Never"],
      answer: "Than",
    },
  ]),

  "ing-4-3": createQuiz([
    {
      question: "¿Qué ayuda a comprender un texto?",
      options: [
        "Identificar ideas principales",
        "Ignorar el contexto",
        "Leer sin atención",
        "Observar solo el título",
      ],
      answer: "Identificar ideas principales",
    },
    {
      question: "¿Qué significa 'environment'?",
      options: ["Ambiente", "Escuela", "Familia", "Trabajo"],
      answer: "Ambiente",
    },
    {
      question: "¿Qué podemos usar para inferir el significado de una palabra?",
      options: ["El contexto", "Solo el color", "El tamaño", "El número de letras"],
      answer: "El contexto",
    },
  ]),

  "ing-4-4": createQuiz([
    {
      question: "¿Cómo se puede expresar una opinión?",
      options: [
        "I think...",
        "I am yesterday...",
        "I book...",
        "I school...",
      ],
      answer: "I think...",
    },
    {
      question: "¿Qué significa 'In my opinion'?",
      options: [
        "En mi opinión",
        "En mi escuela",
        "Ayer",
        "Por la mañana",
      ],
      answer: "En mi opinión",
    },
    {
      question: "¿Qué ayuda a defender una opinión?",
      options: [
        "Dar razones",
        "No explicar",
        "Cambiar de tema",
        "Evitar evidencias",
      ],
      answer: "Dar razones",
    },
  ]),

  // =====================================================
  // 4° SECUNDARIA - FILOSOFÍA
  // =====================================================

  "fil-4-1": createQuiz([
    {
      question: "¿Qué busca la filosofía?",
      options: [
        "Reflexionar sobre preguntas fundamentales",
        "Solo memorizar fechas",
        "Resolver operaciones",
        "Estudiar únicamente animales",
      ],
      answer: "Reflexionar sobre preguntas fundamentales",
    },
    {
      question: "¿Qué significa filosofar?",
      options: [
        "Reflexionar y cuestionar",
        "Copiar respuestas",
        "No hacer preguntas",
        "Memorizar sin comprender",
      ],
      answer: "Reflexionar y cuestionar",
    },
    {
      question: "¿Qué puede ser una pregunta filosófica?",
      options: [
        "¿Qué es la justicia?",
        "¿Cuánto es 2 + 2?",
        "¿Qué color tiene este lápiz?",
        "¿Cuántas páginas tiene un libro?",
      ],
      answer: "¿Qué es la justicia?",
    },
  ]),

  "fil-4-2": createQuiz([
    {
      question: "¿Qué es el pensamiento crítico?",
      options: [
        "Analizar información antes de aceptar una idea",
        "Aceptar todo sin cuestionar",
        "Memorizar opiniones",
        "Ignorar evidencias",
      ],
      answer: "Analizar información antes de aceptar una idea",
    },
    {
      question: "¿Qué ayuda al pensamiento crítico?",
      options: ["Hacer preguntas", "Aceptar rumores", "Evitar evidencias", "No analizar"],
      answer: "Hacer preguntas",
    },
    {
      question: "¿Qué debemos evaluar?",
      options: [
        "Las razones y evidencias",
        "Solo el título",
        "Solo el color",
        "Solo el tamaño",
      ],
      answer: "Las razones y evidencias",
    },
  ]),

  "fil-4-3": createQuiz([
    {
      question: "¿Qué estudia la ética?",
      options: [
        "Las acciones y decisiones humanas desde una perspectiva moral",
        "Solo los números",
        "Solo los planetas",
        "Solo los idiomas",
      ],
      answer: "Las acciones y decisiones humanas desde una perspectiva moral",
    },
    {
      question: "¿Qué puede orientar una decisión ética?",
      options: ["Valores", "Rumores", "Azar únicamente", "Desinformación"],
      answer: "Valores",
    },
    {
      question: "¿Qué debemos considerar al tomar una decisión?",
      options: [
        "Sus consecuencias",
        "Solo la rapidez",
        "Nada",
        "Solo la opinión de una persona",
      ],
      answer: "Sus consecuencias",
    },
  ]),

  "fil-4-4": createQuiz([
    {
      question: "¿Qué es un argumento?",
      options: [
        "Un conjunto de razones que apoya una conclusión",
        "Una pregunta sin respuesta",
        "Una imagen",
        "Una emoción",
      ],
      answer: "Un conjunto de razones que apoya una conclusión",
    },
    {
      question: "¿Qué debe tener un argumento claro?",
      options: [
        "Razones relacionadas con la conclusión",
        "Ideas sin relación",
        "Información falsa",
        "Ninguna evidencia",
      ],
      answer: "Razones relacionadas con la conclusión",
    },
    {
      question: "¿Qué ayuda a construir un buen argumento?",
      options: [
        "Evidencias y razonamiento",
        "Rumores",
        "Contradicciones",
        "Afirmaciones sin explicación",
      ],
      answer: "Evidencias y razonamiento",
    },
  ]),

  // =====================================================
  // 5° SECUNDARIA - INGLÉS
  // =====================================================

  "ing-5-1": createQuiz([
    {
      question: "¿Qué habilidad es importante para una comunicación avanzada?",
      options: [
        "Comprender y expresar ideas con claridad",
        "Memorizar palabras sin contexto",
        "No escuchar",
        "Evitar conversaciones",
      ],
      answer: "Comprender y expresar ideas con claridad",
    },
    {
      question: "¿Qué ayuda a mejorar la comunicación en inglés?",
      options: [
        "Practicar",
        "No leer",
        "No escuchar",
        "Evitar hablar",
      ],
      answer: "Practicar",
    },
    {
      question: "¿Qué significa 'communication'?",
      options: ["Comunicación", "Comunidad", "Computadora", "Composición"],
      answer: "Comunicación",
    },
  ]),

  "ing-5-2": createQuiz([
    {
      question: "¿Qué significa argumentar?",
      options: [
        "Presentar razones para defender una idea",
        "Copiar información",
        "Evitar explicar",
        "Cambiar de tema",
      ],
      answer: "Presentar razones para defender una idea",
    },
    {
      question: "¿Qué puede introducir una razón?",
      options: ["Because", "Yesterday", "Blue", "School"],
      answer: "Because",
    },
    {
      question: "¿Qué hace más fuerte una opinión?",
      options: [
        "Razones y evidencias",
        "Rumores",
        "Información falsa",
        "Ausencia de explicación",
      ],
      answer: "Razones y evidencias",
    },
  ]),

  "ing-5-3": createQuiz([
    {
      question: "¿Qué debemos hacer al analizar un texto?",
      options: [
        "Identificar y relacionar sus ideas",
        "Leer sin comprender",
        "Ignorar el contexto",
        "Observar solo las imágenes",
      ],
      answer: "Identificar y relacionar sus ideas",
    },
    {
      question: "¿Qué puede ayudarnos a inferir una idea?",
      options: ["El contexto", "Solo una palabra", "El color", "El tamaño"],
      answer: "El contexto",
    },
    {
      question: "¿Qué significa 'main idea'?",
      options: ["Idea principal", "Idea secundaria", "Título", "Conclusión"],
      answer: "Idea principal",
    },
  ]),

  "ing-5-4": createQuiz([
    {
      question: "¿Qué es importante en una presentación?",
      options: [
        "Organizar las ideas",
        "Hablar sin preparación",
        "Ignorar al público",
        "No practicar",
      ],
      answer: "Organizar las ideas",
    },
    {
      question: "¿Qué puede ayudar durante una presentación?",
      options: [
        "Hablar con claridad",
        "Leer todo sin comprender",
        "Evitar mirar al público",
        "No preparar el contenido",
      ],
      answer: "Hablar con claridad",
    },
    {
      question: "¿Qué debe incluir un proyecto final?",
      options: [
        "Un objetivo y contenido organizado",
        "Solo imágenes",
        "Solo una palabra",
        "Información sin relación",
      ],
      answer: "Un objetivo y contenido organizado",
    },
  ]),

  // =====================================================
  // 5° SECUNDARIA - ECONOMÍA
  // =====================================================

  "eco-5-1": createQuiz([
    {
      question: "¿Qué estudia la economía?",
      options: [
        "Cómo se utilizan recursos para satisfacer necesidades",
        "Solo los bancos",
        "Solo las monedas",
        "Solo las empresas",
      ],
      answer: "Cómo se utilizan recursos para satisfacer necesidades",
    },
    {
      question: "¿Qué es una necesidad?",
      options: [
        "Algo que las personas requieren para vivir o desarrollarse",
        "Un objeto de lujo siempre",
        "Una empresa",
        "Una moneda",
      ],
      answer: "Algo que las personas requieren para vivir o desarrollarse",
    },
    {
      question: "¿Qué recurso suele ser limitado?",
      options: ["El dinero", "Las necesidades", "El tiempo siempre infinito", "Nada"],
      answer: "El dinero",
    },
  ]),

  "eco-5-2": createQuiz([
    {
      question: "¿Qué es la oferta?",
      options: [
        "Cantidad de bienes o servicios que se ofrecen",
        "Cantidad de consumidores solamente",
        "El precio siempre",
        "El ahorro personal",
      ],
      answer: "Cantidad de bienes o servicios que se ofrecen",
    },
    {
      question: "¿Qué es la demanda?",
      options: [
        "Cantidad que los consumidores desean adquirir",
        "Cantidad de productos almacenados",
        "El costo de producción",
        "El salario",
      ],
      answer: "Cantidad que los consumidores desean adquirir",
    },
    {
      question: "¿Dónde interactúan oferta y demanda?",
      options: ["Mercado", "Escuela", "Hospital", "Biblioteca"],
      answer: "Mercado",
    },
  ]),

  "eco-5-3": createQuiz([
    {
      question: "¿Qué es ahorrar?",
      options: [
        "Guardar parte de los recursos para utilizarlos después",
        "Gastar todo inmediatamente",
        "Pedir dinero siempre",
        "Comprar sin planificar",
      ],
      answer: "Guardar parte de los recursos para utilizarlos después",
    },
    {
      question: "¿Qué ayuda a tomar buenas decisiones financieras?",
      options: [
        "Planificar los gastos",
        "Gastar sin pensar",
        "Ignorar los ingresos",
        "No hacer presupuestos",
      ],
      answer: "Planificar los gastos",
    },
    {
      question: "¿Qué es un presupuesto?",
      options: [
        "Un plan de ingresos y gastos",
        "Una cuenta bancaria",
        "Una moneda",
        "Un producto",
      ],
      answer: "Un plan de ingresos y gastos",
    },
  ]),

  "eco-5-4": createQuiz([
    {
      question: "¿Cómo influye la economía en la sociedad?",
      options: [
        "Influye en la producción, distribución y consumo",
        "No influye",
        "Solo afecta a los bancos",
        "Solo afecta a las empresas",
      ],
      answer: "Influye en la producción, distribución y consumo",
    },
    {
      question: "¿Qué es producir?",
      options: [
        "Crear bienes o servicios",
        "Solo comprar",
        "Solo ahorrar",
        "Solo consumir",
      ],
      answer: "Crear bienes o servicios",
    },
    {
      question: "¿Qué es consumir?",
      options: [
        "Utilizar bienes o servicios",
        "Producir siempre",
        "Ahorrar siempre",
        "Vender siempre",
      ],
      answer: "Utilizar bienes o servicios",
    },
  ]),
};