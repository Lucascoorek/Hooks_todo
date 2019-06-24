import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import TodoApp from "./TodoApp";
import { TodoProvider } from "./context/todos.contex";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
