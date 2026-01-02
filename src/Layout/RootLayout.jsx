import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen bg-gray-300">
      <header>
        <Header />
      </header>

      <main className="flex-1  -pt-5">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
