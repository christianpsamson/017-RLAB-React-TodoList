import { useState } from "react";
import TodoList from "./TodoList";
import Footer from "./Footer";
import AddItem from "./AddItem";

// Default items in the list
const defaultItems = [
  // {
  //   id: 1,
  //   checked: false,
  //   item: "Prepare breakfast",
  // },
  // {
  //   id: 2,
  //   checked: false,
  //   item: "Drive the kids to school",
  // },
  // {
  //   id: 3,
  //   checked: false,
  //   item: "Do the laundry",
  // },
];

function App() {
  const [items, setItems] = useState(defaultItems);
  const [newTodo, setNewTodo] = useState("");

  // Callback function for onChange (mark checkbox)
  const handleCheck = (id) => {
    // prettier-ignore
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  };

  // Callback function for onClick (delete item)
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  //Callback function for handleSubmit (add item)
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodo("");

    const id = items.length ? items[0].id + 1 : 1;
    const myNewItem = { id, checked: false, item: newTodo };
    const listItems = [myNewItem, ...items];
    setItems(listItems);
  };

  // Callback function for onClick (edit item)
  const handleEdit = (id, editedTodo) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, item: editedTodo } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <header>My Todo List</header>
      <AddItem
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleSubmit={handleSubmit}
      />
      <TodoList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
