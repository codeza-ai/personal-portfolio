import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Header2 from "./components/Header2"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/personal-portfolio/" element={<Home />} />
        <Route path="/personal-portfolio/contact" element={<Contact />} />
        <Route path="/personal-portfolio/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
