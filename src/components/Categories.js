// import { useState } from "react";
// import Score from "./Score";
// import CategoryCss from "./CategoryCss";
// import CategoryJavascript from "./CategoryJavascript";


const CategoriesSection = ({ handleClickButton }) => {

  // const [score, setScore] = useState(0.0000)
  // const [categorySelected, setCategorySelected] = useState('')

  // const handleChangeScore = () => {
  //   setScore(score + 0.0001)
  // }

  // const handleClickButton = (category) => {
  //   setCategorySelected(category)
  // }


  return (
    <>
      <div className="categ-container">
        <p>Selecciona una categoria</p>
        <button className="categ-btn" onClick={() => handleClickButton('CSS')}>CSS</button>
        <button className="categ-btn" onClick={() => handleClickButton('JavaScript')}>JavaScript</button>
        <button className="categ-btn">Categoria</button>
        <button className="categ-btn">Categoria</button>
        <button className="categ-btn">Categoria</button>
        <button className="categ-btn">Categoria</button>
      </div>
      {/* <Score score={score} /> */}
      {/* {categorySelected === 'css' ? <CategoryCss onChange={handleChangeScore} score={score} /> : null} */}
      {/* {categorySelected === 'javascript' ? <CategoryJavascript onChange={handleChangeScore} score={score} /> : null} */}
    </>
  );
}

export default CategoriesSection;