import React from "react";
import SellerCard from "./SellerCard";

export default function BestSellerSection() {
  return (
    <section>
      <div className="flex justify-between items-end mt-10 md:mt-20 mb-5 md:mb-10">
        <h2 className=" text-2xl md:text-4xl font-bold ">
          <span className="underline underline-offset-8 decoration-primary-red ">
            Best Se
          </span>
          llers
        </h2>
        <p className="text-md md:text-xl text-primary-red cursor-pointer">
          View All <span className="text-xl">→</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
       
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
      </div>
    </section>
  );
}
