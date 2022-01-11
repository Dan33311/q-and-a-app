const questionsJavascript = [
  {
    category: 'css',
    questionId: 1,
    questionText : '¿Javascript question text 1?',
    answersOptions: [
      { answerText: 'Color Style Sheets', isCorrect: false },
      { answerText: 'Coded Style Sheets', isCorrect: false },
      { answerText: 'Cascading Style Sheets', isCorrect: true },
      { answerText: 'Cross-browser Style Sheets', isCorrect: false },
    ]
  },
  {
    category: 'css',
    questionId: 2,
    questionText : '¿Javascript question text 2?',
    answersOptions: [
      { answerText: '/* esto es un comentario CSS */', isCorrect: true },
      { answerText: '<!-- Esto es un comentario CSS -->', isCorrect: false },
      { answerText: 'No se puede', isCorrect: false },
      { answerText: '// Este es un comentario CSS', isCorrect: false },
    ]
  },
  {
    category: 'css',
    questionId: 3,
    questionText : '¿Javascript question text 3?',
    answersOptions: [
      { answerText: 'En la sección <head>', isCorrect: true },
      { answerText: 'Se puede definir en cualquier sección de la página', isCorrect: false },
      { answerText: 'En al sección <body>', isCorrect: false },
      { answerText: 'En la sección <footer>', isCorrect: false },
    ]
  },
  {
    category: 'css',
    questionId: 4,
    questionText : '¿Javascript question text 4?',
    answersOptions: [
      { answerText: 'Transición', isCorrect: false },
      { answerText: 'Rotación', isCorrect: false },
      { answerText: 'Animación', isCorrect: true },
      { answerText: 'Importar fuentes', isCorrect: false },
    ]
  },
  {
    category: 'css',
    questionId: 5,
    questionText : '¿Javascript question text 5?',
    answersOptions: [
      { answerText: 'transition: height .8s;', isCorrect: true },
      { answerText: 'transition-height: .8s;', isCorrect: false },
      { answerText: 'transform: transition(height, .8s);', isCorrect: false },
      { answerText: 'transition-s: 8;', isCorrect: false },
    ]
  },
]

export default questionsJavascript;
