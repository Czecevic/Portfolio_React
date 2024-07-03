import Link from "next/link";
import { ParticlesBackground } from "./components/ParticlesBg";

export default function Custom404() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <ParticlesBackground />
      <div className="z-10 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-4">Oops! Page not found.</p>
        <Link
          href="/"
          className="mt-6 text-lg text-white bg-blue-500 rounded-lg p-5 transition duration-300 ease-in-out hover:bg-blue-600"
        >
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
}
