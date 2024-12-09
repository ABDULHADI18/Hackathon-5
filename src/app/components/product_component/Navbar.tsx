import React from "react";
import { LuPhone } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <div className="bg-[#23856D] py-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-white text-sm">
          {/* Contact Information */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 ">
              <LuPhone />
              <p>(225) 555-0118</p>
            </div>
            <div className="flex items-center gap-1">
              <CiMail />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>

          {/* Promotion */}
          <p className="hidden md:block">
            Follow Us and get a chance to win 80% off
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <p className="hidden md:block">Follow Us:</p>

            <FaInstagram />

            <FaYoutube />

            <FaFacebook />

            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
