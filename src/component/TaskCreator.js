import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
    const [newTaskName, setNewTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName)
        setNewTaskName('');
    }



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingresa la tarea respectiva"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)} />

            <button >Agregar</button>

        </form>
    )
}

