import React from 'react'
import { TaskRow } from './TaskRow'

export const TaskTable = ({ tasks, toggleTask }) => {
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
                        tasks.map(tasks => (
                            <TaskRow task={tasks} key={tasks.name} toggleTask={toggleTask} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
