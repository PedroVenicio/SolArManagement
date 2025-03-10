import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { ModalContext } from '../contexts/ModalContext';

const Card = ({ data }) => {

    const { modals, setModals } = useContext(ModalContext)

    return (
        <div key={data.id} className='screen__card'>
            <div className='card__header'>
                <div>
                    Cliente: {data.name}
                </div>
                Telefone: {data.phone}
            </div>
            <div className='card__adress'>
                <div className='card__street'>
                    <p>Endereço</p> {data.street}
                </div>
                <div className='card__neighborhood'>
                    <p>Bairro</p> {data.neighborhood}
                </div>
                <div className='card__number'>
                    <p>Número</p> {data.number}
                </div>
            </div>

            <div className='card__observations'>
                <p>Observações</p> {data.observations}
            </div>

            <div className='card__management'>
                <FontAwesomeIcon icon={faClockRotateLeft} className='card__icon' onClick={() => setModals(1)}/>
                <FontAwesomeIcon icon={faPenToSquare} className='card__icon' onClick={() => setModals(2)}/>
                <FontAwesomeIcon icon={faTrash} className='card__icon' onClick={() => setModals(3)}/>
            </div>
        </div>
    )
}

export default Card