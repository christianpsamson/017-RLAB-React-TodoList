import React from "react";
import { FaPlus } from "react-icons/fa";

function AddItem({ newTodo, setNewTodo, handleSubmit }) {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Enter your task"
        required
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;
