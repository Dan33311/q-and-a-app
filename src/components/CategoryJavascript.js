import { useState } from 'react';
import questions from "../data/questionsJavascript";


const CategoryJavascript = ({ onChange }) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [gameFinished, setGameFinished] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if(isCorrect === true) {
      onChange();
    } else {
      alert('wrong answer');
      setGameFinished(true)
    }
    if(currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert('next category');
      setGameFinished(true)
    }
  }

  const handleRetryClick = () => {
    setGameFinished(true)
    alert(`game finished you earned xxx BTC`);
    setCurrentQuestion(0)
  }


  return (
    
    <>
      { gameFinished === false ?
        (
          <>
            <div className="questions-head">
              <div className="question-count">Pregunta numero: <span>{currentQuestion + 1}</span> de {questions.length}</div>
            </div>
            <div className="question-text"> <span>{currentQuestion + 1}.</span> {questions[currentQuestion].questionText}</div>
            <div className="answer-options" >
              <p>** Solo se puede selecionar la respuesta que creas correcta una vez.</p>
              {questions[currentQuestion].answersOptions.map( (answerOption, index) => (
                <div className="answers-btn" key={index}>
                  <button onClick={() => {handleAnswerClick(answerOption.isCorrect)}}>{answerOption.answerText}</button>
                </div>
              ))}
            </div>
            <div className="retry-btn">
              <button onClick={() => handleRetryClick()}>Retirarse</button>
            </div> 
          </>
        ) : (
          // TODO: implement a category over component
          // <div>
          //   <h4>game finshed you earned {score} BTC</h4>
          //   <button onClick={() => handleClickToCategories()}>Categorias</button>
          // </div>
          null
        ) 
      }
      
    </>
  );
}

export default CategoryJavascript;