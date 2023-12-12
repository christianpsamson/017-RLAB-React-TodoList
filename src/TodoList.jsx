import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const TodoList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Prepare breakfast",
    },
    {
      id: 2,
      checked: false,
      item: "Drive the kids to school",
    },
    {
      id: 3,
      checked: false,
      item: "Do the laundry",
    },
  ]);
  // Updating the state (item.checked) onChange
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label style={item.checked ? { color: "gray" } : null}>
              {item.item}
            </label>
            <AiFillDelete
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default TodoList;
