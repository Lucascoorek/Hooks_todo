import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodo from "./EditTodo";

export default function Todo({
  id,
  task,
  completed,
  editTodo,
  removeTodo,
  toggleTodo
}) {
  const [editing, setEditing] = useToggleState(false);
  return (
    <div>
      {editing ? (
        <EditTodo
          editTodo={editTodo}
          id={id}
          task={task}
          setEditing={setEditing}
        />
      ) : (
        <>
          <p
            style={completed ? { textDecoration: "line-through" } : null}
            onClick={() => toggleTodo(id)}
          >
            {task}
          </p>
          <button onClick={() => removeTodo(id)}>Delete</button>
          <button onClick={setEditing}>Edit</button>
        </>
      )}
    </div>
  );
}
