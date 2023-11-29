import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
      onClick={() => setCount((count) => count + 1)}
    >
      count is {count}
    </button>
  );
}

export default App;
