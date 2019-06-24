import React, { useContext, memo } from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodo from "./EditTodo";
import { DispatchContext } from "./context/todos.contex";

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext);
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
export default memo(Todo);
