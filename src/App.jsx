import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My Todo List</h1>
      <TodoList />
    </>
  );
}

export default App;
