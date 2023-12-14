import React from "react";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

function TodoItem({ id, checked, item, handleCheck, handleDelete }) {
  return (
    <li className="item" key={id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(id)}
        checked={checked}
      />
      <label style={checked ? { color: "gray" } : null}>{item}</label>
      <RiEdit2Fill />
      <FaTrash onClick={() => handleDelete(id)} role="button" tabIndex="0" />
    </li>
  );
}

export default TodoItem;
