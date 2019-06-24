import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "./context/todos.contex";

function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}
export default TodoList;
