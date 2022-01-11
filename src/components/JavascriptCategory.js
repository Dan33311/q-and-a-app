import { useState } from "react";
import questions from "../data/questionsJavascript";

const JavascriptCategory = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);
  
  const [gameFinished, setGameFinished] = useState(false);

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
  
  const handleRetryClick = () => {
    setGameFinished(true)
    alert(`game finished you earned ${score} BTC`);
    setCurrentQuestion(0)
  }

  const tryAgain = () => {
    setGameFinished(false);
    setScore(0);
  }


  return (
    <>
      { gameFinished === false ?
        (
          <>
            <div className="questions-head">
              <div className="question-count">Pregunta numero: <span>{currentQuestion + 1}</span> de {questions.length}</div>
              <div className="score-count">Has ganado: 💳<span>{score}</span> BTC</div>
            </div>
            <div className="question-text"> <span>{currentQuestion + 1}.</span> {questions[currentQuestion].questionText}</div>
            <div className="answer-options" >
              {questions[currentQuestion].answersOptions.map( (answerOption, index) => (
                <div className="answers-btn" key={index}>
                  <button onClick={() => {handleAnswerClick(answerOption.isCorrect)}}>{answerOption.answerText}</button>
                </div>
              ))}
            </div>
            <div className="retry-btn">
              <button onClick={() => handleRetryClick()}>Retirarse</button>
              {/* <button onClick={() => <h4>game finshed you earned {score} BTC</h4>}>Retirarseee</button> */}
            </div> 
          </>
        ) : (
          <div>
            <h4>game finshed you earned {score} BTC</h4>
            <button onClick={() => tryAgain()}>Jugar de nuevo</button>
          </div>
        ) 
      }
      
    </>
  );
}

export default JavascriptCategory;