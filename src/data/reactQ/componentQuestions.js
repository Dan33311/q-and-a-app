const componentQuestions = [
  {
    questionId: 1,
    questionText : "How many elements does a React component returns?",
    answersOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "0", isCorrect: false },
      { answerText: "Multiple elements with one root element", isCorrect: true },
      { answerText: "None of the above", isCorrect: false },
    ]
  },
  {
    questionId: 2,
    questionText : "How can you access the state of a component from inside of a member function?",
    answersOptions: [
      { answerText: "this.getState()", isCorrect: false },
      { answerText: "this.values", isCorrect: true },
      { answerText: "this.state", isCorrect: false },
      { answerText: "this.prototype.stateValue", isCorrect: false },
    ]
  },
  {
    questionId: 3,
    questionText : "Regarding React components, which of following statement is true?",
    answersOptions: [
      { answerText: "class components are lightweight", isCorrect: false },
      { answerText: "function components can have state", isCorrect: false },
      { answerText: "function components are lightweight", isCorrect: true },
      { answerText: "class components are faster than function component", isCorrect: false },
    ]
  },
  {
    questionId: 4,
    questionText : "For controlled components in React",
    answersOptions: [
      { answerText: "Source of truth is DOM", isCorrect: false },
      { answerText: "Source of truth is component state", isCorrect: true },
      { answerText: "Source of truth can be anything", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 5,
    questionText : "As soon as the state of React component is changed, component will",
    answersOptions: [
      { answerText: "As soon as the state of react component is changed, component will", isCorrect: true },
      { answerText: "Does nothing , you have to call render method to render the component again", isCorrect: false },
      { answerText: "be created again from scratch", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  }
]

export default componentQuestions