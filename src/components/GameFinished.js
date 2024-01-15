const GameFinished = ({ score, setCategoryFinished, setGameFinished, setCategorySelected }) => {

  // TODO: use the correct function
  const handleClickOkButton = () => {
    window.location.reload(true)
    // setCategoryFinished(true)
    // setGameFinished(true)
    // setCategorySelected('')
  }

  return (
    <div className="wrong-answer game-finished">
      <h4>✅ Congratulations !</h4>
      <p>Game finished</p>
      <p>You have won: 💳 <span>{ score }</span> BTC</p>
      {/* <p>Please select a new category</p> */}
      <button className="green-btn" onClick={() => handleClickOkButton()}>Try Again</button>
    </div>
  )
}

export default GameFinished