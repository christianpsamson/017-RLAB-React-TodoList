import React from "react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

function TodoItem({
  id,
  checked,
  item,
  handleCheck,
  handleDelete,
  handleEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(item);

  const handleEditClick = () => {
    setIsEditing(true);
    console.log(isEditing);
  };

  const handleSaveEdit = () => {
    handleEdit(id, editedTodo);
    setIsEditing(false);
    console.log(isEditing);
  };

  return (
    <li className="item" key={id}>
      <input
        id={`checkbox-${id}`}
        type="checkbox"
        onChange={() => handleCheck(id)}
        checked={checked}
      />

      {isEditing ? (
        <>
          <input
            className="editTask"
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          <label
            htmlFor={`checkbox-${id}`}
            style={checked ? { color: "gray" } : null}
          >
            {item}
          </label>
          <RiEdit2Fill
            onClick={() => handleEditClick()}
            role="button"
            tabIndex="0"
          />
          <FaTrash
            className={`trashIcon ${checked ? "" : "disabled"}`}
            onClick={checked ? () => handleDelete(id) : undefined}
            role="button"
            tabIndex="1"
            disabled={!checked}
          />
        </>
      )}
    </li>
  );
}

export default TodoItem;
