import img2048 from "../assets/2048img.png";
import imgAllMusik from "../assets/AllMusicimg.png";
import slotMachine from "../assets/slotMachine.png";
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

      {/* mettre mes projets scolaire => Kasa / SportSee / searchEngine / FishEye */}
      <h6 className="text-xl border-b-2 w-full text-center">
        exercice créer et proposer pour mes étudiants
      </h6>
      {/* mettre les exo => weatherForcast / ReactHooks / exercice NodeJS / test_Technique_FS */}
    </div>
  );
};
