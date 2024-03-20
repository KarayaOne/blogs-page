import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSun,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex justify-between bg-slate-500 p-5">
      <h2 className="text-2xl font-bold">LOGO</h2>
      <div className="md:hidden">
        <button
          onClick={toggleDropdown}
          className="text-white cursor-pointer focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <ul className="flex justify-between p-2">
        <li className="mr-4 font-bold transition-colors hover:text-white cursor-pointer">
          Home
        </li>
        <li className="mr-4 font-bold transition-colors hover:text-white cursor-pointer">
          Section
        </li>
        <li className="mr-4 relative font-bold transition-colors hover:text-white cursor-pointer">
          <p
            tabIndex="0"
            onBlur={() => setIsOpen(false)}
            className="rounded-md"
          >
            Options{" "}
            <span
              className="font-bold text-sm cursor-pointer hover:text-white"
              onClick={toggleDropdown}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </p>

          <div
            className={`absolute top-5 left-0 p-3 text-center w-max mt-1 z-10 bg-white shadow-md rounded-md overflow-hidden ${
              isOpen ? "" : "hidden"
            }`}
          >
            <ul className="list-none py-5">
              <li className="px-2 py-2 font-normal text-sm text-black hover:bg-gray-200">
                Option 1
              </li>
              <li className="px-2 py-2 font-normal text-sm text-black hover:bg-gray-200">
                Option 2
              </li>
              <li className="px-2 py-2 font-normal text-sm text-black hover:bg-gray-200">
                Option 3
              </li>
            </ul>
          </div>
        </li>
        <li className="mr-4 font-bold transition-colors hover:text-white cursor-pointer">
          Contact
        </li>
        <li className="mr-4 font-bold transition-colors hover:text-white cursor-pointer">
          About
        </li>
        <li className="mr-4 font-bold transition-colors hover:text-white cursor-pointer">
          <FontAwesomeIcon icon={faSun} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
