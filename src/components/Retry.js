const Retry = ({ score }) => {

  const handleClickTryAgainButton = () => {
    window.location.reload(true)
  }

  return ( 
    <div className='retry-section wrong-answer'>
      <h4>🔔 Te retiraste !</h4>
      <p>Has ganado: 💳 <span>{ score }</span> BTC</p>
      <button className="green-btn" onClick={handleClickTryAgainButton}>Juego nuevo</button>
    </div>
  );
}

export default Retry;