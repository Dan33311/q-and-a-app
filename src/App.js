import './App.css';
import { useState } from "react";
import Score from "./components/Score";
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
    'Component',
    'DOM',
    'Lifecycle/Render',
    'Props and Data',
    'State',
  ])

  const [categorySelected, setCategorySelected] = useState('')
  const [score, setScore] = useState(0.0000)

  const handleChangeScore = () => {
    setScore(score + 0.0001)
  }

  const handleClickButton = (category, index) => {
    setCategorySelected((prev) => category)
    let newCategory = categories
    newCategory.splice(index, 1)
    setCategories((prev) => newCategory)
  }


  return (
    <div className="App">
      <>
        <h2>Concurso de preguntas y respuestas</h2>
        {categorySelected === ''
          ? <>
              <CategoriesSection 
                categories={categories}
                handleClickButton={handleClickButton}
              />
              <Score score={score} />
            </>
          : null
        }

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
        {categorySelected === 'Lifecycle/Render' && 
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
