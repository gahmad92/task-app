// export default function TaskItem({ task, index, onDelete, onToggle, onEdit }) {
//   return (
//     <li
//       className={`flex justify-between items-center p-3 rounded-md border ${
//         task.completed
//           ? "border-green-400 bg-green-900/20"
//           : "border-gray-700 bg-gray-800"
//       }`}
//     >
//       <span
//         onClick={() => onToggle(index)}
//         className={`flex-1 cursor-pointer ${
//           task.completed ? "line-through text-gray-400" : "text-white"
//         }`}
//       >
//         {task.text}
//       </span>

//       <div className="flex gap-2 ml-4">
//         <button
//           onClick={() => onEdit(index)}
//           className="text-yellow-400 hover:text-yellow-300"
//         >
//           ✏️
//         </button>
//         <button
//           onClick={() => onDelete(index)}
//           className="text-red-500 hover:text-red-400"
//         >
//           🗑️
//         </button>
//       </div>
//     </li>
//   );
// }
