import React, { useState } from "react";
import logo from "../images/logo.jpg";
import { AiFillHeart, AiOutlineMenu } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { MdArticle, MdNoteAlt } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-dark-gray flex justify-between px-10  md:px-0 py-2 md:justify-around items-center">
        <img src={logo} className="w-36" alt="logo" />
        <ul className="hidden md:flex gap-4   text-white text-2xl">
          <li className="underline underline-offset-8 decoration-primary-red cursor-pointer">
            Buy
          </li>
          <li className="cursor-pointer">Rent</li>
        </ul>
        <div className="flex gap-2 items-center">
          <AiFillHeart className="text-primary-red hidden md:block text-3xl cursor-pointer" />
          <HiShoppingCart className="text-primary-red hidden md:block text-3xl cursor-pointer" />
          <button className="bg-primary-red text-white hidden md:block text-md font-bold rounded-full px-4 py-2 cursor-pointer">
            Login/ Signup
          </button>
          <AiOutlineMenu
            className="text-white text-3xl cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      </nav>
      <ul
        className={` absolute right-10 md:right-36 top-36 md:top-20 px-6 py-3 rounded-lg text-dark-gray bg-white ransition-all duration-200 ease-in ${
          open ? " opacity-100" : "right-10 md:right-36  -top-96 opacity-0"
        }`}
        onClick={() => setOpen(!open)}
      >
        <li className="text-2xl border-b-2 py-3 mb-3 border-dark-gray flex md:hidden justify-center items-center gap-5   cursor-pointer">
          <span className="underline underline-offset-8 decoration-primary-red">
            Buy
          </span>{" "}
          <span>Rent</span>
        </li>
        {/* <hr /> */}
        <li className="text-2xl flex items-center gap-2 my-2  cursor-pointer">
          <MdNoteAlt className="text-primary-red" />
          Register
        </li>
        <hr />
        <li className="text-2xl flex items-center gap-2 my-2  cursor-pointer">
          <AiFillHeart className="text-primary-red" />
          Wishlist
        </li>
        <hr />
        <li className="text-2xl flex md:hidden items-center gap-2 my-2  cursor-pointer">
          <HiShoppingCart className="text-primary-red" />
          Cart
        </li>
        <hr />
        <li className="text-2xl flex items-center gap-2 my-2  cursor-pointer">
          <MdArticle className="text-primary-red" />
          Blog
        </li>
        <hr />
        <li className="text-2xl flex items-center gap-2  my-2 cursor-pointer">
          <FaUser className="text-primary-red" />
          Login
        </li>
        <hr />
        <li className="text-2xl flex items-center gap-2 my-2  cursor-pointer">
          <BsTelephoneFill className="text-primary-red" />
          Contact us
        </li>
      </ul>
    </>
  );
}
