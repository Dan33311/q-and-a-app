const Retry = ({ score }) => {

  const handleClickTryAgainButton = () => {
    window.location.reload(true)
  }

  return ( 
    <div className="retry-section wrong-answer">
      <h4>🔔 You walked away !</h4>
      <p>You have won: 💳 <span>{ score }</span> BTC</p>
      <button className="green-btn" onClick={handleClickTryAgainButton}>New Game</button>
    </div>
  )
}

export default Retry