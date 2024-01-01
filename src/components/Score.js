const Score = ({ score }) => {

  return (
    <div className="score-count" id="nbr">
      <p>Total: 💳<span>{score}</span> BTC</p>
    </div>
  );
}

export default Score;