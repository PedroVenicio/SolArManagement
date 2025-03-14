import React from 'react'
import Header from '../components/Header'
import Tab from '../components/Tab'
import Content from '../components/Content'
import { StatusProvider } from '../contexts/StatusContext'
import { SearchProvider } from '../contexts/SearchContext'

const Home = () => {
  return (
    <StatusProvider>
      <SearchProvider>
        <div>
          <Header />
          <div className='content'>
            <Tab />
            <Content />
          </div>
        </div>
      </SearchProvider>
    </StatusProvider>
  )
}

export default Home