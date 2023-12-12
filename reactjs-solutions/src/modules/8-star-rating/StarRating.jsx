import StarIcon from "./StarIcon";

function StarRating({ currentRating, totalRating = 5, setCurrentRating }) {
  return (
    <div className="d-flex gap-2">
      {Array.from(Array(totalRating)).map((rating, index) => (
        <button
          key={rating}
          className="w-8"
          onClick={() => {
            setCurrentRating(index + 1);
          }}
        >
          <StarIcon filled={index < currentRating} />
        </button>
      ))}
    </div>
  );
}

export default StarRating;
