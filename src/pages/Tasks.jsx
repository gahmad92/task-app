// import { useState } from "react";
// import TaskItem from "../components/TaskItem";

// export default function Tasks() {
//   const [tasks, setTasks] = useState([]);
//   const [text, setText] = useState("");
//   const [filter, setFilter] = useState("all");
//   const [editIndex, setEditIndex] = useState(null);

//   const handleAddTask = () => {
//     if (text.trim() === "") return;
//     if (editIndex !== null) {
//       const updatedTasks = [...tasks];
//       updatedTasks[editIndex].text = text;
//       setTasks(updatedTasks);
//       setEditIndex(null);
//     } else {
//       setTasks([...tasks, { text, completed: false }]);
//     }
//     setText("");
//   };

//   const handleDelete = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   const handleToggleComplete = (index) => {
//     const updated = [...tasks];
//     updated[index].completed = !updated[index].completed;
//     setTasks(updated);
//   };

//   const handleEdit = (index) => {
//     setText(tasks[index].text);
//     setEditIndex(index);
//   };

//   const filteredTasks = tasks.filter((t) => {
//     if (filter === "completed") return t.completed;
//     if (filter === "pending") return !t.completed;
//     return true;
//   });

//   return (

//     <>
   
//     <div className="p-6 max-w-2xl mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4 text-center text-cyan-400">
//         Manage Your Tasks
//       </h2>

//       <div className="flex gap-2 mb-4">
//         <input
//           type="text"
//           className="flex-1 p-2 rounded bg-gray-800 border border-gray-700 text-white"
//           placeholder="Enter a task..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <button
//           onClick={handleAddTask}
//           className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded text-white font-semibold"
//         >
//           {editIndex !== null ? "Update" : "Add"}
//         </button>
//       </div>

//       <div className="flex justify-center gap-4 mb-6">
//         {["all", "completed", "pending"].map((f) => (
//           <button
//             key={f}
//             onClick={() => setFilter(f)}
//             className={`px-4 py-1 rounded ${
//               filter === f ? "bg-cyan-500" : "bg-gray-700 hover:bg-gray-600"
//             }`}
//           >
//             {f.charAt(0).toUpperCase() + f.slice(1)}
//           </button>
//         ))}
//       </div>

//       <ul className="space-y-3">
//         {filteredTasks.length > 0 ? (
//           filteredTasks.map((task, index) => (
//             <TaskItem
//               key={index}
//               task={task}
//               index={index}
//               onDelete={handleDelete}
//               onToggle={handleToggleComplete}
//               onEdit={handleEdit}
//             />
//           ))
//         ) : (
//           <p className="text-gray-400 text-center">No tasks found.</p>
//         )}
//       </ul>
//     </div>
//      </>
//   );
// }


// // CHAI AUR CODE  wala 
// // aap.js k UI 

