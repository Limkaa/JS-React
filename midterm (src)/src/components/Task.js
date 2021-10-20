import React from "react";

const Task = ({ task, onDelete, onToggle, changePriority }) => {
    return (
        <div className={`task ${task.important ? 'important': ''}`} 
        onDoubleClick={() => changePriority(task.id)}>
            <input type="checkbox" 
            onChange={() => onToggle(task.id)} 
            defaultChecked={task.done}
            className="task-btn"/>
            <p className="task-text">{task.text}</p>
            <button onClick={() => onDelete(task.id)}
            className="task-btn delete">Delete</button>
        </div>
    )
}

export default Task;