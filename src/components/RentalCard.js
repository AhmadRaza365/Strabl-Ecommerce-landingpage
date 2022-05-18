import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsTag } from "react-icons/bs";

export default function RentalCard() {
  return (
    <div className="max-w-[300px] rounded-lg  shadow-xl">
      <img
        className="w-full aspect-video object-cover rounded-t-lg object-center"
        src="https://images.unsplash.com/photo-1563103123-52778b7410ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt=""
      />
      <div className="p-2 md:p-4">
        <h3 className="text-lg font-bold my-1">Truta Scott addict 300</h3>
        <div className="flex justify-between my-1">
          <h3 className="text-lg font-bold text-primary-red">
            AED650
          </h3>
          <p className="text-xs text-center">
            <BsTag className="text-primary-red text-xl" />
            New
          </p>
        </div>
        <p className="flex items-center text-xs gap-2 my-2"><AiFillStar className="text-yellow-400"/> 5.0(120 People used it)</p>
        <button className="text-base mx-1 text-white bg-secondary-blue border-2 border-secondary-blue w-full px-3 py-2 rounded-lg">Rent it</button>
               
      </div>
    </div>
  );
}
