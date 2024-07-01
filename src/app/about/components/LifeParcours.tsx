import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faComputer,
  faMusic,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LifeParcours = () => {
  const life = [
    {
      title: "2015",
      description:
        "Baccalaureate Science technique de l'ingénieur et du developpement durable (STI2D) obtenu",
      id: 0,
      icon: faBook,
    },
    {
      title: "2015 - 2019",
      description:
        "Étudie dans l'école des musiques actuelles du spectacle vivant ALTA",
      id: 1,
      icon: faMusic,
    },
    {
      title: "2020 - 2021",
      description:
        "Formation Management et développement de projets numériques Matrice",
      id: 2,
      icon: faComputer,
    },
    {
      title: "2022 - 2024",
      description:
        "Alternance Openclassrooms spécialisé dans le JavaScript React / mentor full stack pour des gens en reconversion professionnelle",
      id: 3,
      icon: faReact,
    },
    {
      title: "2022 - 2024",
      description:
        "Mentor full stack pour des gens en reconversion professionnelle",
      id: 4,
      icon: faSchool,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-stretch mb-10">
      {life.map((elemOfLife, index) => (
        <div
          key={index}
          className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 items-center py-5 px-5 m-5 border-4 transition duration-300 ease-in-out hover:scale-110"
        >
          <FontAwesomeIcon
            icon={elemOfLife.icon}
            className="text-6xl md:text-8xl lg:text-9xl p-3"
          />
          <div className="w-full md:w-3/4 lg:w-2/3 text-center">
            <h1 className="text-lg md:text-xl lg:text-2xl">
              {elemOfLife.title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg">
              {elemOfLife.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
