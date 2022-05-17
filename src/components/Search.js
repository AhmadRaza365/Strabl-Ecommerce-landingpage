import React from "react";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Search() {
  return (
    <div className="bg-dark-gray flex justify-center py-3 px-2">
      <div className="bg-white rounded-full flex w-fit px-4 md:px-2 py-2 items-center ">
        <DropdownList
          defaultValue="Categories"
          data={[
            "Categories",
            "Men",
            "Women",
            "Children",
            "Mobiles",
            "Electronics",
          ]}
        />

        <input
          type="text"
          className=" outline-0 px-2 w-3/5"
          placeholder="Search your dream Products.."
        />
        <BsFillArrowRightCircleFill className="text-4xl text-primary-red" />
      </div>
    </div>
  );
}
