import React, { useState } from "react";

const UpdateToDoForm = (props) => {
  const [todo, setTodo] = useState({
    body: "",
    completed: false,
  });

  const handleInputChange = (event) => {
    setTodo({
      body: event.target.value,
      completed: false,
      key: props.todo.key,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.handleUpdateTodo(todo);
    props.toggleBodyForm();
  }

  return(
    <div style={props.style} className="updatetodoform">
      <form onSubmit={handleFormSubmit}>
        <input
          autoFocus={props.autoFocus}
          onChange={handleInputChange}
          placeholder="Update your To-Do"
          value={todo.body}
        />
        <button type="submit">Save</button>  
      </form>
    </div>
  )
};

export default UpdateToDoForm;

