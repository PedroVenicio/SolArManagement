import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { ModalContext } from '../contexts/ModalContext';

const Edit = ({ data }) => {

  const { modals, setModals } = useContext(ModalContext)

  return (
    <div className='edit'>
      <div>
        <p>EDITANDO</p>
      </div>
      <div>
        <input type='text' placeholder='Nome' value={data.name}/>
        <input type='text' placeholder='Telefone' value={data.phone}/>
        <input type='text' placeholder='Rua' value={data.street}/>
        <input type='text' placeholder='Bairro' value={data.neighborhood}/>
        <input type='text' placeholder='Numero' value={data.number}/>
        <input type='text' placeholder='Observações' value={data.observations}/>
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

export default Edit