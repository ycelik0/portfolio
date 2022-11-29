import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <aside className="max-w-[350px] h-screen bg-primary text-light flex flex-col align-middle">
      <div className="logo w-[100px] h-[100px] bg-blue-500  my-[50%]"></div>
      <nav className="w-full">
        <ul className="flex flex-col justify-center text-center">
          <li>
            <Link to={'/'}>
              <p className="text-3xl">
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <p className="text-3xl">
                About
              </p>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <p className="text-3xl">
                Project
              </p>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <p className="text-3xl">
                Contact
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Navbar;
