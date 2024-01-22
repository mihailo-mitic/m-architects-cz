import { useContext } from "react";
import { AppContext } from "./App";

const ProjectCard = ({ props }) => {
  const context = useContext(AppContext);
  const { images, name, brief, year, description } = props;

  const updateProjectDetails = () => {
    context.setProjectData(props);
  };

  return (
    <div className='project-card' onMouseEnter={updateProjectDetails}>
      <img src={images[0].image} alt={name} />
    </div>
  );
};
export default ProjectCard;
