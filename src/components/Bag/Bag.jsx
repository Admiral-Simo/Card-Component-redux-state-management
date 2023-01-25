import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { removeItemById } from "../../features/cardSlice";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { increaseAmountById, decreaseAmountById } from "../../features/cardSlice";

const Bag = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();
  const increaseItemAmountById = () => {
    dispatch(increaseAmountById(id))
  }
  const decreaseItemAmountById = () => {
    dispatch(decreaseAmountById(id))
  }
  const removeItem = () => {
    dispatch(removeItemById(id));
  };
  return (
    <div className="w-full flex flex-row mb-5 justify-between tracking-widest">
      <div className="flex flex-row h-full">
        <img
          className="object-cover h-28 w-18 mr-7"
          src={img}
          alt="product_picture"
        />
        <div className="flex flex-col justify-around">
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-[#1c3f5c] font-medium">{price}</p>
          </div>
          <button onClick={removeItem} className="text-blue-400 self-start">
            remove
          </button>
        </div>
      </div>
      {/* Amount Control */}
      <div className="flex flex-col justify-center items-center">
        <button onClick={increaseItemAmountById}>
          <SlArrowUp className="" />
        </button>
        <h1>{amount}</h1>
        <button onClick={decreaseItemAmountById}>
          <SlArrowDown className="" />
        </button>
      </div>
    </div>
  );
};

export default Bag;
