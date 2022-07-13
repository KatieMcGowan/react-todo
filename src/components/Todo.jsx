import React, { useState } from "react";
import UpdateToDoForm from "./UpdateTodoForm";

const Todo = (props) => {
  const [state, setState] = useState({
    formStyle: {
      display: "none"
    }
  });

  const handleToggleBodyForm = () => {
    state.formStyle.display === "block"
    ? setState({ formStyle: {display: "none"}})
    : setState({ formStyle: {display: "block"}});
  };

  return(
    <li className="todo">
      {props.todo.body}
        <div>
          <span className="edit" onClick={() => handleToggleBodyForm}>Edit</span>
          <span className="remove" onClick={() => props.handleDeleteTodo(props.todo)}>Remove</span>
        </div>
      <UpdateToDoForm
        todo={props.todo}
        autoFocus={true}
        buttonName="Update To-Do"
        handleUpdateTodo={props.handleUpdateTodo}
        toggleBodyForm={handleToggleBodyForm}
      />  
    </li>
  );
};

export default Todo;