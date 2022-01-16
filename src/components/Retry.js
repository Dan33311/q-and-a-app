const Retry = ({ score, handleClickRetryOkButton }) => {

  return ( 
    <div className='game-finished'>
      <h4>🆗 Retry</h4>
      <p>You earned: 💳 <span>{ score }</span> BTC</p>
      <button onClick={handleClickRetryOkButton}>OK</button>
    </div>
  );
}

export default Retry;