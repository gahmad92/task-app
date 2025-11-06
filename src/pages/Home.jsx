import React from "react";
import LearnMore from "./LearnMore";
import { Link } from "react-router-dom";

import HomePtow from "../components/HomePtow";

function Home() {
  return (
    <>
      <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 mt-4 ">
        Easily manage your task & progress{" "}
        <a href="#" className="font-semibold text-indigo-400"></a>
      </div>

      {/* new part here */}

      <div className="text-center mt-10">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          More than just a usual TO DO
        </h1>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
          its a complete Task managing web app made for organizations and
          professionals.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/manage-task"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Get started
          </Link>
          <Link to="/learn-more" className="text-sm/6 font-semibold text-white">
            How to use <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

    <div>
      <HomePtow/>
    </div>
      
    </>
  );
}

export default Home;
