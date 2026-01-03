import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import logoimg from "../assets/logo.png";
import Authcontext from "../ContextAuth/Authcontext";
import LoadingSpinner from "./LoadingSpinner";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { user, singout, loading } = useContext(Authcontext);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) return <LoadingSpinner />;

  const handlelogout = () => {
    singout().catch((error) => console.log(error));
  };

  /* 🔹 NAV LINKS */
  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/addmodel">Add Model</NavLink></li>
      <li><NavLink to="/viewsallmodels">View Model</NavLink></li>

      {user && (
        <>
          <li><NavLink to="/my-Purchase">Model Purchase</NavLink></li>
          <li><NavLink to="/my-models">My Models</NavLink></li>
        </>
      )}

      {/* 🔥 MOBILE + TABLET THEME TOGGLE */}
      <li className="lg:hidden flex items-center justify-between mt-3 pt-3 border-t border-gray-600">
        <span className="text-sm">Theme</span>
        <ThemeToggle />
      </li>

      {/* 🔥 MOBILE LOGIN / LOGOUT */}
      <li className="lg:hidden mt-3">
        {user ? (
          <button
            onClick={handlelogout}
            className="w-full text-left px-3 py-2 rounded-lg bg-[#0528f2] hover:bg-[#274bfa]"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="block px-3 py-2 rounded-lg bg-[#2563EB]"
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );

  return (
    <>
      {/* 🔥 NAVBAR */}
      <div className="z-10 fixed top-0 left-0 w-full bg-[#4c8581]">
        <div className="navbar max-w-7xl mx-auto px-4 text-white">

          {/* LEFT */}
          <div className="navbar-start">
            {/* MOBILE MENU */}
            <div className="dropdown">
              <div tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#1E3A8A]
                rounded-xl mt-3 w-56 p-3 shadow-lg z-50"
              >
                {navLinks}
              </ul>
            </div>

            {/* LOGO */}
            <div className="flex items-center gap-2">
              <img src={logoimg} className="w-10 h-10 rounded-full" />
              <Link to="/" className="hidden md:block text-xl font-semibold">
                ModelTrack AI
              </Link>
            </div>
          </div>

          {/* CENTER (DESKTOP MENU) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 font-medium">
              {navLinks}
            </ul>
          </div>

          {/* RIGHT (DESKTOP ONLY) */}
          <div className="navbar-end hidden lg:flex items-center gap-4">
            <ThemeToggle />

            {user ? (
              <>
                {/* PROFILE */}
                <div ref={menuRef} className="relative">
                  <img
                    src={user?.photoURL}
                    onClick={() => setOpenProfileMenu(!openProfileMenu)}
                    className="w-10 h-10 rounded-full border-2 border-[#274bfa] cursor-pointer"
                  />

                  {openProfileMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-lg z-50">
                      <div className="px-4 py-3 border-b border-gray-700">
                        <p className="font-semibold">{user?.displayName}</p>
                        <p className="text-sm text-gray-400 truncate">
                          {user?.email}
                        </p>
                      </div>
                      <Link
                        to="/deshboard"
                        onClick={() => setOpenProfileMenu(false)}
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Dashboard
                      </Link>
                    </div>
                  )}
                </div>

                <button
                  onClick={handlelogout}
                  className="px-6 py-2 rounded-xl bg-[#0528f2] hover:bg-[#274bfa]"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2 rounded-xl bg-gradient-to-r
                from-[#2563EB] to-[#0F766E]"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* OFFSET */}
      <div className="pt-20"></div>
    </>
  );
};

export default Header;
