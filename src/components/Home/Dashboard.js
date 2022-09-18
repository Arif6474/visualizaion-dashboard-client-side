import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile mt-5 ">
        <input
          id="my-drawer-member"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-member"
            className="btn ml-5 bg-teal-500 drawer-button sm:mb-5 text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-member" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48  bg-teal-500 text-base-content rounded ">
            <li>
              <Link to="/dashboard" className="text-2xl font-bold text-white">
                Dashboard
              </Link>
            </li>
            {/* <li>
              <Link to="/dashboard/topic" className=" font-bold text-white">
                Topic
              </Link>
            </li>
             */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
