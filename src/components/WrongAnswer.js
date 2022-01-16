const WrongAnswer = ({ score }) => {

  // TODO: use the correct function
  const handleClickTryAgainButton = () => {
    window.location.reload(true)
  }

  return (
    <div className='game-finished'>
      <h4>❌ Wrong Answer</h4>
      <p>You earned: 💳 <span>{ score }</span> BTC</p>
      <button onClick={() => handleClickTryAgainButton()}>Juego nuevo</button>
    </div>
  );
}

export default WrongAnswer;