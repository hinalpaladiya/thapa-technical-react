import React from 'react'

function Sresult(props) {
    const img = `https://picsum.photos/200/300?${props.name}`
    return (
        <div>
            <img src={img} alt="search" />
        </div>
    )
}

export default Sresult
