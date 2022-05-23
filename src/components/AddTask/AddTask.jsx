import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({task, setTask}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [query, setQuery]=useState('');
let onchangehandler=(e)=>{
  console.log(e.target.value);
  let val=e.target.value;
  setQuery(val);
}
const onaddhandler=()=>{
  if(query.length!==0){
    let data={
      id:task.length+1,
      text:query,
      done:false,
      count:1,
    };
    task.push(data);
    console.log(task);
    let res=task;
  setTask(res);
  setQuery('');
  }
 
}
  
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={query} onChange={onchangehandler} />
      <button data-cy="add-task-button" onClick={onaddhandler}>+</button>
    </div>
  );
};

export default AddTask;
