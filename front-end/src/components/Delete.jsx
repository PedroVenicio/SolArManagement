import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { ModalContext } from '../contexts/ModalContext';

const Delete = ({ data }) => {

  const { modals, setModals } = useContext(ModalContext)

  return (
    <div className='delete'>
      <div>
        <p>DESEJA DELETAR?</p>
      </div>
      <div>
        Cliente: {data.name}
      </div>
      <div className='modal__buttons'>
        <div className='modal__confirm'>
          <FontAwesomeIcon icon={faCheck} />
          Confirmar
        </div>
        <div className='modal__cancel' onClick={() => setModals(0)}>
          <FontAwesomeIcon icon={faX} />
          Cancelar
        </div>
      </div>
    </div>
  )
}

export default Delete