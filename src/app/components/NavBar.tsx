import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="navbar bg-transparent fixed w-full z-50 transition-all duration-300 flex justify-between p-5">
      <div className="max-width flex items-center justify-between px-8 py-6">
        <div className="logo">
          <Link href={"#"} className="text-white text-2xl font-semibold">
            Charles<span className="text-yellow-400"> Zecevic</span>
          </Link>
        </div>
      </div>
      <ul className="menu hidden md:flex items-center space-x-6">
        <li>
          <Link
            href={"/about"}
            className="menu-btn text-white text-lg font-medium hover:text-yellow-400 transition-colors"
          >
            a propos
          </Link>
        </li>
        <li>
          <Link
            href={"/services"}
            className="menu-btn text-white text-lg font-medium hover:text-yellow-400 transition-colors"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href={"/skills"}
            className="menu-btn text-white text-lg font-medium hover:text-yellow-400 transition-colors"
          >
            Skills
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
      <div className="menu-btn md:hidden text-white text-2xl cursor-pointer">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};
