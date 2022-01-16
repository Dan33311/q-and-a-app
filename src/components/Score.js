const Score = ({ score }) => {

// 
  return (
    <div className="score-count">
      <p>Total: 💳<span>{score}</span> BTC</p>
    </div>
  );
}

export default Score;