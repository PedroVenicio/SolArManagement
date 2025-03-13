import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { ModalContext } from '../contexts/ModalContext';

const Edit = ({ data }) => {

  const { modals, setModals } = useContext(ModalContext)

  const [name, setName] = useState(data.name)
  const [phone, setPhone] = useState(data.phone)
  const [street, setStreet] = useState(data.street)
  const [neighborhood, setNeighborhood] = useState(data.neighborhood)
  const [number, setNumber] = useState(data.number)
  const [observations, setObservations] = useState(data.observations)

  return (
    <div className='edit'>
      <div>
        <p>EDITANDO</p>
      </div>
      <div className='edit__content'>
        <div className='edit__firstRow'>
          <input type='text' placeholder='Nome' value={name} onChange={event => setName(event.target.value)} style={{ width: "70%", }} />
          <input type='text' placeholder='Telefone' value={phone} onChange={event => setPhone(event.target.value)} style={{ width: "30%", }} />
        </div>
        <div className='edit__secondRow'>
          <input type='text' placeholder='Rua' value={street} onChange={event => setStreet(event.target.value)} style={{ width: "45%", }} />
          <input type='text' placeholder='Bairro' value={neighborhood} onChange={event => setNeighborhood(event.target.value)} style={{ width: "45%", }} />
          <input type='text' placeholder='Numero' value={number} onChange={event => setNumber(event.target.value)} style={{ width: "10%", }} />
        </div>
        <input type='text' placeholder='Observações' value={observations} onChange={event => setObservations(event.target.value)} />
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