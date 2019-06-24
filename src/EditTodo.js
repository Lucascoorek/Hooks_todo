import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { TodoContext } from "./context/todos.contex";

export default function EditTodo({ id, task, setEditing }) {
  const { dispatch } = useContext(TodoContext);
  const [input, handeChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, editedText: input });
        // editTodo(id, input);
        reset();
        setEditing();
      }}
    >
      <input type="text" value={input} onChange={handeChange} />
    </form>
  );
}
