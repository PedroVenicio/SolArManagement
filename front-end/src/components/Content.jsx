import React, { useContext } from 'react'
import { StatusContext } from '../contexts/StatusContext'
import { arrayCostumers } from '../assets/database/costumers'
import { arrayCalls } from '../assets/database/calls'
import Card from './Card'
import Button from './Button'
import Modals from './Modals'
import { ModalProvider } from '../contexts/ModalContext'

const Content = () => {
  const { status } = useContext(StatusContext)

  const statusContent = () => {
    if (status === 'cliente') {
      return arrayCostumers.map((costumer) => (
        <Card data={costumer} key={costumer.id} />
      ))
    }
    else if (status === 'serviço') {
      return arrayCalls.map((call) => (
        <Card data={call} key={call.id} />
      ))
    }
  }

  return (
    <ModalProvider>
      <div className='screen'>
        <div className='screen__button'>
          <Button type='Cadastrar' />
        </div>
        {statusContent()}
        <Modals />
      </div>
    </ModalProvider>
  )
}

export default Content