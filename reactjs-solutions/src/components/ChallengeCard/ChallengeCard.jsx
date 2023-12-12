import { Link } from "react-router-dom";

import EasyIcon from "../../assets/icons/difficulty_easy.svg";
import MediumIcon from "../../assets/icons/difficulty_medium.svg";
import HardIcon from "../../assets/icons/difficulty_hard.svg";
import TimerIcon from "../../assets/icons/timer_clock.svg";

// Define a mapping from difficulty levels to Tailwind CSS classes and optional icons
const difficultySettings = {
  easy: {
    color: "text-green-500",
    icon: <img src={EasyIcon} alt="easy-icon" />,
  },
  medium: { color: "text-yellow-500", icon: <img src={MediumIcon} alt="" /> },
  hard: { color: "text-red-500", icon: <img src={HardIcon} alt="" /> },
};

const ChallengeCard = ({
  path,
  title,
  difficulty,
  timeEstimate,
  description,
}) => {
  // Get the color and icon for the difficulty level
  const { color, icon } = difficultySettings[difficulty] || {};

  return (
    <div className="border-l-8 border-indigo-300 max-w-sm rounded overflow-hidden shadow-xl hover:shadow-md bg-white min-h-80">
      <div className="px-4 py-2 h-full">
        <Link to={path}>
          <div className="flex flex-col justify-between h-full">
            <div className="py-4 flex-grow">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base line-clamp-3">
                {description}
              </p>
            </div>
            <div className="pt-4 pb-2 flex items-center">
              {icon}
              <span
                className={`inline-block ${color} text-sm font-semibold ml-2`}
              >
                {difficulty}
              </span>
              <span className="inline-flex gap-2 items-center text-sm font-semibold text-gray-700 ml-4">
                <img src={TimerIcon} alt="timer" />
                <span>{timeEstimate}</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ChallengeCard;
