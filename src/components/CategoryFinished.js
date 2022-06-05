const CategoryFinished = ({ score, setCategoryFinished, setGameFinished, setCategorySelected }) => {

  // TODO: use the correct function
  const handleClickOkButton = () => {
    setCategoryFinished(true)
    setGameFinished(true)
    setCategorySelected('')
  }

  return (
    <div className='wrong-answer game-finished'>
      <h4>✅ Correct answers !</h4>
      <p>You have won: 💳 <span>{ score }</span> BTC</p>
      <p>Please select a new category</p>
      <button className="green-btn" onClick={() => handleClickOkButton()}>OK</button>
    </div>
  );
}

export default CategoryFinished;