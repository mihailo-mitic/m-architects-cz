import CardContainer from "../CardContainer";
import RandomQuote from "../RandomQuote";
import ProjectDescription from "../ProjectDescription";
import { useContext } from "react";
import { AppContext } from "../App";
import ModalInfo from "../ModalInfo";

const LandingPage = () => {
  const context = useContext(AppContext);
  const { name, brief, year, description } = context.projectData;

  const modalVisible = context.modalVisible;

  return modalVisible ? (
    <ModalInfo />
  ) : (
    <div className='root-container'>
      <div className='page-container'>
        <div className='top-container'>
          <ProjectDescription
            name={name}
            brief={brief}
            description={description}
            year={year}
          />
        </div>
        <div className='middle-container'>
          <CardContainer />
        </div>
        <div className='bottom-container'>
          <RandomQuote />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
