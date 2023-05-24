import React from 'react';
import "./App.css";
import Navbar from "./Components/navBar/navbar";
import Home from "./Components/home/home";
import AboutUs from './Components/about/about';
import Services from './Components/services/services';
import Booking from './Components/booking/booking';
import ContactSection from './Components/contact/contact';
const App = () => {
  
 
  return (
    <>
      <Navbar />
      <Home/>
      <AboutUs/>
      <Services/>
     <Booking/>
     <ContactSection/>
    
      
      
    </>
  );
};

export default App;
