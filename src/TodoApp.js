import React, { useEffect, useContext } from "react";
// import useTodoState from "./hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodoContext } from "./context/todos.contex";

function TodoApp() {
  // const todos = useContext(TodoContext);
  // useEffect(() => {
  //   window.localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <div>
      <h1>TodoList!!!</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
export default TodoApp;
