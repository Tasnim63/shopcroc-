import React from "react";
import logo from "../assets/images/Logo.png";
import { AiOutlineDown, AiOutlineHeart } from "react-icons/ai";
import { BsSearch, BsBag } from "react-icons/bs";
import { TbGitCompare } from "react-icons/tb";
export default function Navbar() {
  return (
    <>
      <div className="w-4/5  mx-auto flex items-center justify-around ">
        {/* nav logo */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="  border rounded-full px-8 border-lightGray">
          <div className="category relative flex justify-center items-center gap-5 ">
            <button className="focus:outline-none flex justify-between items-center py-2 pr-4 group">
              <p className=" ml-4"> All Categories</p>
              <span className=" border-r border-lightGray ml-5 ">
                {" "}
                <AiOutlineDown className="mr-8 mt-1 text-lightGray" />
              </span>

              <div className=" absolute hidden shadow-md group-focus:block top-full  mr-0  bg-white border border-indigo-600 rounded transition">
                <ul>
                  <li className=" px-4  hover:bg-blue hover:text-white ">
                    <a href="/">All Categories</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/">Grocery</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/">Fastfood</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/">Chinese</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/"> Italian</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/"> North Indian</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/">Beverages</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/"> Beer</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/">Juice</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/">Milk</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/">Wine</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/">Frozen</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/">Bakery</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/">Fruits</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/">Vegetables</a>
                  </li>
                  <li className=" px-4   hover:bg-blue hover:text-white">
                    <a href="/">Snacks</a>
                  </li>
                  <li className=" px-4  hover:bg-blue hover:text-white">
                    <a href="/">Dessert</a>
                  </li>
                </ul>
              </div>
            </button>
            <div className=" flex justify-between items-center">
              <input
                type="text"
                className="focus:outline-none"
                placeholder=" Search here..."
              />
              <BsSearch />
            </div>
          </div>
        </div>
        <div className="myaccount relative  flex items-center justify-center ">
          <button className=" flex justify-between items-center py-2  pr-4 group bg-button rounded-full">
            <p className=" ml-4 flex uppercase text-white">
              my account{" "}
              <span className=" ml-5 ">
                {" "}
                <AiOutlineDown className=" mt-1 " />
              </span>
            </p>

            <div className=" absolute hidden shadow-md group-focus:block top-full  mr-0  bg-white border border-indigo-600 rounded transition">
              <ul>
                <li className=" px-4  hover:bg-blue hover:text-white ">
                  <a href="/">All Categories</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/">Grocery</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/">Fastfood</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/">Chinese</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/"> Italian</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/"> North Indian</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/">Beverages</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/"> Beer</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/">Juice</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/">Milk</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/">Wine</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/">Frozen</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/">Bakery</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/">Fruits</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/">Vegetables</a>
                </li>
                <li className=" px-4   hover:bg-blue hover:text-white">
                  <a href="/">Snacks</a>
                </li>
                <li className=" px-4  hover:bg-blue hover:text-white">
                  <a href="/">Dessert</a>
                </li>
              </ul>
            </div>
          </button>
          <div className=" icons flex items-center justify-center">
            <div className=" ml-6 ">
              <span className="text-2xl ml-5">
                <TbGitCompare />
              </span>
            </div>
            <div className="relative ml-6 mt-2">
              <span className=" text-2xl ml-6">
                <AiOutlineHeart />
              </span>
              <div className="absolute bottom-5 rounded-full bg-button px-2   left-5">
                8
              </div>
            </div>
            <div className="relative ml-6">
              <span className=" text-2xl ml-6">
                <BsBag />
              </span>
              <div className="absolute bottom-5 rounded-full bg-button px-2   left-5">
                8
              </div>
            </div>
          
          </div>
        </div>
       
      </div>
    </>
  );
}
