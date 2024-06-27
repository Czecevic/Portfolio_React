import img2048 from "../assets/2048img.png";
import imgAllMusik from "../assets/AllMusicimg.png";
import slotMachine from "../assets/slotMachine.png";
import Kasa from "../assets/Kasa.png";
import FishEye from "../assets/FishEye.png";
import SportSee from "../assets/SportSee.png";
import { Projet } from "../components/Projet";

export const Description = () => {
  const allProject = [
    {
      name: "2048",
      imgSource: img2048,
      desc: "2048 est un jeu de puzzle en ligne où le but est de faire glisser des tuiles numérotées sur une grille de 4x4, les combinant pour créer une tuile portant le nombre 2048. Chaque tour, une nouvelle tuile avec une valeur de 2 ou 4 apparaît dans une case vide. Les tuiles sont déplacées à l&apos;aide des touches fléchées du clavier. Lorsque deux tuiles avec le même nombre se touchent, elles fusionnent en une seule tuile avec une valeur égale à leur somme. Le jeu se termine lorsque la grille est remplie et qu&apos;il n&apos;y a plus de mouvements possibles.",
    },
    {
      name: "All Musik",
      imgSource: imgAllMusik,
      desc: "AllMusik se veut être une biblothèque regroupant tous les styles de musique existant ",
    },
    {
      name: "SlotMachine",
      imgSource: slotMachine,
      desc: "SlotMachine est une machine qui va choisir aléatoirement un chiffre / un mot / une condition",
    },
  ];
  const SchoolProject = [
    {
      name: "Kasa",
      imgSource: Kasa,
      desc: "Kasa, leader de la location d'appartements entre particuliers en France, m'a recruté pour développer leur nouvelle plateforme web avec React et TypeScript. Le projet inclut la création de composants, la configuration des routes avec React Router, et le styling principalement en CSS. Utilisation de GitHub pour le versionning et Vercel pour le déploiement",
    },
    {
      name: "SportSee",
      imgSource: SportSee,
      desc: "Dans le projet SportSee, nous développons un tableau de bord d'analytics de coaching sportif en utilisant React et React Router. Notre mission inclut l'intégration de graphiques avancés via des bibliothèques comme Recharts et la gestion des appels API avec Axios ou Fetch. La tâche principale consiste à créer la page profil utilisateur avec divers graphiques. Nous nous concentrons sur le front-end, bien que le back-end utilise Node.js. Une documentation complète est également requise. Le projet utilise TypeScript, React, et Axios, et le déploiement se fait via GitHub et Vercel.",
    },
    {
      name: "FishEye",
      imgSource: FishEye,
      desc: "Dans le projet FishEye, nous travaillons avec une cheffe de projet et un designer UI pour un nouveau client, FishEye, un site web permettant aux photographes indépendants de présenter leurs meilleurs travaux. Suite à une levée de fonds, FishEye souhaite mettre à jour son site web. Le projet implique l'utilisation de JavaScript, CSS, et HTML.",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-10 mx-8">
      <h1 className="text-5xl border-b-2 w-full text-center">Mes projets</h1>
      <p>
        Ayant un parcours atypique, j&apos;ai eu l&apos;opportunité
        d&apos;explorer et de m&apos;immerger dans divers univers qui m&apos;ont
        permis de cultiver une riche diversité de compétences et de passions.
        Mon vécu varié m&apos;a conduit à aborder plusieurs facettes de
        l&apos;informatique, notamment en tant que développeur web, où j&apos;ai
        particulièrement travaillé sur des aspects front-end, ainsi qu&apos;en
        tant que professeur, partageant mes connaissances avec enthousiasme et
        pédagogie. En parallèle, ma passion pour la musique a toujours occupé
        une place importante dans ma vie, me permettant de développer une
        sensibilité artistique qui complète mon approche technique et
        pédagogique
      </p>
      <h3 className="text-3xl border-b-2 w-full text-center">
        Mes projets perso
      </h3>
      <Projet allProjet={allProject} />
      {/* mettre mes projets perso => 2048 / AllMusik / SlotMachine */}
      <h3 className="text-3xl border-b-2 w-full text-center">Mes Exercices </h3>
      <Projet allProjet={SchoolProject} />
      {/* mettre mes projets scolaire => Kasa / SportSee / FishEye */}
      <h6 className="text-xl border-b-2 w-full text-center">
        exercice créer et proposer pour mes étudiants
      </h6>
      {/* mettre les exo => weatherForcast / ReactHooks / exercice NodeJS / test_Technique_FS */}
    </div>
  );
};
