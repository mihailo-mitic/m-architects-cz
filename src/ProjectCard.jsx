import { useContext } from "react";
import { AppContext } from "./App";

const ProjectCard = ({ props }) => {
  const context = useContext(AppContext);
  const { images, name, brief, year, description } = props;

  const updateProjectDetails = () => {
    context.setProjectData(props);
  };

  const resetProjectDetails = () => {
    context.setProjectData({
      name: "Ing. arch. Mihailo Mitić",
      images: [],
      brief: "licensed architect no. 04 212",
      year: "mihailo@m-architects.cz  |  +381 64 992 7428",
      description: "",
      category: "",
    });
  };

  return (
    <div
      className='project-card'
      onMouseEnter={updateProjectDetails}
      onMouseLeave={resetProjectDetails}
    >
      <img src={images[0].image} alt={name} />
    </div>
  );
};
export default ProjectCard;
