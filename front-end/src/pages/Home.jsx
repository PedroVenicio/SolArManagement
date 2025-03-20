import React from 'react'
import Header from '../components/Header'
import Tab from '../components/Tab'
import Content from '../components/Content'
import { StatusProvider } from '../contexts/StatusContext'
import { SearchProvider } from '../contexts/SearchContext'
import { ModalProvider } from '../contexts/ModalContext'


const Home = () => {
  return (
    <StatusProvider>
      <SearchProvider>
        <ModalProvider>
          <div>
            <Header />
            <div className='content'>
              <Tab />
              <Content />
            </div>
          </div>
        </ModalProvider>
      </SearchProvider>
    </StatusProvider>
  )
}

export default Home