import React from 'react'
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const RootLayout = ({children, headerText}) => {
  return (
    <div>
    <Navbar/>
    <h1> {headerText}</h1>
    <div>{children}</div>
    <Footer/>
    </div>
  );
};

export default RootLayout;