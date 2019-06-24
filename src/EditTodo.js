import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./context/todos.contex";

export default function EditTodo({ id, task, setEditing }) {
  const dispatch = useContext(DispatchContext);
  const [input, handeChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, editedText: input });
        reset();
        setEditing();
      }}
    >
      <input type="text" value={input} onChange={handeChange} />
    </form>
  );
}
