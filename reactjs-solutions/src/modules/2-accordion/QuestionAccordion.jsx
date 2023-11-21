/* eslint-disable react/prop-types */
import { useState } from "react";

function QuestionAccordion({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-2 m-3 p-5">
      <div className="flex gap-4 items-center">
        <button
          style={{
            border: "none",
            cursor: "pointer",
          }}
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "⬆️" : "⬇️"}
        </button>
        <h3>{question}</h3>
      </div>
      {open && <p className="text-left">{answer}</p>}
    </div>
  );
}

export default QuestionAccordion;
