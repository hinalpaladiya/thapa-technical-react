import React, { useContext } from 'react'
import CompC from './CompC'
import { fname, lname } from './App'

function CompB() {
    const fnamecontext = useContext(fname)
    const lnamecontext = useContext(lname)
    return (
        <div>
            <CompC />
            <h1> My Name is {fnamecontext} {lnamecontext} </h1>
        </div>
    )
}

export default CompB
