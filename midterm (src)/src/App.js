import React from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm';
import Tasks from './components/Tasks';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        {
            id: 1,
            text: "Meeting at university",
            important: false,
            done: false,
        },
        {
            id: 2,
            text: "Prepare course assignment",
            important: false,
            done: false,
        },
        {
            id: 3,
            text: "Workout",
            important: false,
            done: false,
        }
      ]
    }
  }

  createTask = (task) => {
    const id = Math.max(...this.state.tasks.map((task) => task.id)) + 1;
    const newTask = {id, ...task, done: false};
    this.setState({tasks: [...this.state.tasks, newTask]});
  }

  deleteTask = (id) => {
    this.setState({tasks: this.state.tasks.filter((task) => task.id !== id)});
  }

  toggleTask = (id) => {
    this.setState({tasks: this.state.tasks.map((task) => task.id === id ? {...task, done: !task.done}: task)});
  }

  changePriority = (id) => {
    this.setState({tasks: this.state.tasks.map((task) => task.id === id ? {...task, important: !task.important}: task)});
  }

  render() {
    const newTasks = this.state.tasks.filter((task) => task.done === false);
    const doneTasks = this.state.tasks.filter((task) => task.done === true);

    return (
      <React.Fragment>
        <div className="app-container">
          <header className="header">
            <h1>Task Tracker App</h1>
          </header>
          <div className="container">
            <NewTaskForm onCreate={this.createTask}/>
            <div className="new-tasks">
              <h2>New <span className="info">({newTasks.length} tasks)</span></h2>
              {newTasks.length > 0 ?
                <Tasks tasks={newTasks}
                onDelete={this.deleteTask}
                onToggle={this.toggleTask}
                changePriority={this.changePriority}/> : "Everything is done. Just relax :)"}
            </div>
            <div className="done-tasks">
              <h2>Done <span className="info">({doneTasks.length} tasks)</span></h2>
              {doneTasks.length > 0 ?
                <Tasks tasks={doneTasks}
                onDelete={this.deleteTask}
                onToggle={this.toggleTask}
                onPriority={this.changePriority}/> : "Not done tasks yet"}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
