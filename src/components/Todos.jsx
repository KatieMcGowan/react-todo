import Todo from "./Todo";

const Todos = (props) => {
  return(
    <div className="todos">
      {props.todos.map((todo) => {
        return <Todo
                key={todo.key}
                todo={todo}
                handleCreateTodo={props.handleCreateTodo}
                handleUpdateTodo={props.handleUpdateTodo}
                handleDeleteTodo={props.handleDeleteTodo}
              />
      })}
    </div>
  )
}

export default Todos;