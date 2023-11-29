import { useState, useEffect } from "react";

function addPrefix(value) {
  return value < 10 ? `0${value}` : `${value}`;
}

function getTimer(totalSeconds) {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  let seconds = totalSeconds - hours * 3600 - minutes * 60;

  hours = addPrefix(hours);
  minutes = addPrefix(minutes);
  seconds = addPrefix(seconds);

  return { hours, minutes, seconds };
}

function Timer() {
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  function start() {
    setTimerRunning(true);
  }

  function pause() {
    setTimerRunning(false);
  }

  function reset() {
    setTimer(0);
    setTimerRunning(false);
  }

  useEffect(() => {
    let intervalId;
    if (timerRunning) {
      intervalId = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else {
      setTimerRunning(false);
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [timerRunning]);

  const { hours, minutes, seconds } = getTimer(timer);

  return (
    <div className="m-5">
      <div className="flex gap-10 items-center">
        <div className="flex gap-4 text-5xl">
          <p>{hours}</p>
          <p>:</p>
          <p>{minutes}</p>
          <p>:</p>
          <p>{seconds}</p>
        </div>
        <div className="flex gap-4">
          {!timerRunning ? (
            <button
              className="text-white rounded bg-blue-700 hover:bg-blue-800 font-medium px-4 py-2.5"
              onClick={start}
            >
              Start
            </button>
          ) : (
            <>
              <button
                className="text-white rounded bg-blue-700 hover:bg-blue-800 font-medium px-4 py-2.5"
                onClick={pause}
              >
                Pause
              </button>
              <button
                className="text-white rounded bg-blue-700 hover:bg-blue-800 font-medium px-4 py-2.5"
                onClick={reset}
              >
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Timer;
