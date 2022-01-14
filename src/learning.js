// THIS FILE IS ABOUT THINGS I'M LEARNING AS I'M DEVELOPING THIS PROJECT.

// 1. Disable a button after first click.
// 2. Sharing state between components.
// 3. Sharing state between components. (My attempt)


// 1.  -------   DISABLE A BUTTON AFTER FIRST CLICK  ----------------------------------------------

let btnRefCSS = useRef();
let btnRefJS = useRef();
const handleCategoryButtonCSS = (component) => {
  if(btnRefCSS.current){
    btnRefCSS.current.setAttribute("disabled", "disabled");
  }
  setCategorySelected(true);
  setRenderThis(component)
}
const handleCategoryButtonJavascript = (component) => {
  if(btnRefJS.current){
    btnRefJS.current.setAttribute("disabled", "disabled");
  }
  setCategorySelected(true);
  setRenderThis(component)
}

<button className="categ-btn" ref={btnRefCSS} onClick={() => handleCategoryButtonCSS(<CssCategory />)}>CSS</button>



// 2.  -------   SHARING STATE BETWEEN COMPONENTS  ----------------------------------------------

import { useState } from 'react';

// Panel() -> CHILDREN  -  Panel -> componente HIJO, 
// El VALOR de las PROPS las definimos en el PADRE,
// El estado en el HIJO
function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

// Accordion() -> PARENT  -  Componente PADRE,
// RENDERIZA al HIJO,
// Asigna clave y valor a las PROPS que pasamos al HIJO
// {children} -> El texto de <Panel>{children}</Panel>
export default function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

// -----------------------------------------------
// Challenge 1 -  Synced inputs : These two inputs are independent. Make them stay in sync: editing one input should update the other input with the same text, and vice versa. 
import { useState } from 'react';

export default function SyncedInputs() {
  return (
    <>
      <Input label="First input" />
      <Input label="Second input" />
    </>
  );
}

function Input({ label }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}
// Mi solucion ----------------------------------
import { useState } from 'react';


export default function SyncedInputs() {
  const [state, setState] = useState('')
  return (
    <>
      <Input 
        label="First input" 
        onWrite={(e) => setState(e.target.value)}
        text={state}
      />
      <Input 
        label="Second input"
        onWrite={(e) => setState(e.target.value)}
        text={state}
      />
    </>
  );
}

function Input({ label, onWrite, text }) {

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={onWrite}
      />
    </label>
  );
}



// 3.  -------   SHARING STATE BETWEEN COMPONENTS  (MY ATTEMPT) ----------------------------------------------
// Puedo pasar estados de componente padre a hijo:

// Hijo.js  ----------------------------------
const Hijo = ({ onChange }) => {
  
  return (
    <>
      <p>Hijo button</p>
      <button onClick={onChange}>Hijo</button>  
    </>
  );
}

export default Hijo;

// Padre.js  ----------------------------------
import { useState } from "react";
import Hijo from '../components/Hijo'


const Padre = () => {

  const [count, setCount] = useState(0)

  const handleChange = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h2>Padre count={count}</h2>
      <Hijo onChange={handleChange} />
    </>

  );
}

export default Padre;
// Pude desde el hijo cambiar el estado en padre
