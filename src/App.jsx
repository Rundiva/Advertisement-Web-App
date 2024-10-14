
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Hero from './pages/Home/Hero'
import Signup from './pages/Users-Venders/Signup'
import Login from './pages/Users-Venders/Login'
import PostingForm from './pages/Posting-Form/PostingForm'
import DashboardLayout from './Layouts/DashboardLayout'
import Overview from './pages/dashboard/Overview'
import Settings from './pages/dashboard/Settings'

function App() {
 const router = createBrowserRouter([

  //path: "index",
  //element: "<GoBack/>"

  {
    path: "/",
    element: <Hero/>,
  },

  {
    path: "/add-new",
    element: <PostingForm/>,

  },

  {
    path: "/signup",
    element: <Signup/>,
  },

  {
    path: "/login",
    element: <Login/>,

  },

  {
    path: "/dashboard",
    element:<DashboardLayout/>,
    children: [
    {
      // path: "overview",
      index: true,
      element: <Overview/>
  
    },
  
  { path: "settings",
    element: <Settings/>
  
  },
  ],
  },
   

  

 ])

  return ( <RouterProvider router={router}/>
  )
}

export default App
