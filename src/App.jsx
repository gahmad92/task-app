import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";


import "./App.css";
import LearnMore from "./pages/LearnMore";
import Manager from "./pages/Manager";

export default function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white font-sans text-2xl shadow-lg overflow-hidden inside-border">
          <nav className="flex justify-center gap-6 py-4 px-7 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-md">
            <Link to="/" className="custom-text hover:text-black  transition">
              Home
            </Link>
            <Link
              to="/manage-task"
              className="custom-text hover:text-black transition"
            >
              Tasks
            </Link>
          </nav>

          <Routes>
            <Route path="/" element={<>
            <Home/>

           
            </>}
            
            />
           
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/manage-task" element={<Manager/>} />

          </Routes>
        </div>
      </Router>
    </>
  );
}
