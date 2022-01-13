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