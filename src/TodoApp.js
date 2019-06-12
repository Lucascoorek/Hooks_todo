import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import uuid from "uuid/v4";

function TodoApp() {
  const initalTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const [todos, setTodos] = useState(initalTodos);
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = todoInput => {
    setTodos([...todos, { id: uuid(), task: todoInput, completed: false }]);
  };
  const removeTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  const toggleTodo = id => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };
  const editTodo = (id, editedText) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, task: editedText } : todo
    );
    setTodos(newTodos);
  };
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
