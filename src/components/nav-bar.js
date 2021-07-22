import React from "react";

// import MainNav from "./main-nav";
// import AuthNav from "../auth/auth-nav";
import { NavLink } from "react-router-dom";
import DropNav from "./drop-nav";

const NavBar = () => {
  // const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  // const updateMedia = () => {
  //   setDesktop(window.innerWidth > 768);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", updateMedia);
  //   return () => window.removeEventListener("resize", updateMedia);
  // });

  // return isDesktop ? (
  return (
    // <div className="nav-container mb-3">
    //   <nav className="navbar navbar-expand-md bg-dark">
    //     <div className="container-fluid">
    //       <NavLink
    //         to="/"
    //         exact
    //         activeClassName="router-link-exact-active"
    //       >
    //         <i className="fas fa-dungeon logo text-warning py-3 mr-4"></i>
    //       </NavLink>
    //       <MainNav />
    //       <AuthNav />
    //     </div>
    //   </nav>
    // </div>
    // ) : (
    <nav className="navbar navbar-expand-md bg-dark">
      <div className="container-fluid">
        <div className="row align-items-center py-2">
          <NavLink
            to="/"
            exact
            activeClassName="router-link-exact-active"
          >
            <i className="fas fa-dungeon logo text-warning mx-md-2 mx-4"></i>
          </NavLink>
          <h1 className="d-md-block d-none font-lg text-light m-0 pt-2 ml-3">
            Dungeoneer
          </h1>
        </div>
        <DropNav />
      </div>
    </nav>
  );
};

export default NavBar;
