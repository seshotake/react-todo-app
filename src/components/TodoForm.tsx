import { useState } from "react";
import { useTodos } from "../context/TodosContext";

export default function TodoForm() {
  const { state, addTodo, deleteAllTodos } = useTodos();

  const [name, setName] = useState("");
  const [priority, setPriority] = useState(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(name, priority);
    setName("");
    setPriority(1);
  };

  const isNameEmpty = name.trim().length === 0;

  const isNoTodos = state.todos.length === 0;

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
      />
      <label htmlFor="priority">Priority</label>
      <select
        id="priority"
        name="priority"
        value={priority}
        onChange={(event) => setPriority(Number(event.currentTarget.value))}
      >
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>
      </select>
      <button disabled={isNameEmpty}>Add Todo</button>
      <button type="button" onClick={deleteAllTodos} hidden={isNoTodos}>
        Delete All
      </button>
    </form>
  );
}
