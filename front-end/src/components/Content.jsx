import React, { useContext } from 'react'
import { StatusContext } from '../contexts/StatusContext'
import { arrayCostumers } from '../assets/database/costumers'
import { arrayCalls } from '../assets/database/calls'
import Card from './Card'
import Button from './Button'

const Content = () => {
  const { status } = useContext(StatusContext)

  const statusContent = () => {
      if (status === 'cliente') {
        return arrayCostumers.map((costumer) => (
          <Card data={costumer} key={costumer.id} />
        ))
      }
      else if (status === 'chamada') {
        return arrayCalls.map((call) => (
          <Card data={call} key={call.id} />
        ))
      }
    }

  return (
    <div className='screen'>
      <div className='screen__button'>
        <Button type='Cadastrar' />
      </div>
      {statusContent()}
    </div>
  )
}

export default Content