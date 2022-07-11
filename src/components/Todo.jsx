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
    <div className="todo">
      <li>{props.todo.body}</li>
        <div>
          <span className="edit" onClick={handleToggleBodyForm}>Edit</span>
        </div>
      <UpdateToDoForm
        todo={props}
        autoFocus={true}
        buttonName="Update To-Do"
        handleUpdateTodo={props.handleUpdateTodo}
        toggleBodyForm={handleToggleBodyForm}
      />  
    </div>
  );
};

export default Todo;