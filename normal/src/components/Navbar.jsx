import React from "react";

const Navbar = ({ theme }) => {
  return (
    <nav className="w-full bg-blue-500 text-white p-4">
      <h1 className="text-xl font-bold">My Navbar - {theme} theme</h1>
    </nav>
  );
};

export default Navbar;