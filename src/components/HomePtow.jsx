import React from "react";

function HomePtow() {
  return (
    <>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:ring-1 after:ring-inset after:ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            {/* Background circle gradient */}
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle
                r="512"
                cx="512"
                cy="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset="1" stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>

            {/* Left text section */}
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Boost your productivity. Start using our app today.
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"></div>
            </div>

            {/* Right-side To-Do App */}
            <div className="relative mt-16 lg:mt-8 lg:flex lg:items-center lg:justify-end">
              <div className="w-80 bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg text-white">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Manage easily your tasks</h3>
                  <button className="text-sm px-2 py-1 bg-indigo-600 hover:bg-indigo-700 rounded-md transition">
                    + Add
                  </button>
                </div>

                {/* Input */}
                <div className="flex items-center mb-3">
                  <input
                    type="text"
                    placeholder="New task..."
                    className="flex-1 text-sm px-2 py-1.5 rounded-l-md bg-gray-800 border border-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 outline-none"
                  />
                  <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 rounded-r-md text-sm">
                    Add
                  </button>
                </div>

                {/* Task list */}
                <ul className="space-y-2 max-h-40 overflow-y-auto pr-1">
                  <li className="flex items-center justify-between bg-gray-800/70 px-3 py-2 rounded-md">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox"
                      readOnly 
                      className="accent-indigo-600" />
                      <span className="text-sm">Design your work schedule</span>
                    </div>
                    <button className="text-red-400 hover:text-red-500 text-xs">
                      ✕
                    </button>
                  </li>
                  <li className="flex items-center justify-between bg-gray-800/70 px-3 py-2 rounded-md">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="accent-indigo-600"
                      />
                      <span className="text-sm line-through text-gray-400">
                        Plan your week
                      </span>
                    </div>
                    <button className="text-red-400 hover:text-red-500 text-xs">
                      ✕
                    </button>
                  </li>
                  <li className="flex items-center justify-between bg-gray-800/70 px-3 py-2 rounded-md">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox"
                      readOnly 
                      className="accent-indigo-600" />
                      <span className="text-sm">Prepare notes</span>
                    </div>
                    <button className="text-red-400 hover:text-red-500 text-xs">
                      ✕
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePtow;
