const CategoryFinished = ({ score, setCategoryFinished }) => {

  // TODO: use the correct function
  const handleClickOkButton = () => {
    setCategoryFinished(true)
  }

  return (
    <div className='game-finished'>
      <h4>✅ Correct answers</h4>
      <p>You earned: 💳 <span>{ score }</span> BTC</p>
      <button onClick={() => handleClickOkButton()}>OK</button>
    </div>
  );
}

export default CategoryFinished;