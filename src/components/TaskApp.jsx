import React, { useState } from "react";
import TaskHeader from '../components/TaskHeader/TaskHeader'
import AddTask from '../components/AddTask/AddTask'
import TaskList from '../components/Tasks/Tasks'
import data from '../data/tasks.json';
import styles from "./taskApp.module.css";

const TaskApp = () => {
  
  const [task,setTask]=useState(data);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader/>
      <AddTask task={task} setTask={setTask} />
      <TaskList tasklist={task}  />
    </div>
  );
};

export default TaskApp;
