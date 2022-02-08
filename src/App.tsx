import React, { FC, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';


const App: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  
  return (
    <div className="App">
      <h1>React-TypeScript-ToDoList</h1>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList  tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
