import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import { routeList } from "../../routeConfig";
import BackIcon from "../../assets/icons/back_icon_larger.svg";

function Header() {
  const { pathname } = useLocation();
  const routeName = useMemo(() => {
    return routeList.find((route) => route.path === pathname).title;
  }, [pathname]);

  return (
    <nav className="bg-white py-2 md:py-4 mb-5 container px-4 mx-auto">
      <div className="pb-3  md:flex md:items-center border-b-4 border-indigo-500">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="font-bold text-5xl text-indigo-600">
            <div className="flex gap=2">
              {pathname !== "/" && <img src={BackIcon} alt="back-icon" />}
              GTFI
            </div>
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
