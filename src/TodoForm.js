import React from "react";
import useInputState from "./hooks/useInputState";

export default function TodoForm({ addTodo }) {
  const [input, handelInput, reset] = useInputState("");
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(input);
          reset();
        }}
      >
        <input type="text" value={input} onChange={handelInput} />
      </form>
    </div>
  );
}
