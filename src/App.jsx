
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Hero from './pages/Home/Hero'
import Signup from './pages/Users-Venders/Signup'
import Login from './pages/Users-Venders/Login'
import PostingForm from './pages/Posting-Form/PostingForm'
import DashboardLayout from './Layouts/DashboardLayout'
import Settings from './pages/dashboard/Settings'
import Customers from './pages/dashboard/Customers'
import Orders from './pages/dashboard/Orders'
import Products from './pages/dashboard/Products'
import Transactions from './pages/dashboard/Transactions'
import LandingPage from './pages/landingpage'
import Todos from './pages/dashboard/Todos'
import SingleView from './pages/dashboard/SingleView'


function App() {
  const router = createBrowserRouter([
     {
       path: "/",
      element: <LandingPage />,
    },
     {
       path: "/ad-list",
      element: <Hero />,
    },

    {
      path: "/signup",
      element: <Signup />,
    },

    {
      path: "/login",
      element: <Login />,

    },

    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "todos",
          element: <Todos/>,
        },

        {
          path: "postingform",
          element: <PostingForm />,
    
        },

        {
          path: "products",
          element: <Products/>,
        },

        {
          path: "orders",
          element: <Orders/>,
        },

        {
          path: "customers",
          element: <Customers/>,
        },
       
        {
          path: "transactions",
          element: <Transactions/>,
        },

        {
          path: "settings",
          element: <Settings/>,
        },

        {
          path: "todos/:id",
          element: <SingleView/>,
        },
        
      ],
    },




  ])

  return (<RouterProvider router={router} />
  )
}

export default App
