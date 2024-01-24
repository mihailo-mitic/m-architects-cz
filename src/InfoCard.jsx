import { useContext } from "react";
import { AppContext } from "./App";

const InfoCard = () => {
  const context = useContext(AppContext);

  const showContactInfo = () => {
    context.setProjectData({
      name: "Ing. arch. Mihailo Mitić",
      images: [],
      brief: "licensed architect no. 04 212",
      year: "mihailo@m-architects.cz  |  +381 64 992 7428",
      description: "",
      category: "",
    });
  };

  const showModalInfo = () => {
    context.setModalVisible(true);
  };

  return (
    <div
      className='info-contact-card'
      onMouseEnter={showContactInfo}
      onClick={showModalInfo}
    >
      <h4>INFO</h4>
    </div>
  );
};
export default InfoCard;
