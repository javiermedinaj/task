import { useState, useEffect } from 'react';
import './App.css';
import { TaskCreator } from './component/TaskCreator';
import { TaskTable } from './component/TaskTable';



function App() {
  const [tasksItems, setTasksItems] = useState([]);

  function createNewTask(taskName) {
    if (!tasksItems.find(task => task.name === taskName)) { setTasksItems([...tasksItems, { name: taskName, done: false }]); }
    else (alert('tarea ya existente'))
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems])

  const toggleTask = (task) =>
    setTasksItems(
      tasksItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );


  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} />




    </div>
  );
}

export default App;
