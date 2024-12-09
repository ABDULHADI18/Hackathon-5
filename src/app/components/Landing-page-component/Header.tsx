"use client";
import React from 'react';
import { useState } from "react";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-white shadow-md border-b-2 border-[#E5E5E5] relative z-40">
        <div className="container mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#252B42] ml-10">Bandage</div>

          {/* Action Icons (Mobile and Desktop) */}
          <div className="flex items-center gap-4 md:hidden">
            <CiSearch className="text-2xl text-[#252B42] cursor-pointer" />
            <IoCartOutline className="text-2xl text-[#252B42] cursor-pointer" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-3xl text-[#252B42]" />
              ) : (
                <FiMenu className="text-3xl text-[#252B42]" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex mr-9">
            <ul className="flex gap-8 text-sm font-medium text-[#737373] relative">
              <li>
                <Link href="#" className="hover:text-[#23A6F0] transition-all">
                  Home
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/product"
                  className="flex items-center gap-1 hover:text-[#23A6F0] transition-all"
                >
                  Shop
                  <FaAngleDown />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#23A6F0] transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-[#23A6F0] transition-all">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#23A6F0] transition-all"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/page" 
                  className="hover:text-[#23A6F0] transition-all">
                  Pages
                </Link>
              </li>
            </ul>
          </nav>

          {/* Action Icons for Desktop */}
          <div className="hidden md:flex items-center gap-6 text-[#23A6F0] mr-10 ">
            <button className="text-sm font-medium hover:text-black">Login/Register</button>
            <CiSearch className="text-lg cursor-pointer hover:text-black" />
            
            <IoCartOutline className="text-lg cursor-pointer hover:text-orange-300" />
            <h6 className="text-[#23A6F0] text-xs -ml-6">1</h6>
            <IoIosHeartEmpty className="text-lg cursor-pointer hover:text-red-600" />
            <h6 className="text-[#23A6F0] text-xs -ml-6 ">1</h6>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-md transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col gap-6 p-4 text-[20px] text-[#737373] text-center">
            <li>
              <Link href="/" className="hover:text-[#23A6F0] transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-[#23A6F0] transition-all">
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#23A6F0] transition-all"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#23A6F0] transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div> 
  );
};

export default Header
