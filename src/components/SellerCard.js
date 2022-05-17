import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsTag } from "react-icons/bs";

export default function SellerCard() {
  return (
    <div className="max-w-sm rounded-lg max-h-fit shadow-xl flex ">
      <img
        className="w-32 aspect-square object-cover object-center rounded-l-lg"
        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt=""
      />
      <div className="p-1 md:p-2">
        <h3 className="text-lg font-bold my-1">Truta Scott addict 300</h3>
        <div className="flex justify-between my-1">
          <h3 className="text-lg font-bold">
            AED <span className="text-xl text-primary-red">25</span>
          </h3>
          <p className="text-xs text-center">
            <BsTag className="text-primary-red text-xl" />
            New
          </p>
        </div>
        <p className="flex items-center text-xs px-2 gap-2 my-2"><AiFillStar className="text-yellow-400"/> 5.0(120 People used it)</p>
        <div className="flex items-center justify-between px-2 my-3">
                <button className="text-base mx-1 text-white bg-secondary-blue border-2 border-secondary-blue px-3 py-2 rounded-lg">Try Now</button>
                <button className="text-base mx-1 bg-transparent border-2 border-dark-gray px-2 py-2 rounded-lg">Buy Now</button>
                
            </div>
      </div>
    </div>
  );
}
