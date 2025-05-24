import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  
  // ✅ Typo Fix: Renamed setShowMene to setShowMenu
  const [showMenu, setShowMenu] = useState(false);

  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    setToken(null); // ✅ Better than false – avoids confusion between boolean and string token
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <NavLink to="/">
        <img className="w-44 cursor-pointer" src={assets.logo} alt="Logo" /> {/* ✅ Added alt text */}
      </NavLink>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li>
          <NavLink to="/" className="py-1 inline-block">
            HOME
            <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className="py-1 inline-block">
            ALL DOCTORS
            <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="py-1 inline-block">
            ABOUT
            <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="py-1 inline-block">
            CONTACT
            <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden" />
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center cursor-pointer group relative gap-2">
            <img className="w-8 rounded-full" src={userData.image} alt="Profile" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                  role="button" tabIndex={0}
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                  role="button" tabIndex={0}
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="hover:text-black cursor-pointer"
                  role="button" tabIndex={0}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)} // ✅ Typo Fix
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt="Menu"
        />
        {/* -----------Mobile menu--------------- */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="Logo" />
            <img
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)} // ✅ Typo Fix
              src={assets.cross_icon}
              alt="Close Menu"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <li>
              <NavLink onClick={() => setShowMenu(false)} to="/">
                <p className="px-4 py-2 rounded inline-block">HOME</p>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShowMenu(false)} to="/doctors">
                <p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShowMenu(false)} to="/about">
                <p className="px-4 py-2 rounded inline-block">ABOUT</p>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShowMenu(false)} to="/contact">
                <p className="px-4 py-2 rounded inline-block">CONTACT</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
