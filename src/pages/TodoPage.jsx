import React, { useState } from "react";
import Todos from "../components/Todos";
import CreateToDoForm from "../components/CreateTodoForm";

const TodoPage = () => {
  const [state, setState] = useState({
    todos: [
      {
        body: "Water the plants",
        completed: false,
      },
      {
        body: "Refactor code",
        completed: false,
      },
      {
        body: "Buy supplies for screen door",
        completed: false,
      },
      {
        body: "Make dinner",
        completed: false,
      },
      {
        body: "Make weekend plans",
        completed: false,
      }
    ],
    update: true
  });

  const handleCreateToDo = (todo) => {
    let newTodos = state.todos;
    newTodos.push(todo);
    setState({
      todos: newTodos,
      update: true,
    });
  };  

  return(
    <div className="todospage">
      <h1>Your To-Do's</h1>
        <Todos 
          todos={state.todos}
        /> 
        <CreateToDoForm
          handleCreateToDo={handleCreateToDo}
        />  
    </div>
  );
};

export default TodoPage;