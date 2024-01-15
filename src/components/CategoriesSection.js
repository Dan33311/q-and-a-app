const CategoriesSection = ({ categories, handleClickButton }) => {

  
  return (
    <>
      <div className="categ-container">
        <p>Select a category</p>
        <div className="categ-btns-container">
          {categories.map((categ, index) => (
            <button 
              key={index} 
              className="categ-btn" 
              onClick={() => handleClickButton(categ, index)}
            >
              {categ}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default CategoriesSection