import react, { Component } from "react";
import axios from 'axios';
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
    const addItem = {
      id: this.state.allTodoList.length + 1,
      title: title,
      date: new Date().toLocaleString(),
      complete: false,
    }
    axios.post('http://localhost:7000/allTodoList', addItem).then(() => {
      this.setState((state) => {
        return {
          ...state,
          allTodoList: [
            ...state.allTodoList,
            addItem
          ],
        };
      });
    })
  }
  checkedItem(todoItem) {
    const newAllTodoList = [...this.state.allTodoList];
    const element = newAllTodoList.find(item => item.id === todoItem.id);
    axios.patch(`http://localhost:7000/allTodoList/${element.id}`, { ...element, complete: !todoItem.complete }).then(() => {
      this.setState((prevState) => {
        const newAllTodoList = prevState.allTodoList.map((obj) => {
          if (obj.id === todoItem.id) {
            return { ...obj, complete: !todoItem.complete };
          }
          return obj;
        });
        return {
          allTodoList: newAllTodoList,
        };
      });
    })


  }
  deleteItem(todoItem) {
    let newAllTodoList = [...this.state.allTodoList];
    const element = newAllTodoList.find(item => item.id === todoItem.id);
    if (element !== -1) {
      axios.delete(`http://localhost:7000/allTodoList/${element.id}`).then(() => {
        newAllTodoList = newAllTodoList.filter(item => item.id !== todoItem.id)
        this.setState({ allTodoList: newAllTodoList });
      })
    }
  }
  showItem(condition) {
    console.log(condition)
    const AllTodoList = [...this.state.allTodoList];
    if (condition === 'all') {
      axios.get('http://localhost:7000/allTodoList').then((response) => {
        const lists = response
        this.setState({ allTodoList: [...lists.data] })
      })
    } else if (condition === 'done') {
      axios.get('http://localhost:7000/allTodoList', {
        params: {
          complete: true,
        }
      }).then((response) => {
        const lists = response
        this.setState({ allTodoList: [...lists.data] })
      })
    } else if (condition === 'progress') {
      axios.get('http://localhost:7000/allTodoList', {
        params: {
          complete: false,
        }
      }).then((response) => {
        const lists = response
        this.setState({ allTodoList: [...lists.data] })
      })
    }

  }
  componentDidMount() {
    axios.get('http://localhost:7000/allTodoList').then((response) => {
      const lists = response
      this.setState({ allTodoList: [...lists.data] })
    })
  }
  render() {
    return (
      <div className="todo-app">
        <AddTodo addTodoItem={this.addTodo} />
        <div className="todo-filter">
          <FilterTodo showTodoList={this.showItem} />
        </div>
        {this.state.allTodoList.length > 0 ? (
          <>
            <div className="todo-body">
              <TodoList
                allTodoList={this.state.allTodoList}
                checkTodoItem={this.checkedItem}
                deleteTodoItem={this.deleteItem}
              />
            </div>
          </>
        ) : (
          <>
            <h4 className="no-data">لیستی برای نمایش وجود ندارد</h4>
          </>
        )}
      </div>
    );
  }
}
