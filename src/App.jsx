import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/landingpage'
import RootLayout from './Layouts/RootLayout'
import DashboardLayout from './Layouts/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'
import Customers from './pages/dashboard/Customers'
import Orders from './pages/dashboard/Orders'
import Products from './pages/dashboard/Products'
import Settings from './pages/dashboard/Settings'
import Login from './pages/Users-Venders/Login'
import Signup from './pages/Users-Venders/Signup'
import Adverts from './pages/dashboard/Adverts'
import Forgotten from './pages/Users-Venders/Forgotten'
import PostingForm from './pages/Posting-Form/PostingForm'



const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true, element: <LandingPage />,
        },


      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/adverts",
      element: <Adverts/>
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/forgotten",
      element: <Forgotten />,
    },
    {
      path : "/postingform",
      element: <PostingForm/>,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Adverts /> },
        { path: 'customers', element: <Customers /> },
        { path: 'orders', element: <Orders /> },
        { path: 'products', element: <Products /> },
        { path: 'settings', element: <Settings /> }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App