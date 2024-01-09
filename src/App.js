import './App.css';
import { useState } from "react";
import Score from "./components/Score";
import GameFinished from "./components/GameFinished"
import CategoriesSection from './components/CategoriesSection';
import CategoryReactGeneralOne from './components/categories/reactQ/CategoryReactGeneralOne'
import CategoryReactGeneralTwo from './components/categories/reactQ/CategoryReactGeneralTwo'
import CategoryCompanyInfo from './components/categories/reactQ/CategoryCompanyInfo'
import CategoryComponent from './components/categories/reactQ/CategoryComponent'
import CategoryDOM from './components/categories/reactQ/CategoryDOM'
import CategoryLifecycleAndRender from './components/categories/reactQ/CategoryLifecycleAndRender'
import CategoryPropsAndData from './components/categories/reactQ/CategoryPropsAndData'
import CategoryState from './components/categories/reactQ/CategoryState'
import Details from './components/AppDetails';
// import Navbar from './components/Navbar';



function App() {

  const [categories, setCategories] = useState([ 
    'General',
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
      }, 0)
    }
    setEndNumber(endNumber + 300)
  }

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

        {categorySelected === 'General' && 
          <>
            <Score score={score} />
            <CategoryReactGeneralOne
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
            <CategoryReactGeneralTwo
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
        }
        {categorySelected === 'Company' && 
          <>
            <Score score={score} />
            <CategoryCompanyInfo
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
            <CategoryComponent
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
            <CategoryDOM
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
            <CategoryLifecycleAndRender
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
            <CategoryPropsAndData
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
            <CategoryState
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
        }
      </>
    </div>
  );
}

export default App;
