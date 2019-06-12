import { useState } from "react";
import uuid from "uuid/v4";
export default initalTodos => {
  const [todos, setTodos] = useState(initalTodos);
  return {
    todos,
    addTodo: todoInput => {
      setTodos([...todos, { id: uuid(), task: todoInput, completed: false }]);
    },
    removeTodo: id => {
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
    },
    toggleTodo: id => {
      const newTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(newTodos);
    },
    editTodo: (id, editedText) => {
      const newTodos = todos.map(todo =>
        todo.id === id ? { ...todo, task: editedText } : todo
      );
      setTodos(newTodos);
    }
  };
};
