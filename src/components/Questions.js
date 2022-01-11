import { useState } from "react";


const Questions = () => {

  const questions = [
    {
      questionId: 1,
      questionText : '¿Qué significa CSS?',
      answersOptions: [
        { answerText: 'Color Style Sheets', isCorrect: false },
        { answerText: 'Coded Style Sheets', isCorrect: false },
        { answerText: 'Cascading Style Sheets', isCorrect: true },
        { answerText: 'Cross-browser Style Sheets', isCorrect: false },
      ]
    },
    {
      questionId: 2,
      questionText : '¿Cómo podemos añadir un comentario en una hoja de estilo CSS?',
      answersOptions: [
        { answerText: '/* esto es un comentario CSS */', isCorrect: true },
        { answerText: '<!-- Esto es un comentario CSS -->', isCorrect: false },
        { answerText: 'No se puede', isCorrect: false },
        { answerText: '// Este es un comentario CSS', isCorrect: false },
      ]
    },
    {
      questionId: 3,
      questionText : '¿En qué sección de la página HTML podemos definir una hoja de estilo interna CSS?',
      answersOptions: [
        { answerText: 'En la sección <head>', isCorrect: true },
        { answerText: 'Se puede definir en cualquier sección de la página', isCorrect: false },
        { answerText: 'En al sección <body>', isCorrect: false },
        { answerText: 'En la sección <footer>', isCorrect: false },
      ]
    },
    {
      questionId: 4,
      questionText : '¿Para que se utiliza la regla @keyframes?',
      answersOptions: [
        { answerText: 'Transición', isCorrect: false },
        { answerText: 'Rotación', isCorrect: false },
        { answerText: 'Animación', isCorrect: true },
        { answerText: 'Importar fuentes', isCorrect: false },
      ]
    },
    {
      questionId: 5,
      questionText : '¿Cual es la respuesta correcta para generar un efecto de transición?',
      answersOptions: [
        { answerText: 'transition: height .8s;', isCorrect: true },
        { answerText: 'transition-height: .8s;', isCorrect: false },
        { answerText: 'transform: transition(height, .8s);', isCorrect: false },
        { answerText: 'transition-s: 8;', isCorrect: false },
      ]
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);
  
  const handleAnswerClick = (isCorrect) => {
    if(isCorrect === true) {
      setScore(score + 0.00002);
    }
    if(currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert('next category');
    }
  }

  return (
    <>
      <div className="questions-head">
        <div className="question-count">Pregunta numero: <span>{currentQuestion + 1}</span> de {questions.length}</div>
        <div className="score-count">Has ganado: 💳<span>{score}</span> BTC</div>
      </div>
      <div className="question-text"> <span>{currentQuestion + 1}.</span> {questions[currentQuestion].questionText}</div>
      <div className="answer-options" >
        {questions[currentQuestion].answersOptions.map( answerOption => (
          <div className="answers-btn">
            <button onClick={() => {handleAnswerClick(answerOption.isCorrect)}}>{answerOption.answerText}</button>
          </div>
        ))}
      </div>
      <div className="retry-btn">
        <button onClick={() => alert(`game finshed you earned ${score} BTC`)}>Retirarse</button>
      </div>
    </>
  );
}

export default Questions;

