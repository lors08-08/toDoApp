import React from "react";
import styles from "../../Tasks.module.css";
import { useSelector } from "react-redux";
import Bottom from "./Bottom";
import Body from "./Body";
import classNames from "classnames";

function Overall({ task }) {
  const addingToTrash = useSelector((state) => state.tasks.addingToTrash);
  const addingToDone = useSelector((state) => state.tasks.addingToDone);
  const addingToImportant = useSelector(
    (state) => state.tasks.addingToImportant
  );
  const taskBlockWrapper = classNames(styles.taskBlock, {
    [styles.taskBlockInactive]:
      addingToTrash || addingToDone || addingToImportant === true,
  });
  return (
    <div className={taskBlockWrapper}>
      <Body task={task} />
      <div className={styles.taskContent}>{task.content}</div>
      <Bottom task={task} />
    </div>
  );
}

export default Overall;