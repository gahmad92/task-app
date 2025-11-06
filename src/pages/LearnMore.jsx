import React from "react";

function LearnMore() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-400">
                A guide to manage task
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                A better task manager
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    ✏️ create to make new. <br />
                  </dt>
                  <dd className="inline">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    📝 Edit to modify. <br />
                  </dt>
                  <dd className="inline">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    ❌ delete to remove. <br />
                  </dt>
                  <dd className="inline">
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    📌 Highlight to prioritize (coming soon) <br />
                  </dt>
                  <dd className="inline">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    🏁 A flag to completed. <br />
                  </dt>
                  <dd className="inline">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
                <div className="grid grid-cols-2 divide-x divide-white/10 bg-gray-700/50">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white hover:bg-gray-700/50"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-500"
                    >
                      <path
                        d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                    Watch demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white hover:bg-gray-700/50"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-500"
                    >
                      <path
                        d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      />
                    </svg>
                    Contact for help
                  </a>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <img src="/app-work.png" alt="app-ss1" />
            <img src="/app-work2.png" alt="app-ss2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
