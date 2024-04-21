import React, { useState } from 'react'


function Contact() {
    let [data, setDate] = useState({
        fullname:'',
        email:'',
        phone:'',
        message:''
    })
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`fullname = ${data.fullname},
        phone = ${data.phone},
        email = ${data.email},
        message = ${data.message}`)

    }
    const inputEvent = (e) =>{
        let {name, value} = e.target
        setDate((prev) => {
            return{
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <div>
            <div className='my-5'>
                <h1 className='text-center'>Contact US</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-5 col-10 mx-auth'>
                        <form onSubmit={formSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name='fullname' value={data.fullname} onChange={inputEvent}
                                    placeholder="Enter name" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Phone</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name='phone' value={data.phone} onChange={inputEvent}
                                    placeholder="Enter number" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name='email' value={data.email} onChange={inputEvent}
                                    placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"
                                    name='Password' onChange={inputEvent}
                                    placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" name="message" onChange={inputEvent} id="exampleFormControlTextarea1" rows="3">{data.message}</textarea>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
