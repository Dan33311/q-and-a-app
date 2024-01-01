import { useState } from "react";

// FUNCTION WORKING

const NumberIncEffect = () => {

  const [score, setScore] = useState(0)
  const [endNumber, setEndNumber] = useState(101)

  let i = score
  const handleChangeScore = () => {
    console.log("handleChangeScore2() =>");
    console.log(">> score: ", score);
    console.log(">> i: ", i);
    if (i < endNumber) {
      console.log(">>>> if working");
      setScore(i)
      setTimeout(() => {
        handleChangeScore()
        i++
      }, 20)
    }
    setEndNumber(endNumber + 100)
  }

  console.log("---------------------------------------------------");


  return (
    <div style={{backgroundColor: "white", padding: "100px"}}>
      <h2>Test: </h2>
      <p id="nbr">{score}</p>
      <button onClick={handleChangeScore}>increase</button>
    </div>
  );
}

export default NumberIncEffect;