import React, {useState, useContext } from 'react'
import { StatusContext } from '../contexts/StatusContext'
import { arrayCostumers } from '../assets/database/costumers'
import { arrayCalls } from '../assets/database/calls'
import Card from './Card'
import Button from './Button'
import Modals from './Modals'
import { ModalProvider } from '../contexts/ModalContext'

const Content = () => {
  const { status } = useContext(StatusContext)
  const [data, setData] = useState(null)

  const infoModal = (data) => {
    setData(data)
  }

  const statusContent = () => {
    if (status === 'cliente') {
      return arrayCostumers.map((costumer) => (
        <Card data={costumer} key={costumer.id} onOpenModal={() => infoModal(costumer)} />
      ))
    }
    else if (status === 'serviço') {
      return arrayCalls.map((call) => (
        <Card data={call} key={call.id} onOpenModal={() => infoModal(call)}/>
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
        <Modals data={data}/>
      </div>
    </ModalProvider>
  )
}

export default Content