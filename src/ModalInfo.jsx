import { useContext } from "react";
import { AppContext } from "./App";

const ModalInfo = () => {
  const context = useContext(AppContext);
  const closeModal = () => {
    context.setModalVisible(false);
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2>Ing. arch. Mihailo Mitić</h2>
        <h3>+381 64 992 7428 | +420 773 532 536 (viber only)</h3>
        <h4>
          <a href='mailto:info@m-archtects.cz'>info@m-architects.cz</a>
        </h4>

        <h5>Licensed architect</h5>
        <h5>Czech Republic (ČKA 04 212) | Serbia (321A18522 (A))</h5>

        <button className='modal-btn' onClick={closeModal}>
          CLOSE
        </button>
      </div>
    </div>
  );
};
export default ModalInfo;
