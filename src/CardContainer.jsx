import ProjectCard from "./ProjectCard";
import InfoCard from "./InfoCard";
import { data } from "./data";
import { Link } from "react-router-dom";

const CardContainer = () => {
  return (
    <div className='card-container-root'>
      <div className='card-container'>
        {data.map((project) => {
          return (
            <Link to={`/details`} key={project.id}>
              <ProjectCard props={project} />
            </Link>
          );
        })}
        <InfoCard />
      </div>
    </div>
  );
};
export default CardContainer;
