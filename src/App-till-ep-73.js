import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

function App() {
    return (
        <div className='container'>
            <h1 className='text-center'>Hello </h1>
            <div className='text-center'>
                <button className='btn btn-primary'>Welcome to future</button>
                <div class="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
