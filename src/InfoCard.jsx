import info from "./assets/icons/info.svg";
import { useContext } from "react";
import { AppContext } from "./App";

const InfoCard = () => {
  const context = useContext(AppContext);

  const showContactInfo = () => {
    context.setContactToggle(true);
  };

  const hideContactInfo = () => {
    context.setContactToggle(false);
  };

  return (
    <div
      className='info-contact-card'
      onMouseEnter={showContactInfo}
      onMouseLeave={hideContactInfo}
    >
      <img src={info} alt='info.svg' />
      <h4>INFO</h4>
    </div>
  );
};
export default InfoCard;
