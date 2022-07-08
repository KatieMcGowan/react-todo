import Todo from "./Todo";

const Todos = (props) => {
  return(
    <div className="todos">
      {props.todos.map((todo, index) => {
        return <Todo
                key={index}
                todo={todo}
              />
      })}
    </div>
  )
}

export default Todos;