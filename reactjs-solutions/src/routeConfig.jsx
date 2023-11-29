// Routes import
import App from "./App.jsx";
import Counter from "./modules/1-counter";
import Accordion from "./modules/2-accordion";
import Timer from "./modules/3-timer";

export const routeList = [
  {
    id: 0,
    name: "Home",
    path: "/",
    element: <App />,
  },
  {
    id: 1,
    name: "Counter",
    path: "/01-counter",
    element: <Counter />,
  },
  {
    id: 2,
    name: "Accordion",
    path: "/02-accordion",
    element: <Accordion />,
  },
  {
    id: 3,
    name: "Timer",
    path: "/02-timer",
    element: <Timer />,
  },
];
