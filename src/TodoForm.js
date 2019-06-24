import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { TodoContext } from "./context/todos.contex";

export default function TodoForm() {
  const { dispatch } = useContext(TodoContext);

  const [input, handelInput, reset] = useInputState("");
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD", input: input });
          // addTodo(input);
          reset();
        }}
      >
        <input type="text" value={input} onChange={handelInput} />
      </form>
    </div>
  );
}
