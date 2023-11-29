import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import { routeList } from "../../routeConfig";

function Header() {
  const { pathname } = useLocation();

  const routeName = useMemo(() => {
    return routeList.find((route) => route.path === pathname).name;
  }, [pathname]);

  return (
    <nav className="bg-white py-2 md:py-4">
      <div className="container px-4 pb-3 mx-auto md:flex md:items-center border-b-4 border-indigo-500">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="font-bold text-5xl text-indigo-600">
            GTFI
          </Link>
          <div>
            <p className="text-3xl">{routeName}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
