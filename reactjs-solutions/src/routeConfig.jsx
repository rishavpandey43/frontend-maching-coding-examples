import { createBrowserRouter } from "react-router-dom";

// Routes import
import App from "./App.jsx";
import Counter from "./modules/1-counter";
import Accordion from "./modules/2-accordion";

export const routeList = [
  {
    id: 0,
    name: "App",
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
];

const router = createBrowserRouter(routeList);

export default router;
