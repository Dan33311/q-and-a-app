const domQuestions = [
  {
    questionId: 1,
    questionText : "React uses _____ to increase performance",
    answersOptions: [
      { answerText: "Virtual DOM", isCorrect: true },
      { answerText: "Original DOM", isCorrect: false },
      { answerText: "Both of above", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 2,
    questionText : "JavaScript is used for DOM manipulation in React",
    answersOptions: [
      { answerText: "True", isCorrect: true },
      { answerText: "False", isCorrect: false },
      { answerText: "False", isCorrect: false },
      { answerText: "True", isCorrect: true },
    ]
  },
  {
    questionId: 3,
    questionText : "Keys are given to a list of elements in React. These keys should be",
    answersOptions: [
      { answerText: "Unique among the siblings only", isCorrect: true },
      { answerText: "Unique in the DOM", isCorrect: false },
      { answerText: "Do not requires to be unique", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 4,
    questionText : "What are the refs in React?",
    answersOptions: [
      { answerText: "Managing focus, text selection, or media playback", isCorrect: false },
      { answerText: "Triggering imperative animations", isCorrect: false },
      { answerText: "Integrating with third-party DOM libraries", isCorrect: false },
      { answerText: "All of these", isCorrect: true },
    ]
  },
  {
    questionId: 5,
    questionText : "Ref in React component is used to assign reference to DOM elements. Ref can be created by",
    answersOptions: [
      { answerText: "Calling React.createRef method", isCorrect: false },
      { answerText: "Assigning a value to ref attribute in JSX", isCorrect: false },
      { answerText: "Both of above", isCorrect: true },
      { answerText: "None of above", isCorrect: false },
    ]
  },
]

export default domQuestions