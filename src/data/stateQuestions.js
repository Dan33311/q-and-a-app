// https://www.freshersnow.com/react-js-quiz/

const stateQuestions = [
  {
    questionId: 000000, // general 1
    questionText : "React is a ________",
    answersOptions: [
      { answerText: "Javascript library", isCorrect: true },
      { answerText: "Javascript framework", isCorrect: false },
      { answerText: "Both of above", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // general 1
    questionText : "React Js is written in",
    answersOptions: [
      { answerText: "JavaScript", isCorrect: true },
      { answerText: "Swift", isCorrect: false },
      { answerText: "Ajax", isCorrect: false },
      { answerText: "None", isCorrect: false },
    ]
  },
  {
    questionId: 000000, // general 2
    questionText : "Everything in react is _________",
    answersOptions: [
      { answerText: "component", isCorrect: true },
      { answerText: "module", isCorrect: false },
      { answerText: "package", isCorrect: false },
      { answerText: "class", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // general 2
    questionText : "ReactJS uses _____ to increase performance",
    answersOptions: [
      { answerText: "Virtual DOM", isCorrect: true },
      { answerText: "Original DOM", isCorrect: false },
      { answerText: "Both of above", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // general 3
    questionText : "What are the advantages of ReactJS?",
    answersOptions: [
      { answerText: "Both of these", isCorrect: true },
      { answerText: "Component and Data patterns improve readability", isCorrect: false },
      { answerText: "Can be used with other frameworks also", isCorrect: false },
      { answerText: "None", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // general 3
    questionText : "ReactJS covers ______",
    answersOptions: [
      { answerText: "User Interface layer in an application", isCorrect: true },
      { answerText: "Data layer in an application", isCorrect: false },
      { answerText: "Both of above", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // general 4
    questionText : "ReactJS uses _____ to increase performance",
    answersOptions: [
      { answerText: "Virtual DOM", isCorrect: true },
      { answerText: "Original DOM", isCorrect: false },
      { answerText: "Both of above", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // general 4
    questionText : "What is the default port for webpack dev server?",
    answersOptions: [
      { answerText: "8080", isCorrect: true },
      { answerText: "3000", isCorrect: false },
      { answerText: "3306", isCorrect: false },
      { answerText: "8809", isCorrect: false },
    ]
  },
  {
    questionId: 000000, // general 5
    questionText : "What are the limitations of ReactJS?",
    answersOptions: [
      { answerText: "All of these", isCorrect: true },
      { answerText: "React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for the development", isCorrect: false },
      { answerText: "React is using inline templating and JSX. This can seem awkward to some developers", isCorrect: false },
      { answerText: "The library of react is too large", isCorrect: false },
    ]
  },
  {
    questionId: 5,  //  general 5
    questionText : "What can we do with HOC?",
    answersOptions: [
      { answerText: "All of the above mentioned", isCorrect: true },
      { answerText: "Render High jacking", isCorrect: false },
      { answerText: "State abstraction and manipulation", isCorrect: false },
      { answerText: "Props manipulation", isCorrect: false },
    ]
  },
  // ------------ ✅ C1y2 GENERAL Q10 ----------------------------------------------------------



  
  {
    questionId: 1,  // state
    questionText : "As soon as the state of the React component is modified, the component __",
    answersOptions: [
      { answerText: "restore the component", isCorrect: true },
      { answerText: "Does nothing, you have to call the render method to make the component", isCorrect: false },
      { answerText: "recreated from scratch", isCorrect: false },
      { answerText: "None of the above", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // state
    questionText : "What is the second argument for setState useful for?",
    answersOptions: [
      { answerText: "To invoke code after the setState operation is done", isCorrect: true },
      { answerText: "To replace the state completely instead of the default merge action", isCorrect: false },
      { answerText: "To access the previous state before the setState operation", isCorrect: false },
      { answerText: "To change the state value", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // state
    questionText : "Which of the following is a correct definition of state in react?",
    answersOptions: [
      { answerText: "An internal data store (object) of component", isCorrect: true },
      { answerText: "A persistent storage", isCorrect: false },
      { answerText: "Bothwrong", isCorrect: false },
      { answerText: "None", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // state
    questionText : "The state in react can be updated by call to setState method. These calls are",
    answersOptions: [
      { answerText: "Asynchronous in nature", isCorrect: true },
      { answerText: "Synchronous in nature", isCorrect: false },
      { answerText: "Are asynchronous but can be made synchronous when required", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // state
    questionText : "To update state in react forcefully, which method is used",
    answersOptions: [
      { answerText: "force update", isCorrect: true },
      { answerText: "setState", isCorrect: false },
      { answerText: "Both of above", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  // ------------ ✅ C3 STATE Q5 ----------------------------------------------------------



  {
    questionId: 000000,  // components
    questionText : "How can you access the state of a component from inside of a member function?",
    answersOptions: [
      { answerText: "this.values", isCorrect: true },
      { answerText: "this.getState()", isCorrect: false },
      { answerText: "this.state", isCorrect: false },
      { answerText: "this.prototype.stateValue", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // components
    questionText : "How many elements does a react component returns?",
    answersOptions: [
      { answerText: "Multiple elements with one root element", isCorrect: true },
      { answerText: "1", isCorrect: false },
      { answerText: "0", isCorrect: false },
      { answerText: "None of the above", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // components
    questionText : "Regarding React js components, which of following statement is true?",
    answersOptions: [
      { answerText: "function components are lightweight", isCorrect: true },
      { answerText: "function components can have state", isCorrect: false },
      { answerText: "class components are lightweight", isCorrect: false },
      { answerText: "class components are faster than function component", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // components
    questionText : "For controlled components in react",
    answersOptions: [
      { answerText: "Source of truth is component state", isCorrect: true },
      { answerText: "Source of truth is DOM", isCorrect: false },
      { answerText: "Source of truth can be anything", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // components
    questionText : "As soon as the state of react component is changed, component will",
    answersOptions: [
      { answerText: "As soon as the state of react component is changed, component will", isCorrect: true },
      { answerText: "Does nothing , you have to call render method to render the component again", isCorrect: false },
      { answerText: "be created again from scratch", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  // ------------ ✅ C4 COMPONENTS Q5 ----------------------------------------------------------



  {
    questionId: 000000,  // data
    questionText : "In react, this is used to pass data to component from outside?",
    answersOptions: [
      { answerText: "props", isCorrect: true },
      { answerText: "set state", isCorrect: false },
      { answerText: "render with the argument", isCorrect: false },
      { answerText: "propTypes", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // data
    questionText : "What are two ways data gets handled in react?",
    answersOptions: [
      { answerText: "state & props", isCorrect: true },
      { answerText: "services & components", isCorrect: false },
      { answerText: "state & services", isCorrect: false },
      { answerText: "state & component", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // Data
    questionText : "Which of the following is used to pass the data from parent to child",
    answersOptions: [
      { answerText: "State", isCorrect: true },
      { answerText: "Propswrong", isCorrect: false },
      { answerText: "Both of these", isCorrect: false },
      { answerText: "None", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // props
    questionText : "props in react can_______",
    answersOptions: [
      { answerText: "Not be changed in the component", isCorrect: true },
      { answerText: "Be changed inside the component", isCorrect: false },
      { answerText: "Be changed in side other component", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // props
    questionText : "In ReactJS, props can be used to pass",
    answersOptions: [
      { answerText: "Both of above", isCorrect: true },
      { answerText: "Properties to the component", isCorrect: false },
      { answerText: "Event handler to component", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  // ------------ ✅ C5 PROPS/DATA Q5 ----------------------------------------------------------



  {
    questionId: 2,  // lifecycle
    questionText : "What are the life cycles of ReactJS?",
    answersOptions: [
      { answerText: "All of these", isCorrect: true },
      { answerText: "Initialization", isCorrect: false },
      { answerText: "State/Property Updates", isCorrect: false },
      { answerText: "Destruction", isCorrect: false },
    ]
  },
  {
    questionId: 000000, // lifecycle
    questionText : "How many stages are there in React js life cycle",
    answersOptions: [
      { answerText: "3", isCorrect: true },
      { answerText: "2", isCorrect: false },
      { answerText: "1", isCorrect: false },
      { answerText: "0", isCorrect: false },
    ]
  },
  {
    questionId: 000000, // lifecycle
    questionText : "In relation to React js component lifecycle, which statement is true",
    answersOptions: [
      { answerText: "Only class components can have life cycle", isCorrect: true },
      { answerText: "Only function component can have a life cycle", isCorrect: false },
      { answerText: "Both types of components can have life cycle", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // render
    questionText : "What is a good use case for using a function while rendering a dynamic list of items",
    answersOptions: [
      { answerText: "If we need to compute a value based on the properties of items in the loop.", isCorrect: true },
      { answerText: "None. Functions should not be used while rendering a dynamic list.", isCorrect: false },
      { answerText: "To make the code shorter", isCorrect: false },
      { answerText: "To prevent re-render", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // Render
    questionText : "What will happen if you render an input element with disabled = {false}",
    answersOptions: [
      { answerText: "It will be rendered as enabled", isCorrect: true },
      { answerText: "It will be rendered as disabled", isCorrect: false },
      { answerText: "It will not be rendered at all", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  // ------------ ✅ C6 LIFECYCLE/RENDER Q5 ----------------------------------------------------------



  {
    questionId: 000000,  // company info
    questionText : "Who is the author of React JS?",
    answersOptions: [
      { answerText: " Jordan Walke", isCorrect: true },
      { answerText: "Williamson", isCorrect: false },
      { answerText: "Richards", isCorrect: false },
      { answerText: "None", isCorrect: false },
    ]
  },
  {
    questionId: 3,  // company info
    questionText : "React JS was found in the year of",
    answersOptions: [
      { answerText: "2013", isCorrect: true },
      { answerText: "2012", isCorrect: false },
      { answerText: "2014", isCorrect: false },
      { answerText: "2016", isCorrect: false },
    ]
  },
  {
    questionId: 01,   // company info
    questionText : "React Js is developed by",
    answersOptions: [
      { answerText: "Facebook", isCorrect: true },
      { answerText: "Google", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 000000, // company info
    questionText : "Company using React.js",
    answersOptions: [
      { answerText: "All of these", isCorrect: false },
      { answerText: "Airnbnb", isCorrect: true },
      { answerText: "DropBox", isCorrect: false },
      { answerText: "Discord", isCorrect: false },
    ]
  },
  {
    questionId: 000000,
    questionText : "Where is React's headquarters?",
    answersOptions: [
      { answerText: "Florida", isCorrect: true },
      { answerText: "California", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "New York", isCorrect: false },
    ]
  },
  // ------------ ✅ C7 COMPANY INFO Q5 ----------------------------------------------------------



  {
    questionId: 4,  // DOM
    questionText : "What are the refs in React?",
    answersOptions: [
      { answerText: "All of these", isCorrect: true },
      { answerText: "Managing focus, text selection, or media playback", isCorrect: false },
      { answerText: "Triggering imperative animations", isCorrect: false },
      { answerText: "Integrating with third-party DOM libraries", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // DOM, ref, attributes
    questionText : "Ref in react component is used to assign reference to DOM elements. Ref can be created by",
    answersOptions: [
      { answerText: "Both of above", isCorrect: true },
      { answerText: "Calling React.createRef method", isCorrect: false },
      { answerText: "Assigning a value to ref attribute in JSX", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  {
    questionId: 000000,  // DOM, attributes
    questionText : "Keys are given to a list of elements in react. These keys should be",
    answersOptions: [
      { answerText: "Unique among the siblings only", isCorrect: true },
      { answerText: "Unique in the DOM", isCorrect: false },
      { answerText: "Do not requires to be unique", isCorrect: false },
      { answerText: "None of above", isCorrect: false },
    ]
  },
  // ------------ C8 DOM Q3 ----------------------------------------------------------



  // {
  //   questionId: 000000,
  //   questionText : "",
  //   answersOptions: [
  //     { answerText: "", isCorrect: false },
  //     { answerText: "", isCorrect: false },
  //     { answerText: "", isCorrect: false },
  //     { answerText: "", isCorrect: true },
  //   ]
  // },
]

export default stateQuestions;