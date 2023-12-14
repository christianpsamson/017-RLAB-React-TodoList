import TodoItem from "./TodoItem";

const TodoList = ({ items, handleCheck, handleDelete, handleEdit }) => {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              checked={item.checked}
              item={item.item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
      ) : (
        <p>You do not have todo list</p>
      )}
    </main>
  );
};

export default TodoList;
