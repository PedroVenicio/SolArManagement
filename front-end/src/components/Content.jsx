import React, { useState, useContext, useEffect } from 'react'
import { StatusContext } from '../contexts/StatusContext'
import { arrayCostumers } from '../assets/database/costumers'
import { arrayCalls } from '../assets/database/calls'
import Card from './Card'
import Button from './Button'
import Modals from './Modals'
import { SearchContext } from '../contexts/SearchContext'

const Content = () => {
  const { status } = useContext(StatusContext)
  const { searches } = useContext(SearchContext)
  const [data, setData] = useState(null)

  const infoModal = (data) => {
    setData(data)
  }

  const filterCostumer = arrayCostumers.filter(filter => filter.name.toLowerCase().includes(searches.toLowerCase()) ||
    filter.street.toLowerCase().includes(searches.toLowerCase()) ||
    filter.neighborhood.toLowerCase().includes(searches.toLowerCase()) ||
    filter.phone.toString().includes(searches.toString()) ||
    filter.observations.toLowerCase().includes(searches.toLowerCase())
  )

  const filterCall = arrayCalls.filter(filter => filter.phone.toString().includes(searches.toString()) ||
    filter.observations.toLowerCase().includes(searches.toLowerCase())
  )


  const statusContent = () => {
    if (status === 'cliente') {
      return filterCostumer ? (
        filterCostumer.map(costumer => (
          <Card data={costumer} key={costumer.id} onOpenModal={() => infoModal(costumer)} />
        ))
      ) : (
        arrayCostumers.map((costumer) => (
          <Card data={costumer} key={costumer.id} onOpenModal={() => infoModal(costumer)} />
        ))
      )
    }
    else if (status === 'serviço') {
      return filterCall ? (
        filterCall.map(call => (
          <Card data={call} key={call.id} onOpenModal={() => infoModal(call)} />
        ))
      ) : (
        arrayCalls.map((call) => (
          <Card data={call} key={call.id} onOpenModal={() => infoModal(call)} />
        ))
      )
    }
  }

  return (
    <div className='screen'>
      <div className='screen__header'>
        <Button type='Cadastrar' />
        <div className='screen__title'>
          <p>Gerenciamento de {status}</p>
        </div>
      </div>
      {statusContent()}
      <Modals data={data} status={status} />
    </div>
  )
}

export default Content