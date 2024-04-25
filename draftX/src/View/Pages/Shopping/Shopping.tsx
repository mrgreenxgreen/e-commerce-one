import React from 'react'
import Cart from '../../DesignBlocks/Cart/Cart'
import Items from '../../DesignBlocks/Items/Items'
import Categories from '../../DesignBlocks/Categories/Categories'
import { Outlet } from 'react-router-dom'
import Details from '../../DesignBlocks/Details/Details'

const Shopping = () => {
  return (
    <div className='p-2 h-5/6 bg-red-200 flex justify-center gap-2'>
      <Categories />
      <div className='p-2 bg-green-300 overflow-auto flex flex-col' style={{ width: '1024px', height: '85vh', resize:'horizontal'}}>
        <Outlet />
      </div>
      <Details/>
      <Cart />
    
    </div>
  )
}

export default Shopping