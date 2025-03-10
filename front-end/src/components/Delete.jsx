import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { ModalContext } from '../contexts/ModalContext';

const Delete = () => {

  const { modals, setModals } = useContext(ModalContext)

  return (
    <div className='delete'>
      <div>
        <p>DESEJA DELETAR?</p>
      </div>
      <div className='modal__buttons'>
        <div className='modal__confirm'>
          <FontAwesomeIcon icon={faCheck} />
          confirmar
        </div>
        <div className='modal__cancel' onClick={() => setModals(0)}>
          <FontAwesomeIcon icon={faX} />
          cancelar
        </div>
      </div>
    </div>
  )
}

export default Delete