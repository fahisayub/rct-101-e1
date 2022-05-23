import React, { useState } from "react";
import Counter from '../Counter/Counter'
import styles from "./task.module.css";

const Task = ({done,text, count,id}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [completed,setCompleted]=useState(done);
  let oncheckedhandler=(e)=>{
    console.log(e.target.checked);
    setCompleted(e.target.checked);
  }
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" checked={completed} onChange={oncheckedhandler} />
      <div data-cy="task-text">{text}</div>
      <Counter count={count}/>
      <button data-cy="task-remove-button"></button>
    </li>
  );
};

export default Task;
