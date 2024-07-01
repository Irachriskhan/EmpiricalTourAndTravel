import React, { useState } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDropup, IoIosArrowDropdown } from 'react-icons/io';

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-white";

function SidebarLink({ link }) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (link.dropdown) {
    return (
      <div>
        <div
          className={classNames(
            pathname === link.path ? "bg-green-300 text-white" : "text-neutral-400",
            linkClass, "cursor-pointer"
          )}
          onClick={handleDropdown}
        >
          <span className="text-xl">{link.icon}</span>
          {link.label}
          <span className="ml-auto">
            {isOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
          </span>
        </div>
        {isOpen && (
          <div className="pl-6 space-y-1">
            {link.dropdown.map((subLink) => (
              <Link
                key={subLink.key}
                to={subLink.path}
                className={classNames(
                  pathname === subLink.path ? "bg-green-300 text-white" : "text-neutral-400",
                  linkClass
                )}
              >
                {subLink.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? "bg-green-300 text-white" : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}

export default SidebarLink;
