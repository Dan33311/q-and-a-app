import './App.css';
import { useState } from "react";
import CategoriesSection from './components/Categories';
import Score from "./components/Score";
import CategoryCss from "./components/CategoryCss";
import CategoryJavascript from "./components/CategoryJavascript";


function App() {

  const [categorySelected, setCategorySelected] = useState('')
  const [classNameValue, setClassNameValue] = useState('')

  const [score, setScore] = useState(0.0000)

  const handleChangeScore = () => {
    setScore(score + 0.0001)
  }

  const handleClickButton = (category) => {
    setCategorySelected(category)
    setClassNameValue(category)
  }

  console.log('[app.js] categorySelected:', categorySelected);
  console.log('[app.js] classNameValue:', classNameValue);


  return (
    <div className="App">
      <>
        <h2>Concurso de preguntas y respuestas</h2>
        {categorySelected === ''
          ? <CategoriesSection 
              handleClickButton={handleClickButton}
              classNameValue={classNameValue} 
            />
          : null
        }
        {categorySelected === 'css'
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
            />
          </>
          : null
        }
      </>
    </div>
  );
}

export default App;
