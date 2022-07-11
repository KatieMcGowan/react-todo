import Todo from "./Todo";

const Todos = (props) => {
  return(
    <div className="todos">
      {props.todos.map((todo, index) => {
        return <Todo
                key={index}
                todo={todo}
                handleCreateTodo={props.handleCreateTodo}
                handleUpdateTodo={props.handleUpdateTodo}
              />
      })}
    </div>
  )
}

export default Todos;