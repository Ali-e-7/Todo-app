import react, { Fragment } from "react";
import Icon from "@mdi/react";
import { mdiPencil, mdiTrashCan } from "@mdi/js";

export default function TodoList(props) {
  function handelCheck(todoItem) {
    props.checkTodoItem(todoItem);
  }
  function handeleDelete(todoItem) {
    props.deleteTodoItem(todoItem);
  }

  return  props.allTodoList.map((item) => (
    <Fragment key={item.id}>
      <div className="todo-list">
        <div className="todo-content">
          <input
            type="checkbox"
            className="chk"
            id={`chk` + item.id}
            checked={item.complete}
            onChange={() => handelCheck(item)}
          />
          <label htmlFor={`chk` + item.id} className="complete-btn" />
          <div>
            <h4 className="todo-title">
              {item.title}
              {item.complete}{" "}
            </h4>
            <h6 className="todo-date">{item.date}</h6>
          </div>
        </div>
        <div className="todo-action">
          <button
            className="action-btn delete"
            onClick={() => handeleDelete(item)}
          >
            <Icon path={mdiTrashCan} size={0.9} />
          </button>
          <button className="action-btn edit">
            <Icon path={mdiPencil} size={0.9} />
          </button>
        </div>
      </div>
    </Fragment>
  ));
}
