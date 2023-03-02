import react, { Component } from "react";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }
  handelChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handelSubmit() {
    if (this.state.input) {
      this.props.addTodoItem(this.state.input);
      this.setState({
        input: "",
      });
    }
  }
  render() {
    
    return (
      <div className="todo-header">
        <h3>اپلیکیشن برنامه ریزی</h3>
        <div className="add-todo-section">
          <input
            type="text"
            name="todo-app"
            className="add-todo-input"
            value={this.state.input}
            required
            onChange={this.handelChange}
            placeholder="لطفا برنامه خود را وارد کنید"
          />
          <button className="add-todo-btn" onClick={this.handelSubmit}>
            <span>ثبت</span>
          </button>
        </div>
      </div>

    );
  }
}
