import React, { useState } from 'react'

function MyAccordion({ question, answer }) {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className='main_heading'>
                <h1 onClick={() => setShow(!show)}>{show ? '-' : '+'}</h1>
                <h3>{question}</h3>
            </div>
            <p>{ show && <p>{answer}</p>}</p>
        </div>
    )
}

export default MyAccordion
