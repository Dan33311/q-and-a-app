// https://www.freshersnow.com/react-js-quiz/

const stateQuestions = [
  {
    questionId: 1,
    questionText : "As soon as the state of the React component is modified, the component __",
    answersOptions: [
      { answerText: "Does nothing, you have to call the render method to make the component", isCorrect: false },
      { answerText: "recreated from scratch", isCorrect: false },
      { answerText: "restore the component", isCorrect: true },
      { answerText: "None of the above", isCorrect: false },
    ]
  },
  {
    questionId: 2,
    questionText : "What is the second argument for setState useful for?",
    answersOptions: [
      { answerText: "To replace the state completely instead of the default merge action", isCorrect: false },
      { answerText: "To access the previous state before the setState operation", isCorrect: false },
      { answerText: "To change the state value", isCorrect: false },
      { answerText: "To invoke code after the setState operation is done", isCorrect: true },
    ]
  },
  {
    questionId: 3,
    questionText : "Which of the following is a correct definition of state in React?",
    answersOptions: [
      { answerText: "A persistent storage", isCorrect: false },
      { answerText: "An internal data store (object) of component", isCorrect: true },
      { answerText: "Bothwrong", isCorrect: false },
      { answerText: "None", isCorrect: false },
    ]
  },
  {
    questionId: 4,
    questionText : "The state in React can be updated by call to setState method. These calls are",
    answersOptions: [
      { answerText: "Synchronous in nature", isCorrect: false },
      { answerText: "Asynchronous in nature", isCorrect: true },
      { answerText: "Are asynchronous but can be made synchronous when required", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 5,
    questionText : "To update state in React forcefully, which method is used",
    answersOptions: [
      { answerText: "setState", isCorrect: false },
      { answerText: "force update", isCorrect: true },
      { answerText: "Both of above", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
]

export default stateQuestions;