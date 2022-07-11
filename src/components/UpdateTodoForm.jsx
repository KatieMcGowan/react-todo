import React, { useState } from "react";

const UpdateToDoForm = (props) => {

  const [todo, setTodo] = useState("");

  const handleInputChange = (event) => {
    setTodo(event.target.value)
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedTodo = props.todo.todo;
    updatedTodo.body = todo;
    props.handleUpdateTodo(updatedTodo);
    props.toggleBodyForm();
  }

  return(
    <div style={props.style} className="updatetodoform">
      <form onSubmit={handleFormSubmit}>
        <input
          autoFocus={props.autoFocus}
          onChange={handleInputChange}
          placeholder="Update your To-Do"
          value={todo}
        />
        <button type="submit">Save</button>  
      </form>
    </div>
  )
};

export default UpdateToDoForm;

