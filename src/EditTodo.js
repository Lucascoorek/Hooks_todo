import React from "react";
import useInputState from "./hooks/useInputState";

export default function EditTodo({ id, task, editTodo, setEditing }) {
  const [input, handeChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, input);
        reset();
        setEditing();
      }}
    >
      <input type="text" value={input} onChange={handeChange} />
    </form>
  );
}
