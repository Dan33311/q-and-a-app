import { useState } from "react"
import generalAQuestions from "../data/reactQ/generalAQuestions"
import companyQuestions from "../data/reactQ/companyInfoQuestions"
import componentQuestions from "../data/reactQ/componentQuestions"
import domQuestions from "../data/reactQ/domQuestions"
import lifecycleAndRenderQuestions from "../data/reactQ/lifecycleAndRenderQuestions"
import propsAndDataQuestions from "../data/reactQ/propsAndDataQuestions"
import stateQuestions from "../data/reactQ/stateQuestions"

import CategoriesSection from "./CategoriesSection"
import WrongAnswer from "./WrongAnswer"
import Retry from "./Retry"
import CategoryFinished from "./CategoryFinished"
import winAudio from "../assets/final-level-bonus-2061.wav"
import loseAudio from "../assets/player-losing-or-failing-2042.wav"
import retryAudio from "../assets/retry-game-2016.wav"

const CategorySelected = ({ onChange, score, categorySelected, setCategorySelected }) => {

  let questions = ''
  // TODO: Get the data with a dynamic name, MY DATA IS AN ARRAY OF OBJECTS -> I WANT TO CONVERT STRING TO ARRAY OF OBJECTS
  // const questionsDynamic = JSON.parse(`${categorySelected}AQuestions`)
  
  // console.log(typeof questionsDynamic)
  // console.log("questionsDynamic :", questionsDynamic)
  if (categorySelected === 'general') {
    questions = generalAQuestions
  }
  if (categorySelected === 'Company') {
    questions = companyQuestions
  }
  if (categorySelected === 'Component') {
    questions = componentQuestions
  }
  if (categorySelected === 'DOM') {
    questions = domQuestions
  }
  if (categorySelected === 'Lifecycle and Render') {
    questions = lifecycleAndRenderQuestions
  }
  if (categorySelected === 'Props and Data') {
    questions = propsAndDataQuestions
  }
  if (categorySelected === 'State') {
    questions = stateQuestions
  }

  console.log("categorySelected :", categorySelected)
  console.log("questions :", questions)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [gameFinished, setGameFinished] = useState(false)
  const [wrongAnswer, setWrongAnswer] = useState(false)
  const [categoryFinished, setCategoryFinished] = useState(false)
  const [retry, setRetry] = useState(false)


  const handleAnswerClick = (isCorrect) => {
    if(isCorrect === true) {
      onChange() // if correct answer -> increase the score
      const winSound = new Audio(winAudio)
      winSound.volume = 0.5
      winSound.play()
      // setTimeout(winSound.play(), 2000)
    } else {
      setWrongAnswer(true)
      new Audio(loseAudio).play()
    }
    setTimeout(() => {
      if(currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setCategoryFinished(true)
      }
    }, 2000)
  }

  const handleClickRetryButton = () => {
    const retrySound = new Audio(retryAudio)
    retrySound.volume = 0.3
    retrySound.play()
    setGameFinished(true)
    setRetry(true)
    setCurrentQuestion(0)
  }

  // console.log('gameFinished:', gameFinished)
  // console.log('wrongAnswer:', wrongAnswer)
  // console.log('categoryFinished:', categoryFinished)
  // console.log('retry:', retry)
  // console.log('------------------------------------------------')


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
  )
}

export default CategorySelected