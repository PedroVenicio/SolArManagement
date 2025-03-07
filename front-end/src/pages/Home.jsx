import React from 'react'
import Header from '../components/Header'
import Tab from '../components/Tab'
import Content from '../components/Content'
import { StatusProvider } from '../contexts/StatusContext'

const Home = () => {
  return (
    <StatusProvider>
      <div>
        <Header />
        <div className='content'>
          <Tab />
          <Content />
        </div>
      </div>
    </StatusProvider>
  )
}

export default Home