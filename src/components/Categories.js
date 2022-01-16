const CategoriesSection = ({ handleClickButton }) => {


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
    </>
  );
}

export default CategoriesSection;