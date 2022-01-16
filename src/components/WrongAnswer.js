const WrongAnswer = ({ score }) => {

  // TODO: use the correct function
  const handleClickTryAgainButton = () => {
    window.location.reload(true)
  }

  return (
    <div className='wrong-answer'>
      <h4>❌ Respuesta incorrecta</h4>
      <p>Has ganado: 💳 <span>{ score }</span> BTC</p>
      <button className="green-btn" onClick={() => handleClickTryAgainButton()}>Juego nuevo</button>
    </div>
  );
}

export default WrongAnswer;