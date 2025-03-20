import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { ModalContext } from '../contexts/ModalContext';

const RegisterCostumer = ({ status }) => {

  const { modals, setModals } = useContext(ModalContext)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [number, setNumber] = useState('')
  const [observations, setObservations] = useState('')

  return (
    <div className='registerCostumer'>
      <p1>Cadastrar {status}</p1>

      <div className='registerCostumer__row'>
        <div className='registerCostumer__inputs' style={{ width: "70%" }}>
          <p2>Cliente</p2> <input type='text' value={name} onChange={event => setName(event.target.value)}/>
        </div>
        <div className='registerCostumer__inputs' style={{ width: "30%" }}>
          <p2>Telefone</p2> <input type='text' value={phone} onChange={event => setPhone(event.target.value)}/>
        </div>
      </div>

      <div className='registerCostumer__row'>
        <div className='registerCostumer__inputs' style={{ width: "45%" }}>
          <p2>Rua</p2> <input type='text' value={street} onChange={event => setStreet(event.target.value)}/>
        </div>
        <div className='registerCostumer__inputs' style={{ width: "45%" }}>
          <p2>Bairro</p2> <input type='text' value={neighborhood} onChange={event => setNeighborhood(event.target.value)}/>
        </div>
        <div className='registerCostumer__inputs' style={{ width: "10%" }}>
          <p2>Número</p2> <input type='text' value={number} onChange={event => setNumber(event.target.value)}/>
        </div>
      </div>

      <div className='registerCostumer__row'>
        <div className='registerCostumer__inputs' style={{ width: "100%", marginBottom: "30px" }}>
          <p2>Observações</p2> <input type='text' value={observations} onChange={event => setObservations(event.target.value)}/>
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

export default RegisterCostumer