import ProjectCard from "./ProjectCard";
import InfoCard from "./InfoCard";
import { data } from "./data";
import { Link } from "react-router-dom";

const CardContainer = () => {
  return (
    <div className='grid-container-main-page'>
      {data.map((project) => {
        return (
          <Link to={`/details`} key={project.id}>
            <ProjectCard props={project} />
          </Link>
        );
      })}
      <InfoCard />
    </div>
  );
};
export default CardContainer;
