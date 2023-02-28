import react, { Component } from "react";
import "../assets/style/todo.scss";

import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import FilterTodo from "../components/FilterTodo";
export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTodoList: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.checkedItem = this.checkedItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.showItem = this.showItem.bind(this);
  }
  addTodo(title) {
    this.setState((state) => {
      return {
        ...state,
        allTodoList: [
          ...state.allTodoList,
          {
            id: state.allTodoList.length + 1,
            title: title,
            date: new Date().toLocaleString(),
            complete: false,
          },
        ],
      };
    });
  }
  checkedItem(todoItem) {
    this.setState((prevState) => {
      const newAllTodoList = prevState.allTodoList.map((obj) => {
        if (obj.id === todoItem.id) {
          return { ...obj, complete: !todoItem.complete };
        }
        return obj;
      });
      return {
        ...prevState,
        allTodoList: newAllTodoList,
      };
    });
  }
  deleteItem(todoItem) {
    const newAllTodoList = [...this.state.allTodoList];
    const indexEl = newAllTodoList.indexOf(todoItem);
    if (indexEl !== -1) {
      newAllTodoList.splice(indexEl, 1);
      this.setState({ allTodoList: newAllTodoList });
    }
  }
  showItem(condition) {
    let AllTodoList = [...this.state.allTodoList];
    let newAllTodoList: [];
    if(condition === 'all') {
      newAllTodoList = AllTodoList
      newAllTodoList = AllTodoList

    }else if(condition === 'done') {
    AllTodoList = [...this.state.allTodoList]
      newAllTodoList = AllTodoList.filter(item => item.complete === true)
    }else {
      AllTodoList = [...this.state.allTodoList]
      newAllTodoList = AllTodoList.filter(item => item.complete === false)
    }
    // console.log(newAllTodoList);

    this.setState({ allTodoList: newAllTodoList });
  }
  render() {
    return (
      <div className="todo-app">
        <AddTodo addTodoItem={this.addTodo} />
        <div className="todo-body">
          {this.state.allTodoList.length > 0 ? (
            <>
              <FilterTodo showTodoList={this.showItem} />
              <TodoList
                allTodoList={this.state.allTodoList}
                checkTodoItem={this.checkedItem}
                deleteTodoItem={this.deleteItem}
              />
            </>
          ) : (
            <>
              <h4 className="no-data">لیستی برای نمایش وجود ندارد</h4>
            </>
          )}
        </div>
      </div>
    );
  }
}
