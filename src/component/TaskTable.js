import React from 'react'
import { TaskRow } from './TaskRow'

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {

    const taskTableRows = (doneValue) => {
        return (
            tasks
                .filter(task => task.done === doneValue)
                .map(tasks => (
                    <TaskRow task={tasks} key={tasks.name} toggleTask={toggleTask} />
                ))
        )
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tareas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskTableRows(showCompleted)
                    }
                </tbody>
            </table>
        </div>
    )
}
