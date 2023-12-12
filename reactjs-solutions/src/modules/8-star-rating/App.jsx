import { useState } from "react";
import StarRating from "./StarRating";

function App() {
  const [currentRating, setCurrentRating] = useState(2);
  return (
    <StarRating
      currentRating={currentRating}
      totalRating={5}
      setCurrentRating={setCurrentRating}
    />
  );
}

export default App;
