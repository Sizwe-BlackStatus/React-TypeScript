import React, { Dispatch, SetStateAction } from "react";
import Task from "./Task";
interface Props {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}
const TaskList = ({ tasks, setTasks }: Props) => {
  const taskDone = (taskComplete: Task) => {
    const modifiedTasks = tasks.map((task) => {
      if (taskComplete === task) {
        return {
          ...task,
          taskDone: !task.taskDone,
        };
      }
      return task;
    });
    setTasks(modifiedTasks);
  };
  
  return (
    <>
      {tasks.map((task, i) => {
        return <Task key={i} task={task} taskDone={taskDone} />;
      })}
    </>
  );
};

export default TaskList;
