import { useState } from 'react';
import questions from '../../../data/reactQ/generalBQuestions'
import CategoriesSection from '../../CategoriesSection';
import WrongAnswer from '../../WrongAnswer';
import Retry from '../../Retry';
import CategoryFinished from '../../CategoryFinished';


const CategoryReactGeneralTwo = ({ onChange, score, categorySelected, setCategorySelected }) => {

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
      setCategoryFinished(true)
    }
  }

  const handleClickRetryButton = () => {
    setGameFinished(true)
    setRetry(true)
    setCurrentQuestion(0)
  }

  console.log('gameFinished:', gameFinished);
  console.log('wrongAnswer:', wrongAnswer);
  console.log('categoryFinished:', categoryFinished);
  console.log('retry:', retry);
  console.log('------------------------------------------------');


  return (
    <>
      { gameFinished === false && retry === false && wrongAnswer === false && categoryFinished === false ?
        (
          <>
            <div className="questions-head">
              <h3>Category: <span>{categorySelected.toUpperCase()}</span></h3>
              <div className="question-count">Question number: <span>{currentQuestion + 1}</span> of  {questions.length}</div>
            </div>
            <div className="question-text"> <span>{currentQuestion + 1}.</span> {questions[currentQuestion].questionText}</div>
            <div className="answer-options">
              {questions[currentQuestion].answersOptions.map( (answerOption, index) => (
                <div className="answers-btn" key={index}>
                  <button onClick={() => {handleAnswerClick(answerOption.isCorrect)}}>{answerOption.answerText}</button>
                </div>
              ))}
            </div>
            <div className="retry-btn">
              <button onClick={() => handleClickRetryButton()}>Walk away</button>
            </div> 
          </>
        ) : (
          null
          
        )
      }
      { wrongAnswer === true ? <WrongAnswer score={score} /> : null }
      { retry === true && gameFinished === true
        ? <Retry 
            score={score}
          />
        : null
      }
      { categoryFinished === true && gameFinished === false
        ? <CategoryFinished // respuestas correctas
            score={score}
            setGameFinished={setGameFinished} 
            setCategoryFinished={setCategoryFinished}
            setCategorySelected={setCategorySelected}
          />
        : null
      }
      { categoryFinished === true && gameFinished === true
        ? <CategoriesSection />
        : null
      } 
    </>
  );
}


export default CategoryReactGeneralTwo;