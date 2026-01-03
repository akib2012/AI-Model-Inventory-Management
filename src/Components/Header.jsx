import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import logoimg from "../assets/logo.png";
import Authcontext from "../ContextAuth/Authcontext";
import LoadingSpinner from "./LoadingSpinner";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { user, singout, loading } = useContext(Authcontext);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const menuRef = useRef(null);
  const { theme, setTheme } = useTheme();

  /* const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])


  const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  } */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) return <LoadingSpinner />;

  const links = (
    <>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/addmodel">Add Model</NavLink>
          </li>
          <li>
            <NavLink to="/viewsallmodels">View Model</NavLink>
          </li>
        </div>

        <div>
          {user && (
            <div>
              <NavLink
                to="/my-Purchase"
                className="px-4 py-2 hover:bg-gray-700 transition"
                onClick={() => setOpenProfileMenu(false)}
              >
                Model Purchase
              </NavLink>
              <NavLink
                to="/my-models"
                className="px-4 py-2 hover:bg-gray-700 transition"
                onClick={() => setOpenProfileMenu(false)}
              >
                My Models
              </NavLink>
            </div>
          )}
        </div>
      </div>
      {/* <li>
        
              <input 
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
      </li> */}
    </>
  );

  const handlelogout = () => {
    singout()
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="z-10  fixed top-0 left-0 w-full bg-[#4c8581] ">
        <div className="text-white navbar max-w-10/12 mx-auto px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#1E3A8A] rounded-xl z-50 mt-3 w-52 p-3 shadow-lg"
              >
                {links}
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src={logoimg}
                alt="Logo"
              />
              <Link
                to="/"
                className=" hidden md:block  text-xl font-semibold text-white"
              >
                ModelTrack AI
              </Link>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base font-medium">
              {links}
            </ul>
          </div>

          <div className="navbar-end">
            {user ? (
              <div className="flex justify-center items-center gap-4">
                <div ref={menuRef} className="relative">
                  <img
                    src={user?.photoURL}
                    alt="Profile"
                    onClick={() => setOpenProfileMenu((prev) => !prev)}
                    className="w-10 h-10 rounded-full border-2 border-[#274bfa] object-cover cursor-pointer"
                  />

                  {openProfileMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-gray-800 text-gray-200 rounded-lg shadow-lg border border-gray-700 z-50">
                      <div className="px-4 py-3 border-b border-gray-700">
                        <p className="font-semibold">{user?.displayName}</p>
                        <p className="text-sm text-gray-400 truncate">
                          {user?.email}
                        </p>
                      </div>
                      <div className="flex flex-col py-2">
                        {/* <Link
                          to="/my-Purchase"
                          className="px-4 py-2 hover:bg-gray-700 transition"
                          onClick={() => setOpenProfileMenu(false)}
                        >
                          Model Purchase
                        </Link>
                        <Link
                          to="/my-models"
                          className="px-4 py-2 hover:bg-gray-700 transition"
                          onClick={() => setOpenProfileMenu(false)}
                        >
                          My Models
                        </Link> */}
                        <Link
                          to="/deshboard"
                          className="px-4 py-2 hover:bg-gray-700 transition"
                          onClick={() => setOpenProfileMenu(false)}
                        >
                          DeshBoard
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={handlelogout}
                  className="px-6 py-2 cursor-pointer rounded-xl bg-[#0528f2] hover:bg-[#274bfa] text-white font-semibold transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2 cursor-pointer rounded-xl bg-gradient-to-r from-[#2563EB] to-[#0F766E]
              shadow-lg
              hover:from-[#1D4ED8] hover:to-[#0D9488]
              hover:shadow-2xl"
              >
                Login
              </Link>
            )}
          </div>
          <div>
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
      </div>

      <div className="pt-20"></div>
    </>
  );
};

export default Header;
