import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
