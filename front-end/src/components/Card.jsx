import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { ModalContext } from '../contexts/ModalContext';
import { arrayCostumers } from '../assets/database/costumers';

const Card = ({ data, onOpenModal }) => {

    const { modals, setModals } = useContext(ModalContext)

    const handleModals = (type) => {
        setModals(type)
        onOpenModal()
    }

    const costumerCheck = () => {
        const costumer = arrayCostumers.filter(costumer => (data.costumer === costumer.id))
        return costumer[0]
    }

    return (
        <div key={data.id} className='screen__card'>
            <div className='card__header'>
                <div>
                    Cliente: {data.name ? (data.name) : (costumerCheck().name)}
                </div>
                Telefone: {data.phone}
            </div>
            {data.street !== null ? (
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
            ) : (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p style={{ marginBottom: "20px" }}>Sem endereço</p>
                </div>
            )}

            <div className='card__observations'>
                <p>Observações</p> {data.observations}
            </div>

            <div className='card__management'>
                {data.type ? (
                    <></>
                ) : (
                    <FontAwesomeIcon icon={faClockRotateLeft} className='card__icon' onClick={() => handleModals(1)} />
                )}
                <FontAwesomeIcon icon={faPenToSquare} className='card__icon' onClick={() => handleModals(2)} />
                <FontAwesomeIcon icon={faTrash} className='card__icon' onClick={() => handleModals(3)} />
            </div>
        </div>
    )
}

export default Card