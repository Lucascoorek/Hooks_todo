import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}
export default TodoList;
