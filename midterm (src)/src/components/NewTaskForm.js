import React from "react";
import { useState } from "react";

const NewTaskForm = ({ onCreate }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Please write your task")
            return
        }

        onCreate({text, });

        setText('');
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-control">
                {/* <label>New Task</label> */}
                <input type="text" placeholder="What do you need to do?"
                value={text} onChange={(e) => setText(e.target.value)}
                className="input-field"/>
            </div>
            <input type="submit" value="Create Task" className="submit-btn"></input>
        </form>
    )
}

export default NewTaskForm;