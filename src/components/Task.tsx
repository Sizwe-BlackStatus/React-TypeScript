import React from "react";
import "./Task.css";
interface Prop {
  task: Task;
  taskDone: TaskDone;
}
const Task = ({ task, taskDone }: Prop) => {
  const handleClick = () => {
    taskDone(task);
  };
  return (
    <div
      className="task-container"
      style={{ background: task.taskDone ? "#000" : undefined }}
    >
      <input type="checkbox" checked={task.taskDone} onClick={handleClick} />
      <label>
        <h1>{task.title}</h1>
        <p>{task.task}</p>
      </label>
    </div>
  );
};

export default Task;
