import React from "react";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";
import { selectAmount } from "../../features/cardSlice";

const Navbar = () => {
  const amountOfItems = useSelector(selectAmount);
  return (
    <nav className="bg-blue-600">
      <div className="h-20 max-w-5xl mx-3 flex flex-row justify-between items-center md:mx-auto">
        <h1 className="text-white text-3xl font-poppins font-bold">
          Redux Toolkit
        </h1>
        <div className="relative">
          <SlBasket className="text-3xl text-white font-bold" />
          <div className="absolute -top-3 -right-3 text-xl font-bold  w-7 h-7 rounded-full flex justify-center items-center bg-blue-300 text-white">
            {amountOfItems}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
