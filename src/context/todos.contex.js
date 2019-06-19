import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

export const TodoContext = createContext();

export function TodoProvider(props) {
  const todoStuff = useTodoState();
  return (
    <TodoContext.Provider value={todoStuff}>
      {props.children}
    </TodoContext.Provider>
  );
}
