import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
import ListView from './pages/landingpage/ListView'
import GridView from './pages/landingpage/GridView'
import PostingForm from './pages/Users-Venders/PostingForm'
import { FaTrainSubway } from 'react-icons/fa6'
import Transactions from './pages/dashboard/Transactions'
import SingleView from './pages/dashboard/SingleView'
import LandingPage from './pages/landingpage'
import AdDetailsMain from './pages/singleAd/AdDetailsMain'
import { Filter } from 'lucide-react'
import EditAdvertForm from './pages/Users-Venders/EditAdvert'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";






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
      path: "/adverts/:id",
      element:<AdDetailsMain />
    },
    // {
    //   path: "/adverts",
    //   element: <Adverts/>
    // },

    // {
    //   path: "/adverts/:id",
    //   element: <SingleView/>
    // },
  {
      path: "/ads/:id",
      element: <AdDetailsMain />
    },
    {
      path: "/adverts",
      element: <Adverts />
    },
    {
      path: "/editadvertform/:id",
      element: <EditAdvertForm />
    },

    {
      path: "/adverts/:id",
      element: <SingleView />
    },
    {
      path: "/signup",
      element: <Signup />
    },

    {
      path: "/listview",
      element: <ListView />
    },
    {
      path: "/filterview",
      element: <Filter />
    },
    {
      path: "/gridview",
      element: <GridView />
    },
    {
      path: "/forgotten",
      element: <Forgotten />,
    },
    {
      path: "/postingform",
      element: <PostingForm />
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Adverts /> },
        { path: 'settings', element: <Settings /> },
        { path: 'transactions', element: <Transactions /> },
        { path: 'singleview', element: <SingleView /> }
      ]
    }
  ])

  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  )
}

export default App