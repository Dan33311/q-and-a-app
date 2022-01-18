const CategoriesSection = ({ handleClickButton, handleClickCssButton, classNameValue, handleClickJsButton }) => {


  return (
    <>
      <div className="categ-container">
        <p>Selecciona una categoria</p>
        {/* <button className={`categ-btn ${classNameValue[0]}-btn`} onClick={() => handleClickCssButton('css')}>CSS</button> */}
        {/* <button className={`categ-btn ${classNameValue[1]}-btn`} onClick={() => handleClickJsButton('javascript')}>JavaScript</button> */}
        {/* <button className="categ-btn" onClick={() => handleClickJsButton('javascript')}>JavaScript</button> */}
        <button className={`categ-btn ${classNameValue[0]}-btn`} onClick={() => handleClickButton('css')}>CSS</button>
        <button className={`categ-btn ${classNameValue[1]}-btn`} onClick={() => handleClickButton('javascript')}>JavaScript</button>
        <button className="categ-btn">Categoria</button>
        <button className="categ-btn">Categoria</button>
        <button className="categ-btn">Categoria</button>
        <button className="categ-btn">Categoria</button>
      </div>
    </>
  );
}

export default CategoriesSection;