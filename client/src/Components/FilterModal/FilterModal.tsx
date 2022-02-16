import React, { useState } from 'react';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default function FilterModal() {
  let subtitle: any;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  };
  return (
    <div className='FilterModal-container'>
      <button className='Filter-button' onClick={openModal}>
        FILTER
      </button>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='FILTER'
        ariaHideApp={false}
      >
        <h2>This is where we would put our feed filters</h2>
        <h3>If we had any😂</h3>
        <button onClick={closeModal} className='Filter-button'>
          Close
        </button>
      </Modal>
    </div>
  );
}
