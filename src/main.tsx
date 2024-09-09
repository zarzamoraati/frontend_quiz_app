import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './pages/Layout'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { SquizPage } from './pages/SquizPage'
import { About } from './pages/About'

const router=createHashRouter([
  {
    element:<Layout/>,
    path:"/",
    children:[
      { 
        index:true,
        element:<SquizPage/>,
        
      },{
        path:"/about",
        element:<About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
