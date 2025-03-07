import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

const Card = ({ data }) => {
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
                <FontAwesomeIcon icon={faClockRotateLeft} className='card__icon' />
                <FontAwesomeIcon icon={faPenToSquare} className='card__icon' />
                <FontAwesomeIcon icon={faTrash} className='card__icon' />
            </div>

        </div>
    )
}

export default Card