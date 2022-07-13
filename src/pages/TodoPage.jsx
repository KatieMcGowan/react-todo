import React, { useState } from "react";
import Todos from "../components/Todos";
import CreateToDoForm from "../components/CreateTodoForm";

const TodoPage = () => {
  const [state, setState] = useState({
    todos: [
      {
        body: "Water the plants",
        completed: false,
        key: 1
      },
      {
        body: "Refactor code",
        completed: false,
        key: 2
      },
      {
        body: "Buy supplies for screen door",
        completed: false,
        key: 3
      },
      {
        body: "Make dinner",
        completed: false,
        key: 4
      },
      {
        body: "Make weekend plans",
        completed: false,
        key: 5
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
  
  const handleUpdateTodo = (todo) => {
    let updatedTodos = state.todos
    for (let i = 0; i < updatedTodos.length; i++) {
      if (todo.key === updatedTodos[i].key) {
        updatedTodos.splice(i, 1, todo)
      };
    };
    setState({
      todos: updatedTodos,
      update: true,
    });
  };
  
  const handleDeleteTodo = (todo) => {
    let deletedTodos = state.todos;
    for (let i = 0; i < deletedTodos.length; i++) {
      if (todo === deletedTodos[i]) {
        deletedTodos.splice(i, 1)
      };
    };
    setState({
      todos: deletedTodos,
      update: true,
    });
  };

  return(
    <div className="todospage">
      <h1>Your To-Do's</h1>
        <Todos 
          todos={state.todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        /> 
        <CreateToDoForm
          todos={state.todos}
          handleCreateToDo={handleCreateToDo}
        />  
    </div>
  );
};

export default TodoPage;