import React from 'react'

function Footer() {
    let year = new Date().getFullYear();
    return (
        <div>
            <footer>
                <p className='text-center'>Copyright @{year}</p>
            </footer>
        </div>
    )
}

export default Footer
