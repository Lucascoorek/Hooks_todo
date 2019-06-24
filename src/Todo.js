import React, { useContext } from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodo from "./EditTodo";
import { TodoContext } from "./context/todos.contex";

export default function Todo({ id, task, completed }) {
  const { dispatch } = useContext(TodoContext);
  const [editing, setEditing] = useToggleState(false);
  return (
    <div>
      {editing ? (
        <EditTodo id={id} task={task} setEditing={setEditing} />
      ) : (
        <>
          <p
            style={completed ? { textDecoration: "line-through" } : null}
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
          >
            {task}
          </p>
          <button onClick={() => dispatch({ type: "REMOVE", id: id })}>
            Delete
          </button>
          <button onClick={setEditing}>Edit</button>
        </>
      )}
    </div>
  );
}
