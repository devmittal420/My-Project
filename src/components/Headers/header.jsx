import React, { useContext } from "react";
import { searchContext } from "./../../Pages/context/bicycleContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { setSearchInput } = useContext(searchContext);

  const onHandleSearch = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };


  return (
    <>
      <div className="fixed top-0 left-0 h-20 right-0 bg-blue-300">
        {/* Amazon Logo */}
        <div className="flex items-center justify-between">
          <img
            src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
            alt="Amazon Logo"
            className="h-20 ml-4 -mr-5"
          />

          {/* Search bar */}
          <div className="flex items-center ">
            <input
              type="search"
              placeholder="Search here"
              className="bg-white border border-blue-200 rounded-l-xl w-96 h-10 px-4 cursor-pointer"
              onChange={onHandleSearch}
            />
            <button className="bg-yellow-100 h-10 px-4 rounded-r-xl p-1 mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </button>
          </div>

          {/* Cart */}
          <div>
            <Link to="/cart" className="flex items-center mr-6 p-2">
              <img
                src="https://img.icons8.com/?size=32&id=15893&format=png"
                alt="cart-icon-image"
              />
              <p>Cart</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
