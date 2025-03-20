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
        <div className='edit__row'>
          <div className='edit__inputs' style={{ width: "70%", }}>
            <p2>Nome</p2> <input type='text' value={name} onChange={event => setName(event.target.value)} />
          </div>
          <div className='edit__inputs' style={{ width: "30%", }}>
            <p2>Telefone</p2> <input type='text' value={phone} onChange={event => setPhone(event.target.value)} />
          </div>
        </div>
        <div className='edit__row'>
          <div className='edit__inputs' style={{ width: "45%", }} >
            <p2>Rua</p2> <input type='text' value={street} onChange={event => setStreet(event.target.value)} />
          </div>
          <div className='edit__inputs' style={{ width: "45%", }}>
            <p2>Bairro</p2> <input type='text' value={neighborhood} onChange={event => setNeighborhood(event.target.value)} />
          </div>
          <div className='edit__inputs' style={{ width: "10%", }}>
            <p2>Número</p2> <input type='text' value={number} onChange={event => setNumber(event.target.value)} />
          </div>
        </div>
        <div className='edit__inputs'>
          <p2>Observações</p2> <input type='text' value={observations} onChange={event => setObservations(event.target.value)} />
        </div>
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

export default Edit