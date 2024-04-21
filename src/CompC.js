import React from 'react'
import { fname, lname } from './App'
function CompC() {
    return (
        <div>
            <fname.Consumer>
                {(fname) => {
                    return (
                        <lname.Consumer>
                            {(lname) => {
                                return(
                                    <h1> My Name is {fname} {lname}</h1>
                                )
                            }}
                        </lname.Consumer>
                    )
                }}
                {/* <h1> My Name is HMP </h1> */}
            </fname.Consumer>
        </div>
    )
}

export default CompC
