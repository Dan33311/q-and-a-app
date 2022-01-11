import { useState } from "react/cjs/react.development";
import CssCategory from "./CssCategory";
import JavascriptCategory from "./JavascriptCategory";

const Categories = () => {

  const [categorySelected, setCategorySelected] = useState(false);
  const [renderThis, setRenderThis] = useState();

  const handleCategoryButton = (component) => {
    setCategorySelected(true);
    setRenderThis(component)
  }


  return (
    <>
      { categorySelected === false ? (
        <>
          <div className="categ-container">
            <h2>Categorias</h2>
            <p>Selecciona una categoria</p>
            <button className="categ-btn" onClick={() => handleCategoryButton(<CssCategory />)}>CSS</button>
            <button className="categ-btn" onClick={() => handleCategoryButton(<JavascriptCategory/>)}>JavaScript</button>
          </div>
        </>
      ) : (
        renderThis
      )}
    </>
  );
}

export default Categories;