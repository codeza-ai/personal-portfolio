import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from "./Header"
import Footer from "./Footer"

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route to = "/" element = {<Home/>}/>
        <Route to="/contact" element = {<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
