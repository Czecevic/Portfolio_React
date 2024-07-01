import imageDesc from "@/assets/charlesParcours.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export const Description = () => {
  return (
    <div className="flex flex-col gap-10 px-48 text-center">
      <h1 className=" text-center text-5xl py-10 border-b-4 border-white border-w">
        Mon parcours
      </h1>
      <motion.div
        className=" self-center md:w-96 md:h-96 w-52 h-52"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          src={imageDesc}
          alt="imageCharles"
          layout="responsive"
          className="rounded-md"
          priority={true}
        ></Image>
      </motion.div>
      <p>
        Hello ! Je m’appelle Charles Zecevic, développeur Web junior spécialisé
        Front-end et musicien.
      </p>
      <p>
        Mon parcours de vie en tant que développeur débute avec mon entrée à
        l&apos;école Matrice, alors que je ne possédais que des notions vagues
        dans le domaine. Au fil de cette formation, j&apos;ai été initié au
        management, au Scrum, au Kanban et à Python, des découvertes qui ont
        suscité en moi une passion grandissante pour le développement
        informatique, notamment dans le domaine du web.
      </p>
      <p>
        Guidé par cette passion naissante, je me suis spécialisé dans le web, en
        apprenant les rouages du HTML, du CSS et de Python avec Django.
        Cependant, malgré ces compétences acquises, je ressentais un besoin
        d&apos;exploration et de progression. C&apos;est ainsi que je me suis
        tourné vers le JavaScript, un langage qui m&apos;a immédiatement séduit
        par sa polyvalence et ses possibilités infinies.
      </p>
      <p>
        En parallèle, j&apos;ai saisi l&apos;opportunité de devenir mentor pour
        des personnes en reconversion professionnelle, partageant ainsi mes
        connaissances et mon expérience, tout en continuant mes propres études
        approfondies en JavaScript. Mon objectif était clair : perfectionner mes
        compétences en développement frontend et m&apos;épanouir pleinement dans
        ce domaine en constante évolution.
      </p>
      <p>
        Aujourd&apos;hui, en 2024, je touche au terme de mon parcours
        académique, fort d&apos;une solide expertise et d&apos;une passion
        toujours aussi vive pour le développement web. Mon parcours reflète ma
        détermination à toujours repousser mes limites, à apprendre et à
        évoluer, et je suis impatient de relever de nouveaux défis passionnants
        dans le monde du développement informatique.
      </p>
    </div>
  );
};
