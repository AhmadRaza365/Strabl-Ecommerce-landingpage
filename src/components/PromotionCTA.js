import React from "react";
import Man from "../images/Man.svg";
import { HiSpeakerphone } from "react-icons/hi";

export default function PromotionCTA() {
  return (
    <div className="bg-dark-gray flex flex-wrap-reverse items-center justify-center gap-5 md:gap-10 px-3 py-5 mt-10">
      <h3 className="flex items-center text-2xl md:text-3xl order-1 font-bold text-white">
        <HiSpeakerphone className="text-primary-red text-4xl md:text-6xl" />{" "}
        Partner with STRABLE
      </h3>
      <button className="bg-primary-red px-4 py-2 rounded-lg order-2 md:order-2 text-white">
        Learn More
      </button>
      <img className="w-96 order-3" src={Man} alt="Man Holding Coins" />
    </div>
  );
}
