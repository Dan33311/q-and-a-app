const CategoryFinished = ({ score, setCategoryFinished }) => {

  // TODO: use the correct function
  const handleClickOkButton = () => {
    setCategoryFinished(true)
  }

  return (
    <div className='wrong-answer game-finished'>
      <h4>✅ Respuestas correctas !</h4>
      <p>Has ganado: 💳 <span>{ score }</span> BTC</p>
      <p>Porfavor seleccione una nueva categoria</p>
      <button className="green-btn" onClick={() => handleClickOkButton()}>OK</button>
    </div>
  );
}

export default CategoryFinished;