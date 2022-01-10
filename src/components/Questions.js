const Questions = () => {

  const questions = [
    {
      id: 1,
      questionText : 'Here is the question #1 ?',
      answersOptions: [
        { option1: 'option 1', isCorrect: false },
        { option2: 'option 2', isCorrect: false },
        { option3: 'option 3', isCorrect: true },
        { option4: 'option 4', isCorrect: false },
      ]
    },
    {
      id: 2,
      questionText : 'question2',
      answersOptions: [
        { option1: '', isCorrect: false },
        { option2: '', isCorrect: false },
        { option3: '', isCorrect: false },
        { option4: '', isCorrect: true },
      ]
    },
    {
      id: 3,
      questionText : 'question3',
      answersOptions: [
        { option1: '', isCorrect: false },
        { option2: '', isCorrect: false },
        { option3: '', isCorrect: true },
        { option4: '', isCorrect: false },
      ]
    },
    {
      id: 4,
      questionText : 'question4',
      answersOptions: [
        { option1: '', isCorrect: true },
        { option2: '', isCorrect: false },
        { option3: '', isCorrect: false },
        { option4: '', isCorrect: false },
      ]
    },
    
  ]


  return (
    <>
      <div className="question-count">Question number: _ of {questions.length}</div>
      <div className="question-text">{questions[0].questionText}</div>
      <div className="answer-options">
        <p>{questions[0].answersOptions[0].option1}</p>
        <p>{questions[0].answersOptions[1].option2}</p>
        <p>{questions[0].answersOptions[2].option3}</p>
        <p>{questions[0].answersOptions[3].option4}</p>
      </div>
    </>
  );
}

export default Questions;