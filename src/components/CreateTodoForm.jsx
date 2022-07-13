import React, { useState } from "react";

const CreateToDoForm = (props) => {

  const [todo, setTodo] = useState({
    body: "",
    completed: false,
    key: 0
  });

  const handleInputChange = (event) => {
    console.log(props)
    setTodo({
      body: event.target.value,
      completed: false,
    });
  }  

    const handleFormSubmit = (event) => {
      event.preventDefault();
      props.handleCreateToDo(todo);
      let key = props.todos.length + 1;
      setTodo({
        body: "",
        completed: false,
        key: key,
      });
    };

  return(
    <div className="createtodoform">
      <h1>Add a New To-Do</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="What's your task?"
          value={todo.body}
        />  
        <button type="submit" id="addtodo" className="button">Add To-Do</button>
      </form>
    </div>  
  );
};

export default CreateToDoForm;