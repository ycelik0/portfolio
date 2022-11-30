import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Navbar = () => {
  const [navbarOn, setNavbarOn] = useState(false);
  const [windowWidth, setWindowWidth] = useState(false);

  const showNavbar = () => {
    setNavbarOn(true);
  };

  const responsiveNavHandler = () => {
    if (window.innerWidth < 1200) {
      setWindowWidth(true);
    } else {
      setWindowWidth(false)
    }
  };

  useEffect(() => {
    responsiveNavHandler()
  }, [window.innerWidth])
  

  window.addEventListener("resize", responsiveNavHandler);

  return (
    <div className="navbars">
      <header
        className={"bg-primary flex flex-col text-light p-5 w-full h-full"}
        style={{
          display: windowWidth ? "block" : "none",
        }}
      >
        <button className="w-fit self-end align-middle" onClick={showNavbar}>
          <MenuRoundedIcon />
        </button>
        <nav
          className="navbar-collapse bg-primary flex flex-col text-light p-5 w-full h-full absolute z-[10] place-self-center"
          style={{
            left: !navbarOn ? "-100%" : "0",
          }}
        >
          <ul className="flex flex-col justify-center text-center">
            <li className="py-1">
              <Link to={"/"} className="text-[2rem] tracking-widest">
                HOME
              </Link>
            </li>
            <li className="py-1">
              <Link to={"/"} className="text-[2rem] tracking-widest">
                ABOUT
              </Link>
            </li>
            <li className="py-1">
              <Link to={"/"} className="text-[2rem] tracking-widest">
                PROJECT
              </Link>
            </li>
            <li className="py-1">
              <Link to={"/"} className="text-[2rem] tracking-widest">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <aside
        className="side-navbar max-w-[350px] h-full bg-primary text-light flex flex-col justify-between align-middle py-[10rem]"
        style={{
          display: windowWidth ? "none" : "block",
        }}
      >
        <div className="logo w-[100px] h-[100px] bg-blue-500 mb-[40%] mx-auto"></div>
        <nav className="w-full">
          <ul className="flex flex-col justify-center text-center">
            <li className="py-2">
              <Link to={"/"} className="text-[1.25rem] tracking-widest">
                HOME
              </Link>
            </li>
            <li className="py-2">
              <Link to={"/"} className="text-[1.25rem] tracking-widest">
                ABOUT
              </Link>
            </li>
            <li className="py-2">
              <Link to={"/"} className="text-[1.25rem] tracking-widest">
                PROJECT
              </Link>
            </li>
            <li className="py-2">
              <Link to={"/"} className="text-[1.25rem] tracking-widest">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <div className="div my-auto">links</div>
      </aside>
    </div>
  );
};

export default Navbar;
