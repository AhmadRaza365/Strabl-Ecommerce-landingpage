import React from "react";
import dunkinlogo from "../images/dunkinlogo.jpg";
export default function FeaturedCard() {
  return (
    <div className="max-w-sm aspect-square rounded-lg shadow-xl border-dark-gray/10 border-2 p-4 grid">
      <div className="w-full flex justify-center items-center">
        <img src={dunkinlogo} alt="" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-center">New York Times</h3>
        <p className="text-base text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          repellendus, amet in cum eaque fuga.
        </p>
      </div>
    </div>
  );
}
