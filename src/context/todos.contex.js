import React, { createContext, useReducer } from "react";
// import useTodoState from "../hooks/useTodoState";
import todoReducer from "../reducers/todo.reducer";

export const TodoContext = createContext();
// const initalTodos = JSON.parse(localStorage.getItem("todos") || "[]");
export function TodoProvider(props) {
  //   const todoStuff = useTodoState(initalTodos);
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}
