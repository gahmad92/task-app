import React from "react";
import { useState, useEffect } from "react";
import { TodoProvider } from "../contexts";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import TaskList from "../components/TaskList";

function Manager() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((previousValue) => [{ id: uuidv4(), ...todo }, ...previousValue]);
  };

  const updatedTodo = (id, todo) => {
    setTodos((previousValue) =>
      previousValue.map((previousTodo) =>
        previousTodo.id === id ? todo : previousTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((previousValue) => previousValue.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((previousValue) =>
      previousValue.map((previousTodo) =>
        previousTodo.id === id
          ? { ...previousTodo, completed: !previousTodo.completed }
          : previousTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      {/* bg-[#172842] */}
      <TodoProvider
        value={{ todos, addTodo, updatedTodo, toggleComplete, deleteTodo }}
      >
        <div className=" bg-gray-800/70 min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Work
            </h1>
            <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}

              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
          {/* list with  filter */}
          {/* list with filter */}
          <div className="container mx-auto px-4 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column - TaskList */}
              <div className="bg-gray-800/70 border border-white/10 rounded-xl p-4 shadow-md">
                <TaskList />
              </div>

              {/* Right column - empty for now */}
              <div className="bg-gray-800/40 border border-white/10 rounded-xl p-4 shadow-inner flex items-center justify-center">
                <p className="text-gray-400 italic">
                  With that filter you can now easily check if that task is completed or not (even edit from there as well)
                </p>
              </div>
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default Manager;
