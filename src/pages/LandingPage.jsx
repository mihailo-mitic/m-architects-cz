import CardContainer from "../CardContainer";
import RandomQuote from "../RandomQuote";
import ProjectDescription from "../ProjectDescription";
import ContactDetails from "../ContactDetails";
import { useContext } from "react";
import { AppContext } from "../App";

const LandingPage = () => {
  const context = useContext(AppContext);
  const { name, brief, year, description } = context.projectData;

  const contactToggle = context.contactToggle;

  return (
    <>
      {contactToggle ? (
        <ContactDetails />
      ) : (
        <ProjectDescription
          name={name}
          brief={brief}
          description={description}
          year={year}
        />
      )}
      <CardContainer />
      <RandomQuote />
    </>
  );
};
export default LandingPage;
