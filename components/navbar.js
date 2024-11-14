import React from "react";
import Logo from "../public/logo.svg"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-neutral-800 space-x-4">
      <div className="flex items-center space-x-10 text-neutral-100 font-extrabold italic">
        {/*logo  */}
        <img
          src={Logo}
          alt="logo"
          width={50}
          height={50}
        />
        <h1>Movies In Here</h1>
      </div>

      <div className="flex items-center text-neutral-100">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Movies" className="hover:text-blue-500">Movies</a>
          </li>
          <li>
            <a href="#Series">Series</a>
          </li>
        </ul>
        <div className="ml-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#Login">Log in</a>
            </li>
            <li>
              <a href="/Signup" className="hover:text-blue-500">sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;