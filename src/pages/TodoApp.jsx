import react, { Component } from "react";
import '../assets/style/todo.css'
export default class TodoApp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="todo-app">
        <div className="todo-header">
            <h3>Todo Application With React</h3>
            <div className="add-todo-section">
                <div>
                <label htmlFor="todo-app">Please add todo</label>
                <input type="text"  name="todo-app" className="add-todo-input" />
                </div>
                <button className="add-todo-btn">ADD</button>
            </div>
        </div>
        <div className="todo-body">
            <div className="todo-list">
                <div className="todo-content">
                    <input type="checkbox" name="" id="" />
                    <div>
                        <h3 className="todo-title">todo name </h3>
                        <h6 className="todo-date">todo date</h6>
                    </div>
                </div>
                <div className="todo-action">
                    <button>delete</button>
                    <button>edit</button>
                </div>
            </div>
        </div>
        <div className="todo-footer">hello 2</div>
        </div>
    }
}