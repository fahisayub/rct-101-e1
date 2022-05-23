import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
import {v4 as uuidv4} from 'uuid'
let Tasks = ({tasklist}) => {
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {tasklist.map((val)=>{
         return <Task key={uuidv4()} {...val}/>
        })}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
