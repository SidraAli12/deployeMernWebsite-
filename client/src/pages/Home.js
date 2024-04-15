import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Whois from '../components/Whois'
import Manage from '../components/Manage'
import ManageTwo from '../components/ManageTwo'
import ManageThree from '../components/ManageThree'
import ManageFour from '../components/ManageFour'
import ManageFive from '../components/ManageFive'
import { Outlet, Link } from "react-router-dom";
import Footer from '../components/Footer'
function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Whois/>
    <Manage/>
    <ManageTwo/>
    <ManageThree/>
    <ManageFour/>
    <ManageFive/>
    <Footer/>
    <Outlet/>
    </>
  )
}

export default Home
