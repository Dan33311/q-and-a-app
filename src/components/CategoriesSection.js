const CategoriesSection = ({ categories, handleClickButton }) => {

  
  return (
    <>
      <div className="categ-container">
        <p>Selecciona una categoria</p>
        {categories.map((categ, index) => (
          <button 
            key={index} 
            className='categ-btn' 
            onClick={() => handleClickButton(categ, index)}
          >
            {categ}
          </button>
        ))}
      </div>
    </>
  );
}

export default CategoriesSection;