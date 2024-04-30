import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../View/App'
import Shopping from '../View/Pages/Shopping/Shopping'
import Items from '../View/DesignBlocks/Items/Items'
import FeaturedProducts from '../View/DesignBlocks/FeaturedProducts/FeaturedProducts'

const Router = createBrowserRouter([
    {
        path:"Baratilyo",
        element:<App/>,
        children: [
            {
                path:"",
                element:<Shopping/>,
            
            }
        ]
    }
])

export default Router