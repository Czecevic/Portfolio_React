import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const FaBarsComponents = () => {
  const [isOpenFaBars, setIsOpenFaBars] = useState(false);
  return (
    <div className="flex lg:flex-row lg:items-center gap-10">
      <ul
        className={`menu flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 ${
          isOpenFaBars ? "flex" : "hidden lg:flex"
        }`}
      >
        <li>
          <Link
            href={"/about"}
            className="menu-btn text-white text-lg md:text-3xl font-medium hover:text-yellow-400 transition-colors"
          >
            mon parcours
          </Link>
        </li>
        <li>
          <Link
            href={"/skills"}
            className="menu-btn text-white text-lg md:text-3xl font-medium hover:text-yellow-400 transition-colors"
          >
            compétence
          </Link>
        </li>
        <li>
          <Link
            href={"/work"}
            className="menu-btn text-white text-lg md:text-3xl font-medium hover:text-yellow-400 transition-colors"
          >
            Projet
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="menu-btn text-white text-lg md:text-3xl font-medium hover:text-yellow-400 transition-colors"
          >
            contact
          </Link>
        </li>
      </ul>
      <div className="menu-btn lg:hidden text-white text-2xl cursor-pointer">
        <button
          onClick={() => setIsOpenFaBars(!isOpenFaBars)}
          aria-label="NavBar"
        >
          {isOpenFaBars ? (
            <FontAwesomeIcon icon={faCircleXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
    </div>
  );
};
