import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./context/todos.contex";

export default function TodoForm() {
  const dispatch = useContext(DispatchContext);
  const [input, handelInput, reset] = useInputState("");
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD", input: input });
          reset();
        }}
      >
        <input type="text" value={input} onChange={handelInput} />
      </form>
    </div>
  );
}
