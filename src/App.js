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



function App() {

  const [categories, setCategories] = useState([ 
    'General 1',
    'General 2',
    'Company',
    // 'Component',
    // 'DOM',
    // 'Lifecycle and Render',
    // 'Props and Data',
    // 'State',
  ])

  const [categorySelected, setCategorySelected] = useState('')
  const [score, setScore] = useState(0.0000)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleChangeScore = () => {
    setScore(score + 0.0001)
  }

  const handleClickButton = (category, index) => {
    setCategorySelected((prev) => category)
    let newCategory = categories
    console.log('>>> newCategory:', newCategory);
    newCategory.splice(index, 1)
    console.log('>>> newCategory splice:', newCategory);
    setCategories((prev) => newCategory)
    console.log('>>> categories:', categories);
  }


  return (
    <div className="App">
      <>
        <h2>ReactQuiz</h2>

        {!isPlaying &&
          <>
            <p className='description'>ReactQuiz, is a quiz competition where contestants have to correctly answer a series of multiple-choice questions in order to advance to the next category.</p>
            <h4>How to play: </h4>
            <p className='description'>Select a category from five available categories.</p>            
            <p className='description'>Five questions per category, four multiple-choice answers.</p>
            <p className='description'>Select one of the multiple-choice question.</p>
            <p className='description'>You can only select once the answer you think is correct.</p>
            <p className='description'>If the selected answer is correct, you will earn 0.0001 BTC and advance to the next question.</p>
            <p className='description'>If the selected answer is incorrect, you will lose the accumulated BTC and the game will end.</p>
            <p className='description'>You have the option to withdraw from the quiz at any time and take your accumulated BTC with you.</p>
            <button className="green-btn" onClick={() => setIsPlaying(true)}>Play</button>
          </>
        }
        {isPlaying && categorySelected === ''
          ? <>
              {categories.length === 0 
                ? 
                  <>
                    {/* <h1>Game finished</h1>
                  <Score score={score} /> */}
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
        {/* {categories.length === 0 && <h1>Game finished</h1>} */}

        {categorySelected === 'General 1' && 
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
