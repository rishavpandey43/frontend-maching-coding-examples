import { useState } from "react";

const gridSize = 9;

const winnerCells = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner(scoreBoard) {
  for (let i = 0; i < winnerCells.length; i++) {
    const [x, y, z] = winnerCells[i];

    if (
      scoreBoard[x] &&
      scoreBoard[x] === scoreBoard[y] &&
      scoreBoard[y] === scoreBoard[z]
    ) {
      return scoreBoard[x];
    }
  }

  return null;
}

function TickTackToe() {
  const [activePlayer, setActivePlayer] = useState("");

  const [scoreBoard, setScoreBoard] = useState([]);

  const [winner, setWinner] = useState(null);

  function onClick(index) {
    if (!winner) {
      setActivePlayer((activePlayer) => {
        activePlayer = activePlayer === "X" ? "0" : "X";
        const _scoreBoard = scoreBoard;

        scoreBoard[index] = activePlayer;
        setScoreBoard(_scoreBoard);

        setWinner(checkWinner(_scoreBoard));

        return activePlayer;
      });
    }
  }

  function reset() {
    setActivePlayer("");
    setScoreBoard([]);
    setWinner(null);
  }

  return (
    <main>
      <h1 className="mb-4 text-xl">
        Current player turn: {activePlayer === "X" ? "0" : "X"}
      </h1>
      <div className="flex">
        <div className="grid grid-rows-3 grid-flow-col text-4xl font-bold">
          {Array.from(Array(gridSize)).map((_, index) => (
            <button
              key={index}
              className="w-32 p-8 h-32 p-8 border border-black hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-gray-200"
              onClick={() => {
                onClick(index);
              }}
              disabled={scoreBoard[index] || winner}
            >
              {scoreBoard[index]}
            </button>
          ))}
        </div>
      </div>
      {winner && (
        <div>
          <p className="mt-5 text-2xl">Winner is {winner}</p>
          <button className="rounded bg-red-300 px-4 py-2 mt-3" onClick={reset}>
            Reset
          </button>
        </div>
      )}
    </main>
  );
}

export default TickTackToe;
