import { useState, useEffect } from "react";

function addPrefix(value) {
  return value < 10 && value >= 0 ? `0${value}` : `${value}`;
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

function convertToSeconds(hours, minutes, seconds) {
  hours = parseInt(hours);
  minutes = parseInt(minutes);
  seconds = parseInt(seconds);
  return (
    (hours > 0 ? hours * 3600 : 0) + (minutes > 0 ? minutes * 60 : 0) + seconds
  );
}

function CountdownTimer() {
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const [inputHour, setInputHour] = useState("");
  const [inputMinute, setInputMinute] = useState("");
  const [inputSecond, setInputSecond] = useState("");

  function start() {
    const second = convertToSeconds(inputHour, inputMinute, inputSecond);
    if (second) {
      setTimerRunning(true);
      setTimerStarted(true);

      setTimer(second);
    }
  }

  function pause() {
    setTimerRunning(false);
  }

  function reset() {
    setTimerRunning(false);
    setTimerStarted(false);
    setTimer("");
    setInputHour("");
    setInputMinute("");
    setInputSecond("");
  }

  useEffect(() => {
    let intervalId;

    if (timerRunning && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      setTimerRunning(false);
      const { hours, minutes, seconds } = getTimer(timer);
      setInputHour(hours);
      setInputMinute(minutes);
      setInputSecond(seconds);
    }

    return () => clearInterval(intervalId);
  }, [timerRunning, timer]);

  const { hours, minutes, seconds } = getTimer(timer);

  return (
    <div className="m-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          start();
        }}
      >
        <div className="flex gap-10 items-center">
          {timerStarted ? (
            <div className="flex gap-4 text-4xl">
              <p className="w-20">{hours}</p>
              <p>:</p>
              <p className="w-20">{minutes}</p>
              <p>:</p>
              <p className="w-20">{seconds}</p>
            </div>
          ) : (
            <div className="flex gap-4 text-4xl">
              <input
                type="number"
                required
                className="w-20 h-12 border-4"
                min={0}
                max={60}
                value={inputHour}
                onChange={(e) => {
                  setInputHour(e.target.value);
                }}
              />
              <p>:</p>
              <input
                type="number"
                required
                className="w-20 h-12 border-4"
                min={0}
                max={60}
                value={inputMinute}
                onChange={(e) => {
                  setInputMinute(e.target.value);
                }}
              />
              <p>:</p>
              <input
                type="number"
                required
                className="w-20 h-12 border-4"
                min={0}
                max={60}
                value={inputSecond}
                onChange={(e) => {
                  setInputSecond(e.target.value);
                }}
              />
            </div>
          )}
          <div className="flex gap-4">
            {(!timerStarted || (timerStarted && !timerRunning)) && (
              <button
                className="text-white rounded bg-blue-700 hover:bg-blue-800 font-medium px-4 py-2.5"
                type="submit"
              >
                Start
              </button>
            )}
            {timerStarted && timerRunning && (
              <button
                className="text-white rounded bg-blue-700 hover:bg-blue-800 font-medium px-4 py-2.5"
                onClick={pause}
                type="button"
              >
                Pause
              </button>
            )}
            {timerStarted && (
              <button
                className="text-white rounded bg-blue-700 hover:bg-blue-800 font-medium px-4 py-2.5"
                onClick={reset}
                type="reset"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default CountdownTimer;
