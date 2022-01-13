import { useState } from "react";
import Score from "./Score";
import CategoryCss from "./CategoryCss";


const CategoriesSection = () => {
  
  const [score, setScore] = useState(0.0000)
  const [categorySelected, setCategorySelected] = useState(false)

  const handleChangeScore = () => {
    setScore(score + 0.0001)
  }

  const handleClickCssButton = () => {
    setCategorySelected(true)
  }

  return (
    <>
        <div className="categ-container">
          <h2>Seccion de Categorias</h2>
          <p>Selecciona una categoria</p>
          <button className="categ-btn" onClick={() => handleClickCssButton()}>CSS</button>
          <button className="categ-btn">JavaScripttt</button>
          <button className="categ-btn">Categoria</button>
          <button className="categ-btn">Categoria</button>
          <button className="categ-btn">Categoria</button>
          <button className="categ-btn">Categoria</button>
        </div>
        <Score score={score} />
        { categorySelected === true ? <CategoryCss onChange={handleChangeScore} /> : null }
      </>

  );
}

export default CategoriesSection;