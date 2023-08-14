import React from "react";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-slate-600 text-white py-8 px-4">
      ERP App
      <Cart />
    </header>
  );
};

export default Header;
