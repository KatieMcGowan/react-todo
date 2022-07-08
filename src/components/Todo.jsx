const Todo = (props) => {
  return(
    <div className="todo">
      <li>{props.todo.body}</li>
    </div>
  );
};

export default Todo;