const Questions = () => {

  const questions = [
    {
      id: 1,
      questionText : '¿Qué significa CSS?',
      answersOptions: [
        { answerText: 'Color Style Sheets', isCorrect: false },
        { answerText: 'Coded Style Sheets', isCorrect: false },
        { answerText: 'Cascading Style Sheets', isCorrect: true },
        { answerText: 'Cross-browser Style Sheets', isCorrect: false },
      ]
    },
    {
      id: 2,
      questionText : '¿Cómo podemos añadir un comentario en una hoja de estilo CSS?',
      answersOptions: [
        { answerText: '/* esto es un comentario CSS */', isCorrect: true },
        { answerText: '<!-- Esto es un comentario CSS -->', isCorrect: false },
        { answerText: 'No se puede', isCorrect: false },
        { answerText: '// Este es un comentario CSS', isCorrect: false },
      ]
    },
    {
      id: 3,
      questionText : '¿En qué sección de la página HTML podemos definir una hoja de estilo interna CSS?',
      answersOptions: [
        { answerText: 'En la sección <head>', isCorrect: true },
        { answerText: 'Se puede definir en cualquier sección de la página', isCorrect: false },
        { answerText: 'En al sección <body>', isCorrect: false },
        { answerText: 'En la sección <footer>', isCorrect: false },
      ]
    },
    {
      id: 4,
      questionText : '¿Para que se utiliza la regla @keyframes?',
      answersOptions: [
        { answerText: 'Transición', isCorrect: false },
        { answerText: 'Rotación', isCorrect: false },
        { answerText: 'Animación', isCorrect: true },
        { answerText: 'Importar fuentes', isCorrect: false },
      ]
    },
    {
      id: 5,
      questionText : '¿Cual es la respuesta correcta para generar un efecto de transición?',
      answersOptions: [
        { answerText: 'transition: height .8s;', isCorrect: true },
        { answerText: 'transition-height: .8s;', isCorrect: false },
        { answerText: 'transform: transition(height, .8s);', isCorrect: false },
        { answerText: 'transition-s: 8;', isCorrect: false },
      ]
    },
  ]


  return (
    <>
      <div className="questions-head">
        <div className="question-count">Question number: _ of {questions.length}</div>
        <div className="question-text">{questions[0].questionText}</div>
      </div>
      <div className="answer-options" >
        {questions[0].answersOptions.map( answerOption => (
          <div className="answers-btn">
            <button>{answerOption.answerText}</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Questions;

