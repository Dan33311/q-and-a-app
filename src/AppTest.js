import "./App.css";
import { useState } from "react";
import CategoriesTest from "./components/CategoriesTest";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  // const [classNameValue, setClassNameValue] = useState([]);

  

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <CategoriesTest
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
      />
    </div>
  );
}


// https://codesandbox.io/s/sleepy-hypatia-rzwye?file=/src/styles.css
