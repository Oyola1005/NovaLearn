const createLessons = (courseId, topics) =>
  topics.map((topic, index) => ({
    id: `${courseId}-${index + 1}`,
    title: topic.title,
    description: topic.description,
    duration: topic.duration,
    videoId: "REEMPLAZAR",
  }));

export const lessons = {
  // =====================================================
  // 1° SECUNDARIA
  // =====================================================

  "mat-1": createLessons("mat-1", [
    {
      title: "Números naturales",
      description: "Conoce los números naturales y sus características.",
      duration: "12 min",
    },
    {
      title: "Operaciones básicas",
      description: "Aprende a sumar, restar, multiplicar y dividir.",
      duration: "15 min",
    },
    {
      title: "Fracciones",
      description: "Comprende las fracciones y sus operaciones.",
      duration: "18 min",
    },
    {
      title: "Geometría básica",
      description: "Conoce las principales figuras geométricas.",
      duration: "16 min",
    },
  ]),

  "com-1": createLessons("com-1", [
    {
      title: "Comprensión lectora",
      description: "Aprende estrategias para comprender textos.",
      duration: "15 min",
    },
    {
      title: "Tipos de textos",
      description: "Conoce diferentes tipos de textos.",
      duration: "14 min",
    },
    {
      title: "Ideas principales",
      description: "Aprende a identificar las ideas principales.",
      duration: "12 min",
    },
    {
      title: "Producción de textos",
      description: "Aprende a organizar y producir textos.",
      duration: "18 min",
    },
  ]),

  "cie-1": createLessons("cie-1", [
    {
      title: "Los seres vivos",
      description: "Conoce las características de los seres vivos.",
      duration: "13 min",
    },
    {
      title: "El ecosistema",
      description: "Descubre cómo funciona un ecosistema.",
      duration: "16 min",
    },
    {
      title: "La materia",
      description: "Conoce las propiedades de la materia.",
      duration: "15 min",
    },
    {
      title: "La energía",
      description: "Aprende qué es la energía y sus formas.",
      duration: "17 min",
    },
  ]),

  "soc-1": createLessons("soc-1", [
    {
      title: "La sociedad",
      description: "Comprende cómo se organiza una sociedad.",
      duration: "12 min",
    },
    {
      title: "Historia y tiempo",
      description: "Aprende cómo estudiamos la historia.",
      duration: "15 min",
    },
    {
      title: "El territorio",
      description: "Conoce la relación entre sociedad y territorio.",
      duration: "14 min",
    },
    {
      title: "Culturas antiguas",
      description: "Conoce algunas de las primeras civilizaciones.",
      duration: "18 min",
    },
  ]),

  "ing-1": createLessons("ing-1", [
    {
      title: "Saludos y presentaciones en inglés",
      description:
        "Aprende expresiones básicas para saludar, presentarte y conocer a otras personas.",
      duration: "15 min",
    },
    {
      title: "Números, colores y objetos cotidianos",
      description:
        "Construye vocabulario básico relacionado con números, colores y objetos del entorno.",
      duration: "18 min",
    },
    {
      title: "Pronombres y verbo to be",
      description:
        "Comprende el uso de los pronombres personales y del verbo to be en oraciones sencillas.",
      duration: "20 min",
    },
    {
      title: "Construye tus primeras oraciones",
      description:
        "Practica cómo formar oraciones afirmativas y preguntas sencillas en inglés.",
      duration: "20 min",
    },
  ]),

  "amb-1": createLessons("amb-1", [
    {
      title: "¿Qué es el ambiente?",
      description:
        "Identifica los elementos naturales y sociales que forman parte del ambiente.",
      duration: "15 min",
    },
    {
      title: "Los recursos naturales",
      description:
        "Reconoce recursos naturales y comprende por qué debemos utilizarlos responsablemente.",
      duration: "18 min",
    },
    {
      title: "Contaminación y sus efectos",
      description:
        "Conoce diferentes formas de contaminación y sus consecuencias para los ecosistemas.",
      duration: "20 min",
    },
    {
      title: "Cuidemos nuestro entorno",
      description:
        "Analiza acciones cotidianas que ayudan a proteger el ambiente y reducir residuos.",
      duration: "18 min",
    },
  ]),

  // =====================================================
  // 2° SECUNDARIA
  // =====================================================

  "mat-2": createLessons("mat-2", [
    {
      title: "Álgebra básica",
      description: "Conoce expresiones y lenguaje algebraico.",
      duration: "16 min",
    },
    {
      title: "Ecuaciones",
      description: "Aprende a resolver ecuaciones sencillas.",
      duration: "18 min",
    },
    {
      title: "Proporciones",
      description: "Resuelve problemas de proporcionalidad.",
      duration: "15 min",
    },
    {
      title: "Geometría",
      description: "Trabaja con figuras y medidas geométricas.",
      duration: "17 min",
    },
  ]),

  "com-2": createLessons("com-2", [
    {
      title: "El texto narrativo",
      description: "Analiza las características de los textos narrativos.",
      duration: "15 min",
    },
    {
      title: "El texto descriptivo",
      description: "Aprende a reconocer textos descriptivos.",
      duration: "14 min",
    },
    {
      title: "Argumentación",
      description: "Conoce cómo construir argumentos.",
      duration: "18 min",
    },
    {
      title: "Literatura",
      description: "Explora diferentes formas literarias.",
      duration: "17 min",
    },
  ]),

  "cie-2": createLessons("cie-2", [
    {
      title: "La célula",
      description: "Conoce la unidad básica de los seres vivos.",
      duration: "16 min",
    },
    {
      title: "Sistemas del cuerpo",
      description: "Aprende sobre los principales sistemas del cuerpo.",
      duration: "18 min",
    },
    {
      title: "Ecosistemas",
      description: "Analiza las relaciones entre los seres vivos.",
      duration: "15 min",
    },
    {
      title: "Cambio climático",
      description: "Comprende las causas y efectos del cambio climático.",
      duration: "19 min",
    },
  ]),

  "soc-2": createLessons("soc-2", [
    {
      title: "Civilizaciones antiguas",
      description: "Estudia algunas grandes civilizaciones.",
      duration: "18 min",
    },
    {
      title: "Edad Media",
      description:
        "Conoce las principales características de la Edad Media.",
      duration: "17 min",
    },
    {
      title: "Sociedad y cultura",
      description: "Analiza la relación entre sociedad y cultura.",
      duration: "15 min",
    },
    {
      title: "Geografía",
      description: "Estudia territorio, población y recursos.",
      duration: "16 min",
    },
  ]),

  "ing-2": createLessons("ing-2", [
    {
      title: "Rutinas y actividades diarias",
      description:
        "Aprende vocabulario y estructuras para hablar sobre actividades de todos los días.",
      duration: "18 min",
    },
    {
      title: "Presente simple",
      description:
        "Comprende cómo utilizar el presente simple para describir hábitos y rutinas.",
      duration: "22 min",
    },
    {
      title: "Preguntas y respuestas en inglés",
      description:
        "Practica preguntas básicas utilizando estructuras comunes del idioma.",
      duration: "20 min",
    },
    {
      title: "Describe tu día",
      description:
        "Integra vocabulario y estructuras para escribir y expresar una rutina diaria.",
      duration: "22 min",
    },
  ]),

  "tec-2": createLessons("tec-2", [
    {
      title: "Tecnología y sociedad",
      description:
        "Analiza cómo la tecnología influye en la comunicación, educación y vida cotidiana.",
      duration: "18 min",
    },
    {
      title: "Información y datos",
      description:
        "Comprende qué son los datos y cómo pueden organizarse para obtener información.",
      duration: "20 min",
    },
    {
      title: "Pensamiento computacional",
      description:
        "Conoce estrategias como la descomposición, identificación de patrones y creación de algoritmos.",
      duration: "22 min",
    },
    {
      title: "Diseñamos una solución",
      description:
        "Aplica un proceso básico de diseño para plantear soluciones a problemas cotidianos.",
      duration: "25 min",
    },
  ]),

  // =====================================================
  // 3° SECUNDARIA
  // =====================================================

  "mat-3": createLessons("mat-3", [
    {
      title: "Expresiones algebraicas",
      description: "Trabaja con expresiones algebraicas.",
      duration: "18 min",
    },
    {
      title: "Ecuaciones",
      description: "Resuelve ecuaciones algebraicas.",
      duration: "20 min",
    },
    {
      title: "Funciones",
      description: "Introducción al concepto de función.",
      duration: "18 min",
    },
    {
      title: "Estadística",
      description: "Analiza datos mediante herramientas estadísticas.",
      duration: "16 min",
    },
  ]),

  "com-3": createLessons("com-3", [
    {
      title: "Análisis literario",
      description: "Aprende a analizar textos literarios.",
      duration: "18 min",
    },
    {
      title: "Argumentación",
      description: "Construye argumentos sólidos.",
      duration: "17 min",
    },
    {
      title: "Comunicación oral",
      description: "Desarrolla habilidades de comunicación oral.",
      duration: "15 min",
    },
    {
      title: "Producción escrita",
      description: "Mejora tu escritura y organización de ideas.",
      duration: "18 min",
    },
  ]),

  "fis-3": createLessons("fis-3", [
    {
      title: "Movimiento",
      description: "Introducción al movimiento de los cuerpos.",
      duration: "18 min",
    },
    {
      title: "Velocidad",
      description: "Comprende el concepto de velocidad.",
      duration: "15 min",
    },
    {
      title: "Fuerzas",
      description: "Conoce las fuerzas y sus efectos.",
      duration: "19 min",
    },
    {
      title: "Energía",
      description: "Aprende sobre diferentes formas de energía.",
      duration: "17 min",
    },
  ]),

  "his-3": createLessons("his-3", [
    {
      title: "Civilizaciones antiguas",
      description: "Conoce las primeras grandes civilizaciones.",
      duration: "18 min",
    },
    {
      title: "Edad Moderna",
      description:
        "Estudia los principales cambios de la Edad Moderna.",
      duration: "19 min",
    },
    {
      title: "Revoluciones",
      description: "Analiza algunas revoluciones importantes.",
      duration: "18 min",
    },
    {
      title: "Mundo contemporáneo",
      description: "Introducción al mundo contemporáneo.",
      duration: "16 min",
    },
  ]),

  "ing-3": createLessons("ing-3", [
    {
      title: "Pasado simple",
      description:
        "Aprende a utilizar el pasado simple para hablar de acontecimientos anteriores.",
      duration: "22 min",
    },
    {
      title: "Experiencias y acontecimientos",
      description:
        "Practica vocabulario y estructuras para describir experiencias y hechos pasados.",
      duration: "22 min",
    },
    {
      title: "Lectura de textos breves",
      description:
        "Desarrolla estrategias para identificar información principal y detalles en textos sencillos.",
      duration: "25 min",
    },
    {
      title: "Escribe una experiencia",
      description:
        "Organiza ideas y escribe un texto breve utilizando estructuras del pasado.",
      duration: "25 min",
    },
  ]),

  "bio-3": createLessons("bio-3", [
    {
      title: "La célula: unidad de vida",
      description:
        "Comprende por qué la célula es considerada la unidad básica de los seres vivos.",
      duration: "20 min",
    },
    {
      title: "Células animales y vegetales",
      description:
        "Compara las principales estructuras de las células animales y vegetales.",
      duration: "22 min",
    },
    {
      title: "Tejidos y organización",
      description:
        "Explica cómo las células se organizan formando tejidos y estructuras más complejas.",
      duration: "22 min",
    },
    {
      title: "Nutrición y funciones vitales",
      description:
        "Relaciona la nutrición con el funcionamiento y mantenimiento de los seres vivos.",
      duration: "25 min",
    },
  ]),

  // =====================================================
  // 4° SECUNDARIA
  // =====================================================

  "mat-4": createLessons("mat-4", [
    {
      title: "Funciones",
      description: "Profundiza en el estudio de funciones.",
      duration: "20 min",
    },
    {
      title: "Trigonometría",
      description: "Introducción a las razones trigonométricas.",
      duration: "20 min",
    },
    {
      title: "Geometría",
      description: "Resuelve problemas geométricos.",
      duration: "18 min",
    },
    {
      title: "Estadística",
      description: "Analiza datos y medidas estadísticas.",
      duration: "17 min",
    },
  ]),

  "com-4": createLessons("com-4", [
    {
      title: "Literatura",
      description: "Analiza obras y recursos literarios.",
      duration: "18 min",
    },
    {
      title: "Argumentación",
      description: "Construye textos argumentativos.",
      duration: "20 min",
    },
    {
      title: "Análisis de textos",
      description: "Analiza diferentes tipos de textos.",
      duration: "18 min",
    },
    {
      title: "Comunicación efectiva",
      description: "Mejora tus habilidades comunicativas.",
      duration: "15 min",
    },
  ]),

  "fis-4": createLessons("fis-4", [
    {
      title: "Cinemática",
      description: "Estudia el movimiento de los cuerpos.",
      duration: "20 min",
    },
    {
      title: "Dinámica",
      description: "Comprende las leyes del movimiento.",
      duration: "21 min",
    },
    {
      title: "Trabajo y energía",
      description: "Estudia trabajo, potencia y energía.",
      duration: "20 min",
    },
    {
      title: "Electricidad",
      description: "Introducción a los fenómenos eléctricos.",
      duration: "19 min",
    },
  ]),

  "qui-4": createLessons("qui-4", [
    {
      title: "La materia",
      description: "Conoce las propiedades de la materia.",
      duration: "17 min",
    },
    {
      title: "Átomos",
      description: "Estudia la estructura del átomo.",
      duration: "19 min",
    },
    {
      title: "Tabla periódica",
      description: "Aprende a interpretar la tabla periódica.",
      duration: "20 min",
    },
    {
      title: "Enlaces químicos",
      description: "Conoce los principales tipos de enlaces.",
      duration: "21 min",
    },
  ]),

  "ing-4": createLessons("ing-4", [
    {
      title: "Present perfect",
      description:
        "Comprende el uso del present perfect para hablar de experiencias y situaciones relacionadas con el presente.",
      duration: "25 min",
    },
    {
      title: "Comparar ideas y situaciones",
      description:
        "Practica estructuras para comparar personas, objetos, situaciones e ideas.",
      duration: "22 min",
    },
    {
      title: "Comprensión de textos",
      description:
        "Desarrolla estrategias para interpretar textos informativos en inglés.",
      duration: "25 min",
    },
    {
      title: "Expresar opiniones",
      description:
        "Aprende estructuras para expresar opiniones, argumentos y puntos de vista.",
      duration: "25 min",
    },
  ]),

  "fil-4": createLessons("fil-4", [
    {
      title: "¿Qué es la filosofía?",
      description:
        "Explora qué estudia la filosofía y cómo se relaciona con las preguntas sobre el conocimiento y la realidad.",
      duration: "20 min",
    },
    {
      title: "Pensamiento crítico",
      description:
        "Aprende a analizar afirmaciones, distinguir argumentos y formular preguntas relevantes.",
      duration: "25 min",
    },
    {
      title: "Ética y decisiones",
      description:
        "Reflexiona sobre cómo podemos analizar decisiones desde diferentes perspectivas éticas.",
      duration: "25 min",
    },
    {
      title: "Construir un argumento",
      description:
        "Aprende a formular una posición y respaldarla mediante razones y evidencias.",
      duration: "25 min",
    },
  ]),

  // =====================================================
  // 5° SECUNDARIA
  // =====================================================

  "mat-5": createLessons("mat-5", [
    {
      title: "Funciones avanzadas",
      description: "Profundiza en funciones matemáticas.",
      duration: "22 min",
    },
    {
      title: "Probabilidad",
      description: "Aprende conceptos básicos de probabilidad.",
      duration: "20 min",
    },
    {
      title: "Geometría analítica",
      description: "Trabaja con coordenadas y ecuaciones.",
      duration: "22 min",
    },
    {
      title: "Preparación matemática",
      description: "Repasa conceptos fundamentales.",
      duration: "25 min",
    },
  ]),

  "com-5": createLessons("com-5", [
    {
      title: "Análisis crítico",
      description: "Desarrolla pensamiento crítico frente a textos.",
      duration: "20 min",
    },
    {
      title: "Literatura peruana",
      description: "Conoce autores y obras representativas.",
      duration: "22 min",
    },
    {
      title: "Ensayo",
      description: "Aprende a elaborar un ensayo.",
      duration: "20 min",
    },
    {
      title: "Comunicación académica",
      description:
        "Desarrolla habilidades de comunicación académica.",
      duration: "18 min",
    },
  ]),

  "fis-5": createLessons("fis-5", [
    {
      title: "Movimiento avanzado",
      description: "Profundiza en el estudio del movimiento.",
      duration: "22 min",
    },
    {
      title: "Electricidad",
      description: "Estudia circuitos y fenómenos eléctricos.",
      duration: "21 min",
    },
    {
      title: "Ondas",
      description: "Conoce las propiedades de las ondas.",
      duration: "20 min",
    },
    {
      title: "Física moderna",
      description: "Introducción a conceptos de física moderna.",
      duration: "23 min",
    },
  ]),

  "qui-5": createLessons("qui-5", [
    {
      title: "Reacciones químicas",
      description:
        "Comprende cómo ocurren las reacciones químicas.",
      duration: "21 min",
    },
    {
      title: "Estequiometría",
      description: "Aprende a realizar cálculos químicos.",
      duration: "23 min",
    },
    {
      title: "Química orgánica",
      description: "Introducción a los compuestos orgánicos.",
      duration: "22 min",
    },
    {
      title: "Química en la vida cotidiana",
      description: "Descubre aplicaciones de la química.",
      duration: "18 min",
    },
  ]),

  "ing-5": createLessons("ing-5", [
    {
      title: "Comunicación avanzada",
      description:
        "Integra vocabulario y estructuras para expresar ideas con mayor precisión.",
      duration: "25 min",
    },
    {
      title: "Argumentar en inglés",
      description:
        "Practica cómo presentar opiniones y sostenerlas mediante razones.",
      duration: "25 min",
    },
    {
      title: "Análisis de textos",
      description:
        "Identifica ideas principales, argumentos y conclusiones en textos de mayor complejidad.",
      duration: "28 min",
    },
    {
      title: "Presentación y proyecto final",
      description:
        "Integra las habilidades aprendidas mediante la preparación de una presentación breve.",
      duration: "30 min",
    },
  ]),

  "eco-5": createLessons("eco-5", [
    {
      title: "¿Qué estudia la economía?",
      description:
        "Comprende qué estudia la economía y por qué los recursos y necesidades influyen en nuestras decisiones.",
      duration: "20 min",
    },
    {
      title: "Oferta, demanda y mercado",
      description:
        "Conoce los conceptos básicos de oferta y demanda y su relación con los mercados.",
      duration: "25 min",
    },
    {
      title: "Ahorro y decisiones financieras",
      description:
        "Analiza la importancia de planificar recursos, diferenciar necesidades y tomar decisiones responsables.",
      duration: "25 min",
    },
    {
      title: "Economía y sociedad",
      description:
        "Relaciona las decisiones económicas con el empleo, los recursos y el bienestar de la sociedad.",
      duration: "28 min",
    },
  ]),
};