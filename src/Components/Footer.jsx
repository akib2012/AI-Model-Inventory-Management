import React from "react";
import logoimg from "../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* 🔹 TOP SECTION */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* LOGO + TEXT */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <div className="flex items-center gap-3">
              <img
                src={logoimg}
                alt="ModelTrack AI"
                className="w-12 h-12 rounded-full"
              />
              <h2 className="text-xl font-semibold text-[#00C9A7]">
                ModelTrack AI
              </h2>
            </div>

            <p className="text-sm text-gray-400 max-w-sm">
              AI Model Inventory & Management platform to track, manage,
              and organize your AI models efficiently.
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00C9A7] transition"
            >
              <i className="fa-brands fa-x-twitter text-2xl"></i>
            </a>

            <Link
              to="https://github.com/akib2012"
              target="_blank"
              className="hover:text-[#00C9A7] transition"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </Link>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00C9A7] transition"
            >
              <i className="fa-brands fa-youtube text-2xl"></i>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00C9A7] transition"
            >
              <i className="fa-brands fa-facebook text-2xl"></i>
            </a>
          </div>
        </div>

        {/* 🔹 DIVIDER */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* 🔹 BOTTOM SECTION */}
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center text-sm text-gray-400 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} ModelTrack AI. All rights reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="text-[#00C9A7] font-medium">Akib Bhuiyan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
