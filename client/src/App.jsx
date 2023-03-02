import React from 'react'
import { 
  createBrowserRouter, 
  RouterProvider, 
  Link } 
from 'react-router-dom'
import Add from './pages/Add'
import Books from './pages/Books'
import Update from './pages/Update'

// root routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
])

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}