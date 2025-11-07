import React, { useState } from "react";
import { useTodos } from "../contexts";
import TodoItem from "./TodoItem";

function TaskList() {
  const { todos } = useTodos();
  const [filter, setFilter] = useState("all"); 

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "not_completed") return !todo.completed;
    return true; // all
  });

  return (
    <div className="bg-gray-800/70 text-white p-5 rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
        <h2 className="text-xl font-semibold text-center sm:text-left">Task List</h2>
        <div className="space-x-2">
          <button
            className={`px-3 py-1 rounded-lg text-sm ${
              filter === "all" ? "bg-indigo-600" : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-3 py-1 rounded-lg text-sm ${
              filter === "completed"
                ? "bg-green-600"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className={`px-3 py-1 rounded-lg text-sm ${
              filter === "not_completed"
                ? "bg-red-600"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => setFilter("not_completed")}
          >
            Pending
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-y-3">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <p className="text-center text-gray-300">No tasks found.</p>
        )}
      </div>
    </div>
  );
}

export default TaskList;
