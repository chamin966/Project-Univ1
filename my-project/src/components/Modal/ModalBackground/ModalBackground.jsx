import LoginModal from '../LoginModal/LoginModal';
import './ModalBackground.css';

function ModalBackground({ setModalOpen }) {
  const closeModal = (e) => {
    if (e.target !== e.currentTarget) return;
    setModalOpen(false);
  };
  return (
    <div className='basic-modal__background' onClick={closeModal}>
      <div className='basic-modal'>
        <LoginModal setModalOpen={setModalOpen} />
      </div>
    </div>
  );
}

export default ModalBackground;
