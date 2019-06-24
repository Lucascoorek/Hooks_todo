import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./context/todos.contex";

export default function TodoForm() {
  const dispatch = useContext(DispatchContext);

  const [input, handelInput, reset] = useInputState("");
  console.log("Todo form render");

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
