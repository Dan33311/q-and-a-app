const [score, setScore] = useState(0)
const [endNumber, setEndNumber] = useState(301)

let i = score
  const handleChangeScore = () => {
    setScore(score + 300)
    if (i < endNumber) {
      setScore(i)
      setTimeout(() => {
        handleChangeScore()
        i++
      }, 0)
    }
    setEndNumber(endNumber + 300)
  }
