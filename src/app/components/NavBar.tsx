import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBarsComponents } from "./FaBarsComponents";

export const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav
      className={`${
        pathname === "/" && "fixed"
      } navbar bg-transparent w-full z-50 transition-all duration-300 flex justify-between p-10 items-start`}
    >
      <div className="max-width flex items-center justify-between">
        <div>
          <Link
            href={"/"}
            className="text-white md:text-4xl text-lg font-semibold"
          >
            Charles<span className="text-yellow-400"> Zecevic</span>
          </Link>
        </div>
      </div>
      <FaBarsComponents />
    </nav>
  );
};
