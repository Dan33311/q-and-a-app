const questionsJavascript = [
  {
    questionId: 1,
    questionText : '¿En qué lugar se ejecuta generalmente el código JavaScript?',
    answersOptions: [
      { answerText: 'Servidor', isCorrect: false },
      { answerText: 'Cliente (en el propio navegador de internet)', isCorrect: true },
      { answerText: 'Base de datos', isCorrect: false },
      { answerText: 'windows', isCorrect: false },
    ]
  },
  {
    questionId: 2,
    questionText : '¿Cuáles de estas son marcas para la inserción del código JavaScript en las páginas HTML?',
    answersOptions: [
      { answerText: '< javascript _code > y < /javascript_code >', isCorrect: false },
      { answerText: '< script > y < /script >', isCorrect: true },
      { answerText: 'Ninguna', isCorrect: false },
      { answerText: '< ?script > y < script? >', isCorrect: false },
    ]
  },
  {
    questionId: 3,
    questionText : 'La llamada al código Javascript debe colocarse en:',
    answersOptions: [
      { answerText: 'La sección Body de la página', isCorrect: false },
      { answerText: 'Antes de la etiqueta HTML', isCorrect: false },
      { answerText: 'Puede colocarse en la sección Head o en Body', isCorrect: true },
      { answerText: 'En la sección <footer>', isCorrect: false },
    ]
  },
  {
    questionId: 4,
    questionText : '¿Cuál es la instrucción usada para devolver un valor en una función de JavaScript?',
    answersOptions: [
      { answerText: 'Send', isCorrect: false },
      { answerText: 'Return', isCorrect: true },
      { answerText: 'Value', isCorrect: false },
      { answerText: 'then', isCorrect: false },
    ]
  },
  {
    questionId: 5,
    questionText : 'Para concatenar cadenas de caracteres en Javascript se usa el carácter:',
    answersOptions: [
      { answerText: '& (ampersand)', isCorrect: false },
      { answerText: '+ (más)', isCorrect: true },
      { answerText: '. (punto)', isCorrect: false },
      { answerText: '* (por)', isCorrect: false },
    ]
  },
]

export default questionsJavascript;
