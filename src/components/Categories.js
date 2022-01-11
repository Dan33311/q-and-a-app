import { useState, useRef } from "react";
import CssCategory from "./CssCategory";
import JavascriptCategory from "./JavascriptCategory";

const Categories = () => {

  const [categorySelected, setCategorySelected] = useState(false);
  const [renderThis, setRenderThis] = useState();

  let btnRefCSS = useRef();
  let btnRefJS = useRef();
  const handleCategoryButtonCSS = (component) => {
    if(btnRefCSS.current){
      btnRefCSS.current.setAttribute("disabled", "disabled");
    }
    setCategorySelected(true);
    setRenderThis(component)
  }
  const handleCategoryButtonJavascript = (component) => {
    if(btnRefJS.current){
      btnRefJS.current.setAttribute("disabled", "disabled");
    }
    setCategorySelected(true);
    setRenderThis(component)
  }


  return (
    
      <>
        <div className="categ-container">
          <h2>Concurso de preguntas y respuestas</h2>
          <p>Selecciona una categoria</p>
          {/* <button className="categ-btn" onClick={() => handleCategoryButton(<CssCategory />)}>CSS</button> */}
          <button className="categ-btn" ref={btnRefCSS} onClick={() => handleCategoryButtonCSS(<CssCategory />)}>CSS</button>
          <button className="categ-btn" ref={btnRefJS} onClick={() => handleCategoryButtonJavascript(<JavascriptCategory/>)}>JavaScript</button>
          <button className="categ-btn" >* Test category</button>
        </div>
        {/* <div className="score-count">Total: 💳<span>{props.score}</span> BTC</div> */}
        { categorySelected === true ? renderThis : null }
      </>
  );
}


export default Categories;


// working on
// <>
//   { categorySelected === false ? (
//     <>
//       <div className="categ-container">
//         <h2>Categorias</h2>
//         <p>Selecciona una categoria</p>
//         <button className="categ-btn" onClick={() => handleCategoryButton(<CssCategory />)}>CSS</button>
//         {/* <button className="categ-btn" ref={btnRef} onClick={() => handleCategoryButton(<CssCategory />)}>CSS</button> */}
//         <button className="categ-btn" onClick={() => handleCategoryButton(<JavascriptCategory/>)}>JavaScript</button>
//       </div>
//     </>
//   ) : (
//     renderThis
//   )}
// </>