import { useState } from 'react'

const CategoriesTest = ({ categorySelected, setCategorySelected }) => {

  const [categories, setCategories] = useState([
    "CSS",
    "JavaScript",
    "HTML",
    "Bootstrap",
    "React",
    "Firebase",
    "Nodejs"
  ])

  const handleClickButton = (category, index) => {
    let newCategory = categories
    newCategory.splice(index, 1)
    setCategories((prev) => newCategory)
    setCategorySelected((prev) => category)
    setTimeout(() => {
      console.log("handleClickButton - category:", category);
      console.log("handleClickButton - categorySelected:", categorySelected);
      console.log("handleClickButton - index:", index);
      console.log('-------------------------------------------');
      console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    }, 3000)
    
  };

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

          // ✅ asigna bien ❌ solo al boton que clickeo, lo demas null 
          // <button
          //   key={index}
          //   className={`categ-btn ${`${
          //     categ === categorySelected ? categ : null
          //   }-btn`}`}
          //   onClick={() => handleClickButton(categ, index)}
          //   >
          //   {categ}
          // </button>

          // <button
          //   key={index}
          //   className={`categ-btn ${`${classNameValue[index]}-btn`}`}
          //   onClick={() => handleClickButton(categ)}
          // >
          //   {categ}
          // </button>

          
        ))}
      </div>
    </>
  );
};

export default CategoriesTest;