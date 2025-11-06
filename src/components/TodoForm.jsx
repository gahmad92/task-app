import React from "react";
import { useState } from "react";
import { useTodos } from "../contexts/index.js";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodos();

  let add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <>
      <form onSubmit={add} className="flex">
        <input
          type="text"
          placeholder="Manage task..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
