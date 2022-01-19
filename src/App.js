import './App.css';
import { useState } from "react";
import CategoriesSection from './components/Categories';
import Score from "./components/Score";
import CategoryCss from "./components/CategoryCss";
import CategoryJavascript from "./components/CategoryJavascript";


function App() {

  const [categories, setCategories] = useState([
    'CSS',
    'JavaScript', 
    'HTML', 
    'Bootstrap', 
    'React', 
    'Firebase', 
    'Nodejs'
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
          ? <CategoriesSection 
              categories={categories}
              handleClickButton={handleClickButton}
            />
          : null
        }
        {categorySelected === 'CSS'
          ? <>
            <Score score={score} />
            <CategoryCss
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
          : null
        }
        {categorySelected === 'JavaScript'
          ? <>
            <Score score={score} />
            <CategoryJavascript
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
          : null
        }
      </>
    </div>
  );
}

export default App;
