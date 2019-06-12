import React, { useEffect } from "react";
import useTodoState from "./hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initalTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initalTodos
  );
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <h1>TodoList</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        editTodo={editTodo}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}
export default TodoApp;
