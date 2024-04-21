import React, { useEffect, useState } from 'react'
import Statewise from './component/accordion/stateWiseData/Statewise'
import CompAAPI from './CompAAPI'
import Error from './Error'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import User from './User'
import Search from './Search'

function App() {
    const Name = () => {
        return (
            <h2>fdsf</h2>
        )
    }
    return (
        <div>
            <Menu />
            {/* <Routes>
                <Route path='/' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route element={<Error/>} />

            </Routes> */}
            <Routes>
                <Route exact path='/' element={<About name='about name' />} />
                <Route path='/about' element={<About />} />
                <Route path='/search' element={<Search />} />

                <Route path='/contact' element={<Contact />} />
                <Route path='/contact/name' element={<Name />} />
                <Route path='/user/:fname/:lname' element={<User />} />
                {/* <Route path='/*' element={<Error />} /> */}
                <Route path="*" element={<Navigate to ="/search" />}/>
            </Routes>
        </div>
        // <div>
        //     <Switch>
        //         <Router path='/' component={About} />


        //     </Switch>
        //     {/* <About />
        //     <Contact /> */}
        //     {/* <h1>Hi</h1> */}
        //     {/* <CompAAPI /> */}
        //     {/* <Statewise /> */}
        // </div>
    )
    // var [num, setnum] = useState(1);
    // useEffect(() => {
    //     document.title=`you clicked me ${num} times`
    //     // alert('fd')
    // })
    // return (
    //     <div>
    //         <button onClick={() => { setnum(num++) }}>Click me {num} </button>
    //     </div>
    // )
}

export default App
