import Link from "next/link";
import { ParticlesBackground } from "./components/ParticlesBg";

export default function Custom404() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* <ParticlesBackground /> */}
      <div className="text-center flex flex-col">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-4">Oops! pas trouvé :&#91;</p>
        <Link
          href="/"
          className="mt-6 text-lg text-black bg-yellow-500 rounded-lg p-5 transition duration-300 ease-in-out hover:bg-yellow-100"
        >
          Retourner à l&#39;accueil
        </Link>
      </div>
    </div>
  );
}
