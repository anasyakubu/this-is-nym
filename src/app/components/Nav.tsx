import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/nym.png";
import PrimaryBtn from "@/app/components/PrimaryBtn";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-transparent" style={{ color: "#122231" }}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/About">About</Link>
              </li>
              <li>
                <Link href="/#why">Why Us</Link>
              </li>
              <li>
                <Link href="/">Products</Link>
              </li>
              <li>
                <Link href="/">Career</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <a className="m-4 bg-transparent normal-case text-xl">
            <Image className="w-12" src={Logo} alt="Logo" />
          </a>
        </div>

        <div
          className="navbar-center hidden lg:flex"
          style={{ color: "#122231" }}
        >
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/#why">Why Us</Link>
            </li>
            <li>
              <Link href="/">Products</Link>
            </li>
            <li>
              <Link href="/">Career</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="">
            <PrimaryBtn text="Explore our technology" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
