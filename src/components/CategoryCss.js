import { useState } from 'react';
import questions from '../data/questionsCSS'
import WrongAnswer from '../components/WrongAnswer';
import CategoryFinished from './CategoryFinished';
import Retry from './Retry';


const CategoryCss = ({ onChange, score, categorySelected }) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [categoryFinished, setCategoryFinished] = useState(false)
  const [retry, setRetry] = useState(false)


  const handleAnswerClick = (isCorrect) => {
    if(isCorrect === true) {
      onChange(); // if correct answer -> increase the score
    } else {
      setWrongAnswer(true)
    }
    if(currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameFinished(true)
    }
  }

  const handleClickRetryButton = () => {
    setCategoryFinished(true)
    setRetry(true)
    setCurrentQuestion(0)
  }

  console.log('gameFinished:', gameFinished);
  console.log('wrongAnswer:', wrongAnswer);
  console.log('categoryFinished:', categoryFinished);
  console.log('retry:', retry);
  console.log('------------------------------------------------');

  // TODO: No borrar aun
  // ⬇ ya tengo esta funcion en el componente Retry
  // const handleClickTryAgainButton = () => {
  //   setRetry(false)
  //   setCategoryFinished(true);
  //   console.log('setCategoryFinished:', categoryFinished);
  // }

  // const newF = () => {
  //   setGameFinished(true);
  // }


  return (
    <>
      { gameFinished === false && retry === false && wrongAnswer === false ?
        (
          <>
            <div className="questions-head">
              <h3>Categoria <span>{categorySelected}</span></h3>
              <div className="question-count">Pregunta numero: <span>{currentQuestion + 1}</span> de {questions.length}</div>
            </div>
            <div className="question-text"> <span>{currentQuestion + 1}.</span> {questions[currentQuestion].questionText}</div>
            <div className="answer-options">
              <p>** Solo se puede selecionar la respuesta que creas correcta una vez.</p>
              {questions[currentQuestion].answersOptions.map( (answerOption, index) => (
                <div className="answers-btn" key={index}>
                  <button onClick={() => {handleAnswerClick(answerOption.isCorrect)}}>{answerOption.answerText}</button>
                </div>
              ))}
            </div>
            <div className="retry-btn">
              <button onClick={() => handleClickRetryButton()}>Retirarse</button>
            </div> 
          </>
        ) : (
          null
          
        )
      }
      { wrongAnswer === true ? <WrongAnswer score={score} /> : null }
      { retry === true && categoryFinished === true
        ? <Retry 
            score={score}
            // // TODO: No borrar aun ⬇ ya tengo esta funcion en el componente Retry 
            // handleClickTryAgainButton={handleClickTryAgainButton}
          />
        : null
      }
      { gameFinished === true 
        ? <CategoryFinished // respuestas correctas
            score={score}
            categoryFinished={categoryFinished} 
            setCategoryFinished={setCategoryFinished}
          />
        : null
      }
    </>
  );
}



export default CategoryCss;