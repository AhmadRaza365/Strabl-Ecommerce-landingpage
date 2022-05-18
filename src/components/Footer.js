import React from "react";
import Logo from "../images/logo.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-wrap p-4 gap-4 justify-evenly">
      <div className="p-2 md:p-5 flex flex-col justify-between">
        <img src={Logo} alt="logo" />
        <div className="flex gap-2 my-4">
          <div className="p-1 w-fit border-dark-gray border-[1px] rounded-full flex justify-center items-center">
            <FaFacebookF className="text-2xl" />
          </div>
          <div className="p-1 w-fit border-dark-gray border-[1px] rounded-full flex justify-center items-center">
            <FaTwitter className="text-2xl" />
          </div>
        </div>
      </div>

      <div className="p-2 md:p-5">
        <h3 className="text-xl font-bold">Useful Links</h3>
        <ul className="text-base my-2">
          <li className="my-1">About Us</li>
          <li className="my-1">Green Credentials</li>
          <li className="my-1">FAQ</li>
          <li className="my-1">Item Protection Feature</li>
          <li className="my-1">Featured Ads</li>
        </ul>
      </div>
      <div className="p-2 md:p-5">
        <h3 className="text-xl font-bold">Head Office</h3>
        <ul className="text-base my-2">
          <li className="flex gap-1 items-center my-2">
            <FaMapMarkerAlt className="text-xl text-primary-red" />
            <span>
              30 Commercial Road, Street 1002
              <br />
              Dubai, UAE
            </span>
          </li>
          <li className="flex gap-1 items-center my-3">
            <FaPhoneAlt className="text-xl text-primary-red" />
            <span>1-888-452-1505</span>
          </li>
        </ul>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold">Newsletter</h3>
        <p className="text-base my-3">
          Subscribe to our newsletter to get
          <br /> our latest update and news.
        </p>
        <div className="flex items-center my-4">
          <input
            className="bg-dark-gray/30 p-2 rounded-l-lg outline-none placeholder-dark-gray"
            type="email"
            placeholder="Your Email"
          />
          <button className="bg-primary-red px-3 py-2 rounded-r-lg -ml-2 text-white">
            Submit
          </button>
        </div>
      </div>
    </footer>
  );
}
