const WrongAnswer = ({ score }) => {

  // TODO: use the correct function
  const handleClickTryAgainButton = () => {
    window.location.reload(true)
  }

  return (
    <div className="wrong-answer">
      <h4>❌ Wrong answer</h4>
      <p>You have won: 💳 <span>{ score }</span> BTC</p>
      <button className="green-btn" onClick={() => handleClickTryAgainButton()}>New Game</button>
    </div>
  )
}

export default WrongAnswer