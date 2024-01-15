import "./App.css"
import { useState } from "react"
import Score from "./components/Score"
import GameFinished from "./components/GameFinished"
import CategoriesSection from "./components/CategoriesSection"
import CategorySelectedComponent from "./components/CategorySelected"
import Details from "./components/AppDetails"
// import { useProgressiveNumber } from './hooks/useIncreaseNumber';
// import Navbar from './components/Navbar';


function App() {

  const [categories, setCategories] = useState([ 
    'general',
    // 'General 2',
    'Company',
    'Component',
    'DOM',
    'Lifecycle and Render',
    'Props and Data',
    'State',
  ])

  const [categorySelected, setCategorySelected] = useState('')
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [endNumber, setEndNumber] = useState(301)

  
  let i = score
  const handleChangeScore = () => {
    setScore(score + 300)
    if (i < endNumber) {
      setScore(i)
      setTimeout(() => {
        handleChangeScore()
        i++
      }, 5)
    }
    setEndNumber(endNumber + 300)
  }

  // const handleChangeScore2 = () => {
    // TODO: test the new hook and component
  // }

  const handleClickButton = (category, index) => {
    setCategorySelected((prev) => category)
    let newCategory = categories
    // TODO: Try using filter()
    newCategory.splice(index, 1)
    setCategories((prev) => newCategory)
  }


  return (
    <div className="App">
      <>
        <h2>QuizApp</h2>
        {/* <Navbar /> */}

        {!isPlaying &&
          <Details setIsPlaying={setIsPlaying} />
        }
        {isPlaying && categorySelected === ''
          ? <>
              {categories.length === 0 
                ? 
                  <>
                    <GameFinished score={score} />
                  </>
                :
                  <>
                    <Score score={score} />
                    <CategoriesSection 
                      categories={categories}
                      handleClickButton={handleClickButton}
                    />
                  </>
              }
            </>
          : null
        }

        {categorySelected === 'general' && 
          <>
            <Score score={score} />
            <CategorySelectedComponent
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
        }
        {categorySelected === 'General 2' && 
          <>
            <Score score={score} />
          </>
        }
        {categorySelected === 'Company' && 
          <>
            <Score score={score} />
            <CategorySelectedComponent
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
        }
        {categorySelected === 'Component' && 
          <>
            <Score score={score} />
            <CategorySelectedComponent
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
        }
        {categorySelected === 'DOM' && 
          <>
            <Score score={score} />
            <CategorySelectedComponent
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
        }
        {categorySelected === 'Lifecycle and Render' && 
          <>
            <Score score={score} />
            <CategorySelectedComponent
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
        }
        {categorySelected === 'Props and Data' && 
          <>
            <Score score={score} />
            <CategorySelectedComponent
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
        }
        {categorySelected === 'State' && 
          <>
            <Score score={score} />
            <CategorySelectedComponent
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
        }
      </>
    </div>
  )
}

export default App
