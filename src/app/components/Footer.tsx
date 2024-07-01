import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 h-48 flex flex-col justify-center items-center gap-10 w-full">
      <div className="flex justify-center items-center gap-5">
        <Link href="mailto:charleszecevic@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="transition-all text-xl text-white rounded-full border-2 p-3 hover:scale-125"
          />
        </Link>
        <Link href="https://github.com/Czecevic">
          <FontAwesomeIcon
            icon={faGithub}
            className="transition-all text-xl text-white rounded-full border-2 p-3 hover:scale-125"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/charles-zecevic/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="transition-all text-xl text-white rounded-full border-2 p-3 hover:scale-125"
          />
        </Link>
      </div>
      <p className="text-center text-white">© 2024, Zecevic Charles</p>
    </footer>
  );
};
