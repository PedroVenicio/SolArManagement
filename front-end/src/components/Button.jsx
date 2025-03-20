import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faScrewdriverWrench, faPlus } from '@fortawesome/free-solid-svg-icons';
import { StatusContext } from '../contexts/StatusContext';
import { ModalContext } from '../contexts/ModalContext';


const Button = ({ type }) => {

  const { status, setStatus } = useContext(StatusContext)
  const { modals, setModals } = useContext(ModalContext)


  const getIcon = () => {
    if (type.toLowerCase() === 'cliente') {
      return <FontAwesomeIcon icon={faUser} className='tab__button--icon' />
    }
    else if (type.toLowerCase() === 'serviço') {
      return <FontAwesomeIcon icon={faScrewdriverWrench} className='tab__button--icon' />
    }
    else if (type.toLowerCase() === 'cadastrar') {
      return <FontAwesomeIcon icon={faPlus} className='tab__button--icon' />
    }
  }

  const handleClick = () => {
    if (type.toLowerCase() === 'cliente' || type.toLowerCase() === 'serviço') {
      setStatus(type.toLowerCase())
    }
    else if (type.toLowerCase() === 'cadastrar') {
      setModals(4)
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