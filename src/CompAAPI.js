import React, { useEffect, useState } from "react";
import axios from "axios";

function CompAAPI() {
    var [num, setnum] = useState(1)
    var [name, setname] = useState(1)
    var [step, setstep] = useState(1)

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            setname(res.data.name)
            setstep(res.data.moves.length)
        }
        getData()
    })
    return (
        <>
            <h1>you chose <span style={{color:'red'}}>{num}</span> value</h1>
            <h1>my name is <span style={{color:'red'}}>{name}</span></h1>
            <h1>I have <span style={{color:'red'}}>{step}</span> moves</h1>


            <select value={num} onChange={(event) => {
                setnum(event.target.value)
            }}>
                <option value='1'>1</option>
                <option value='25'>25</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </>
    )
}
export default CompAAPI