import React from 'react'
import Home from './Home'
import { Route, Routes, Navigate } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Footer from './Footer.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import Navbar from './Navbar'

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home />}>Home</Route>
                <Route exact path='/about' element={<About />}>Home</Route>
                <Route exact path='/service' element={<Service />}>Home</Route>
                <Route exact path='/contact' element={<Contact />}>Home</Route>
                <Route path='*' element={<Navigate to='/' />}></Route>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App
