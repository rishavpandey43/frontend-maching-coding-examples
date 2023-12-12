import { useState } from "react";

const defaultTodo = ["Walk the dog", "Water the plants", "Wash the dishes"];

function TodoList() {
  const [todoItem, setTodoItem] = useState("");

  const [todoList, setTodoList] = useState(defaultTodo);

  function addTodo(e) {
    e.preventDefault();
    const _todoList = [...todoList];
    _todoList.push(todoItem);
    setTodoList(_todoList);
    setTodoItem("");
  }

  function deleteTodo(index) {
    const _todoList = [...todoList];
    _todoList.splice(index, 1);
    setTodoList(_todoList);
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={todoItem}
          required
          onChange={(e) => {
            setTodoItem(e.target.value);
          }}
          className="rounded-md border-2 p-2 m-3"
          placeholder="add a new todo item"
        />
        <button
          type="submit"
          className="rounded bg-teal-500 px-4 py-2 text-white"
        >
          Submit
        </button>
      </form>

      <div className="mt-10">
        <ul className="text-xl">
          {todoList.map((todo, index) => (
            <li key={todo} className="flex gap-3 items-center mb-2">
              {index + 1}. {todo}
              <button
                className="rounded bg-gray-300 px-4 py-2"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {!todoList.length && (
          <p className="text-xl text-red">
            There is no item in todo list, please add!
          </p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
