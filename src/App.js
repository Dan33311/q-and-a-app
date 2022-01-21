import './App.css';
import { useState } from "react";
import Score from "./components/Score";
import CategoriesSection from './components/CategoriesSection';
import CategoryCss from "./components/categories/CategoryCss";
import CategoryJavascript from "./components/categories/CategoryJavascript";
import CategoryFood from './components/categories/CategoryFood';
import CategoryMoviesAndTV from './components/categories/CategoryMoviesAndTV';
import CategoryMusic from './components/categories/CategoryMusic';
import CategoryGeography from './components/categories/CategoryGeography';
import CategoryArtAndLiterature from './components/categories/CategoryArtAndLiterature';
import CategoryScience from './components/categories/CategoryScience';
import CategorySports from './components/categories/CategorySports';


function App() {

  const [categories, setCategories] = useState([
    'CSS',
    'JavaScript', 
    'Comida', 
    'Peliculas', 
    'Musica', 
    'Geografia', 
    'Arte',
    'Ciencia',
    'Deportes'
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
        {categorySelected === 'Comida'
          ? <>
            <Score score={score} />
            <CategoryFood
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
          : null
        }
        {categorySelected === 'Peliculas'
          ? <>
            <Score score={score} />
            <CategoryMoviesAndTV
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
          : null
        }
        {categorySelected === 'Musica'
          ? <>
            <Score score={score} />
            <CategoryMusic
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
          : null
        }
        {categorySelected === 'Geografia'
          ? <>
            <Score score={score} />
            <CategoryGeography
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
          : null
        }
        {categorySelected === 'Arte'
          ? <>
            <Score score={score} />
            <CategoryArtAndLiterature
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
          : null
        }
        {categorySelected === 'Ciencia'
          ? <>
            <Score score={score} />
            <CategoryScience
              onChange={handleChangeScore}
              score={score}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </>
          : null
        }
        {categorySelected === 'Deportes'
          ? <>
            <Score score={score} />
            <CategorySports
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
