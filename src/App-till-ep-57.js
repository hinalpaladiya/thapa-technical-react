import React, { createContext, useEffect, useState } from 'react'
// import CompA from './CompA'
// const fname = createContext()
// const lname = createContext()
function App() {
    var [Num, setNum] = useState(0)
    var [Nums, setNums] = useState(0)

    useEffect(()=>{
        alert('fs') 
        console.log('dsd');
    }, [Num])
    return (
        <div>
            {/* <h1>dsad</h1> */}
            <button onClick={(() => { setNum(Num++) })}>Click me {Num}</button><br />
            <button onClick={(() => { setNums(Nums++) })}>Click me {Nums}</button>

            {/* <fname.Provider value={'hinal'}>
                <lname.Provider value={'paladiya'}>
                    <CompA />
                </lname.Provider>
            </fname.Provider> */}
        </div>
    )
}

export default App
// export { fname, lname }
