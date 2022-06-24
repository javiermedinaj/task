import { useState } from 'react';
import './App.css';
import { TaskCreator } from './component/TaskCreator';



function App() {
  const [tasksItems, setTasksItems] = useState([
    { name: 'mi primer tarea', done: false },
    { name: 'mi segunda tarea', done: false },
    { name: 'mi tercer tarea', done: false }
  ]);

  function createNewTasks() {
    alert("creating")
  }


  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTasks} />

      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {
            tasksItems.map(task => (
              <tr key={task.name}>
                <td>
                  {task.name}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>



    </div>
  );
}

export default App;
