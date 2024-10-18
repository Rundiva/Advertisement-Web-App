import React from 'react'
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';


const RootLayout = ({ children, headerText }) => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;