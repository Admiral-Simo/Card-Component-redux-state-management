import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCard, selectTotal } from "../../features/cardSlice";
import Bag from "../Bag/";
import {clearCard} from '../../features/cardSlice'

const Bags = () => {
  const total = useSelector(selectTotal);
  const card = useSelector(selectCard);
    const dispatch = useDispatch();

    const clearCardItems = () => {
        dispatch(clearCard());
    }


  return (
    <div className="mx-auto max-w-5xl">
      {/* Items */}
      {card.map((item) => {
        const { id, title, price, img, amount } = item;
        return (
          <Bag key={id} id={id} title={title} price={price} img={img} amount={amount} />
        );
      })}
      {/* Total */}
      <div className="h-0.5 mb-3 rounded-full bg-gray-700 w-full" />
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-semibold text-xl">Total</h2>
        <h2 className="font-semibold text-xl">${total}</h2>
      </div>
      {/* Clear Cards */}
      <div className="flex mt-10 justify-center items-center w-full">
        <button onClick={clearCardItems} className="border mb-20 border-red-500 text-red-500 py-0.5 px-2 uppercase rounded-md tracking-widest">
          clear card
        </button>
      </div>
    </div>
  );
};

export default Bags;
