import React from 'react'
import web from '../src/images/js2.png'
import { NavLink } from 'react-router-dom'
import Comman from './Common'

function About() {
    return (
        <Comman name='Welcome to about' imgsrc={web} visit='/contact' btnname='Contact Now' />
        //     <section id='header' className='d-flex align-items-center'>
        //         <div className='container-fluid nav_bg'>
        //             <div className='row'>
        //                 <div className='col-10 mx-auto'>
        //                     <div className='row'>
        //                         <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
        //                             <h1>
        //                                 Welcome to about
        //                             </h1>
        //                             <h2 className='my-3'>
        //                                 We are team of talented developer
        //                             </h2>
        //                             <div className='mt-3'>
        //                                 <NavLink to='/service' className='btn-get-started'>Contact now</NavLink>
        //                             </div>
        //                         </div>
        //                         <div className='col-lg-6 order-1 order-lg-2 header-img'>
        //                             <img src={web} className='img-fluid animated' alt='Home image' />
        //                         </div>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>
    )
}

export default About
