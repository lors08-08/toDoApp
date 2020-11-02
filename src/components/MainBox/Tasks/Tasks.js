import React from "react";
import styles from "./Tasks.module.css";
import Task from "./Task";
import TasksHeader from "./TasksHeader";

function Tasks() {
  return (
    <div className={styles.box}>
      <TasksHeader />
      <Task />
    </div>
  );
}

export default Tasks;