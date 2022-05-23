import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  // sample value to be replaced
  //let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  const [counter, setCounter]=useState(count);
let onadd=()=>{
setCounter(counter+1);
}
let onminus=()=>{
  
 return counter!==1? setCounter(counter-1):1 ;
}

  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={onadd}>+</button>
      <span data-cy="task-counter-value">{counter}</span>
      <button data-cy="task-counter-decrement-button" onClick={onminus}>-</button>
    </div>
  );
};

export default Counter;
