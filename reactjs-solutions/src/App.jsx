import "./App.css";
import { Link } from "react-router-dom";

import { routeList } from "./routeConfig";

function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">React JS Solutions</h1>
      <div className="mt-5 flex gap-3">
        {routeList
          .filter((route) => route.id)
          .map((challenge) => (
            <div
              key={challenge.id}
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            >
              <Link to={challenge.path}>
                <article className="overflow-hidden rounded-lg shadow-lg">
                  {/* <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a> */}

                  <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                      <a
                        className="no-underline hover:underline text-black"
                        href="#"
                      >
                        {challenge.name}
                      </a>
                    </h1>
                  </header>
                </article>
              </Link>
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
