import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";

export const TodoContext = createContext();
export const DispatchContext = createContext();
const initalTodos = JSON.parse(localStorage.getItem("todos") || "[]");
export function TodoProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, initalTodos);
  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
}
