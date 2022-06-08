const generalAQuestions = [
  {
    questionId: 1,
    questionText : "React is written in?",
    answersOptions: [
      { answerText: "Swift", isCorrect: false },
      { answerText: "JavaScript", isCorrect: true },
      { answerText: "Ajax", isCorrect: false },
      { answerText: "None", isCorrect: false },
    ]
  },
  {
    questionId: 2,
    questionText : "Everything in React is _________",
    answersOptions: [
      { answerText: "module", isCorrect: false },
      { answerText: "component", isCorrect: true },
      { answerText: "package", isCorrect: false },
      { answerText: "class", isCorrect: false },
    ]
  },
  {
    questionId: 3,
    questionText : "React uses _____ to increase performance",
    answersOptions: [
      { answerText: "Original DOM", isCorrect: false },
      { answerText: "Virtual DOM", isCorrect: true },
      { answerText: "Both of above", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 4,
    questionText : "What are the advantages of React?",
    answersOptions: [
      { answerText: "Component and Data patterns improve readability", isCorrect: false },
      { answerText: "Can be used with other frameworks also", isCorrect: false },
      { answerText: "Both of these", isCorrect: true },
      { answerText: "None", isCorrect: false },
    ]
  },
  {
    questionId: 5,
    questionText : "What are the limitations of React?",
    answersOptions: [
      { answerText: "React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for the development", isCorrect: false },
      { answerText: "React is using inline templating and JSX. This can seem awkward to some developers", isCorrect: false },
      { answerText: "The library of react is too large", isCorrect: false },
      { answerText: "All of these", isCorrect: true },
    ]
  },
]

export default generalAQuestions;