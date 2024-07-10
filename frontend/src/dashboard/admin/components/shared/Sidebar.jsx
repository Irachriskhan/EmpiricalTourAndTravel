import React, { useState, useEffect } from "react";
import { BiSolidDonateHeart } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import classNames from "classnames";
import SidebarLink from "./SidebarLink";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/constants";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-white"; // Updated to include text-white class

export default function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setIsSidebarVisible(true);
      } else {
        setIsSidebarVisible(false);
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="relative">
      {isSidebarVisible && (
        <div className="bg-green-400 w-60 p-3 flex flex-col">
          <button
            className="self-end text-white bg-green-500  px-2 py-1 rounded-full mb-2"
            onClick={toggleSidebar}
          >
            Close Sidebar
          </button>
          <div className="flex items-center gap-2 px-1 py-3">
            <BiSolidDonateHeart fontSize={24} />
            <span className="text-neutral-200 text-lg">Tours Link</span>
          </div>
          <div className="md:w-80px md py-8 flex flex-1 flex-col gap-0.5">
            {DASHBOARD_SIDEBAR_LINKS.map((link) => (
              <SidebarLink key={link.key} link={link} />
            ))}
          </div>
          <div className="flex flex-col gap-0.5 pt-2 border-t border-white">
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
              <SidebarLink key={link.key} link={link} />
            ))}
            <div
              className={classNames(linkClass, "cursor-pointer text-green-300")}
            >
              <span className="text-xl">
                <HiOutlineLogout />
              </span>
              Logout
            </div>
          </div>
        </div>
      )}
      {!isSidebarVisible && (
        <button
          className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg"
          onClick={toggleSidebar}
        >
          Open Sidebar
        </button>
      )}
    </div>
  );
}
