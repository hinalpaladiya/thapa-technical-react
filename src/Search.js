import React, { useState } from 'react'
import Sresult from './Sresult'

function Search() {
    var [img, setImg] = useState('')
    var InputEvent = (e) => {
        setImg(e.target.value)

    }
    return (
        <div>
            <input type='text' name='' placeholder='Search anything' value={img} onChange={InputEvent} />
            {img == '' ? null : <Sresult name={img} /> } 
        </div>
    )
}

export default Search
