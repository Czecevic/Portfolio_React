import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const FaBarsComponents = () => {
  const [isOpenFaBars, setIsOpenFaBars] = useState(false);
  return (
    <div className="flex gap-10">
      {isOpenFaBars == false ? (
        <ul className="menu hidden md:flex items-center space-x-6">
          <li>
            <Link
              href={"/about"}
              className="menu-btn text-white text-lg font-medium hover:text-yellow-400 transition-colors"
            >
              mon parcours
            </Link>
          </li>
          <li>
            <Link
              href={"/skills"}
              className="menu-btn text-white text-lg font-medium hover:text-yellow-400 transition-colors"
            >
              compétence
            </Link>
          </li>
          <li>
            <Link
              href={"/work"}
              className="menu-btn text-white text-lg font-medium hover:text-yellow-400 transition-colors"
            >
              Projet
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="menu-btn text-white text-lg font-medium hover:text-yellow-400 transition-colors"
            >
              contact
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex flex-col items-end menu space-x-6">
          <li>
            <Link
              href={"/about"}
              className="menu-btn text-white text-lg font-medium hover:text-yellow-400 transition-colors"
            >
              mon parcours
            </Link>
          </li>
          <li>
            <Link
              href={"/skills"}
              className="menu-btn text-white text-lg font-medium hover:text-yellow-400 transition-colors"
            >
              compétence
            </Link>
          </li>
          <li>
            <Link
              href={"/work"}
              className="menu-btn text-white text-lg font-medium hover:text-yellow-400 transition-colors"
            >
              Projet
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="menu-btn text-white text-lg font-medium hover:text-yellow-400 transition-colors"
            >
              contact
            </Link>
          </li>
        </ul>
      )}
      <div className="menu-btn md:hidden text-white text-2xl cursor-pointer ">
        <button onClick={() => setIsOpenFaBars(!isOpenFaBars)}>
          {isOpenFaBars == false ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faCircleXmark} />
          )}
        </button>
      </div>
    </div>
  );
};
