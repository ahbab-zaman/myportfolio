import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white sticky top-0 z-10 w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-10 h-10 flex justify-center items-center rounded-full bg-[#A53DFF] text-xl text-white font-semibold">
            A
          </p>
          <h1 className="text-xl font-semibold ">AHBAB</h1>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#333333] font-bold" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#333333] font-bold" : "text-black"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#333333] font-bold" : "text-black"
              }
            >
              Contact
            </NavLink>
          </li>
            <button className="bg-[#A53DFF] text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold hover:bg-[#333333] hover:text-[#ddd] hover:transition-colors hover:duration-500">
              Resume{" "}
              <MdOutlineFileDownload className="text-xl"></MdOutlineFileDownload>
            </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
