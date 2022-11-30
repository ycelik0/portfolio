import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Navbar = () => {
  const [navbarStatus, setNavbarStatus] = useState("navbar-collapse");
  console.log(navbarStatus);
  const navbarHandler = () => {
    setNavbarStatus("navbar-collapsed");
    navbarStatus === "navbar-collapsed"
      ? setNavbarStatus("navbar-collapse")
      : setNavbarStatus("navbar-collapsed");
  };

  return (
    <div className="navbars">
      <header
        className={"bg-primary flex flex-col text-light align-middle w-full h-[64px]"}>
        <button
          className="w-fit self-end align-middle z-50 p-5"
          onClick={navbarHandler}
        >
          <MenuRoundedIcon />
        </button>
        <nav
          className={`${navbarStatus} bg-primary flex flex-col text-light w-full h-full z-[10] absolute justify-center`}
        >
          <ul className="flex flex-col justify-center text-center">
            <li className="py-2">
              <Link to={"/"} className="text-[2rem] tracking-widest" onClick={navbarHandler}>
                HOME
              </Link>
            </li>
            <li className="py-2">
              <Link to={"/"} className="text-[2rem] tracking-widest" onClick={navbarHandler}>
                ABOUT
              </Link>
            </li>
            <li className="py-2">
              <Link to={"/"} className="text-[2rem] tracking-widest" onClick={navbarHandler}>
                PROJECT
              </Link>
            </li>
            <li className="py-2">
              <Link to={"/"} className="text-[2rem] tracking-widest" onClick={navbarHandler}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* <aside
        className="side-navbar max-w-[350px] h-full bg-primary text-light flex flex-col justify-between align-middle py-[10rem]">
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
      </aside> */}
    </div>
  );
};

export default Navbar;
