import { Routes, Route } from "react-router-dom";

import { routeList } from "./routeConfig";

function Router() {
  return (
    <Routes>
      {routeList.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default Router;
