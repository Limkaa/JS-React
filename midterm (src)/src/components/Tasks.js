import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle, changePriority }) => {
    return (
        <React.Fragment>
            {tasks.map((task) => (
                <Task key={task.id} 
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle}
                changePriority={changePriority}/>
            ))}
        </React.Fragment>
    )
}

export default Tasks;