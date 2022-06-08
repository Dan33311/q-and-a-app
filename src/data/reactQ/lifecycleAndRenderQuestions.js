const lifecycleAndRenderQuestions = [
  {
    questionId: 1,
    questionText : "What are the life cycles of React?",
    answersOptions: [
      { answerText: "Initialization", isCorrect: false },
      { answerText: "State/Property Updates", isCorrect: false },
      { answerText: "Destruction", isCorrect: false },
      { answerText: "All of these", isCorrect: true },
    ]
  },
  {
    questionId: 2,
    questionText : "How many stages are there in React lifecycle",
    answersOptions: [
      { answerText: "2", isCorrect: false },
      { answerText: "1", isCorrect: false },
      { answerText: "3", isCorrect: true },
      { answerText: "0", isCorrect: false },
    ]
  },
  {
    questionId: 3,
    questionText : "In relation to React component lifecycle, which statement is true",
    answersOptions: [
      { answerText: "Only class components can have life cycle", isCorrect: true },
      { answerText: "Only function component can have a life cycle", isCorrect: false },
      { answerText: "Both types of components can have life cycle", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 4,
    questionText : "What is a good use case for using a function while rendering a dynamic list of items",
    answersOptions: [
      { answerText: "None. Functions should not be used while rendering a dynamic list.", isCorrect: false },
      { answerText: "If we need to compute a value based on the properties of items in the loop.", isCorrect: true },
      { answerText: "To make the code shorter", isCorrect: false },
      { answerText: "To prevent re-render", isCorrect: false },
    ]
  },
  {
    questionId: 5,
    questionText : "What will happen if you render an input element with disabled = {false}",
    answersOptions: [
      { answerText: "It will be rendered as disabled", isCorrect: false },
      { answerText: "It will be rendered as enabled", isCorrect: true },
      { answerText: "It will not be rendered at all", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
] 

export default lifecycleAndRenderQuestions