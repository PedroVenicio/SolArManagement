import React, { useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTruckPickup, faPlus } from '@fortawesome/free-solid-svg-icons';
import { StatusContext } from '../contexts/StatusContext';

const Button = ({ type }) => {

  const { status, setStatus } = useContext(StatusContext)


  const getIcon = () => {
    if (type.toLowerCase() === 'cliente') {
      return <FontAwesomeIcon icon={faUser} className='tab__button--icon' />
    }
    else if (type.toLowerCase() === 'chamada') {
      return <FontAwesomeIcon icon={faTruckPickup} className='tab__button--icon' />
    }
    else if (type.toLowerCase() === 'cadastrar') {
      return <FontAwesomeIcon icon={faPlus} className='tab__button--icon' />
    }
  }

  const handleClick = () => {
    if (type.toLowerCase() === 'cliente' || type.toLowerCase() === 'chamada') {
      setStatus(type.toLowerCase())
    }
    else {
      console.log('nao é mano')
    }
  }

  return (
    <div className='tab__button' onClick={handleClick}>
      <div className='tab__button--content'>
        {getIcon()}
        {type}
      </div>
    </div>
  )
}

export default Button