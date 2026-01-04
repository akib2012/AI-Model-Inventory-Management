import React, { useContext } from "react";
import { Link, Outlet } from "react-router";
import {
  FiMenu,
  FiHome,
  FiBox,
  FiShoppingCart,
  FiUser,
  FiLogOut
} from "react-icons/fi";
import ThemeToggle from "../Components/ThemeToggle";
import Authcontext from "../ContextAuth/Authcontext";

const DashboardLayout = () => {
  const { user, singout, loading } = useContext(Authcontext);
  const handlelogout = () => {
    singout().catch((error) => console.log(error));
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* ================= DRAWER CONTENT ================= */}
      <div className="drawer-content flex flex-col">

        {/* ---------- NAVBAR ---------- */}
        <nav className="navbar w-full bg-base-300">
          <div className="flex items-center gap-2">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost lg:hidden"
            >
              <FiMenu size={20} />
            </label>

            <Link to="/" className="btn btn-ghost gap-2">
              <FiHome />
              <span className="hidden text-2xl text-[#0F766E]  sm:inline">Home</span>
            </Link>
          </div>

          <div className="flex-1 px-4 text-[#0F766E] font-semibold">ModelTrack AI Dashboard</div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-circle btn-ghost">
                <FiUser size={20} />
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 w-44 bg-base-100 shadow rounded-box"
              >
                <li>
                  <Link to="/deshboard/profile">
                    <FiUser /> Profile
                  </Link>
                </li>
                <li>
                  <Link to="/deshboard">
                    <FiHome /> Dashboard Home
                  </Link>
                </li>
                <li>
                  <button onClick={handlelogout}>
                    <FiLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* ---------- PAGE CONTENT ---------- */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* ================= SIDEBAR ================= */}
      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

       
        <div className="flex min-h-full flex-col items-start bg-base-200 
                        is-drawer-close:w-20 
                        is-drawer-open:w-80">

          <ul className="menu w-full grow">

            <li>
              <Link
                to="/deshboard"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-4"
                data-tip="Dashboard"
              >
                <FiHome size={28} />
                <span className="is-drawer-close:hidden">
                  Dashboard Overview
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/deshboard/my-models"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-4"
                data-tip="My Models"
              >
                <FiBox size={28} />
                <span className="is-drawer-close:hidden">
                  My Models
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/deshboard/purchases"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-4"
                data-tip="Purchases"
              >
                <FiShoppingCart size={28} />
                <span className="is-drawer-close:hidden">
                  My Purchases
                </span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
