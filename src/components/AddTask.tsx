import React, { Dispatch, SetStateAction, useState } from "react";
import "./AddTask.css";
interface Props {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}
const AddTask = ({ tasks, setTasks }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [task, setTask] = useState<string>("");
  const handleClick = () => {
    addTask();
  };

  const addTask: AddTask = (): void => {
    const newTask = { title: title, task: task, taskDone: false };
    setTasks([...tasks, newTask]);
    setTitle("");
    setTask("");
  };

  return (
    <div className="Add-task-container">
      <input
        type="text"
        name="title"
        placeholder="Title..."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        name="task"
        placeholder="Task..."
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={handleClick}>Add-Task</button>
    </div>
  );
};

export default AddTask;
