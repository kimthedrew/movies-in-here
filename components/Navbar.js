
"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-neutral-800 space-x-4">
      <div className="flex items-center space-x-10 text-neutral-100 font-extrabold italic">
        <Link href="/" aria-label="Home">
          <div className="flex items-center space-x-2">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-12 w-12 rounded-full"
            />
            <h1>Movies In Here</h1>
          </div>
        </Link>
      </div>

      <div className="flex items-center text-neutral-100">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="/series">Series</a>
          </li>
        </ul>
        <div className="ml-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/login">Log in</a>
            </li>
            <li>
              <a href="/signup">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
