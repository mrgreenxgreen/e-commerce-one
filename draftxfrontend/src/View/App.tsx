import React from 'react'
import Header from './DesignBlocks/Header/Header'
import Footer from './DesignBlocks/Footer/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header/>
      <div style={{minHeight:"85vh"}}>
          <Outlet/>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default App