import React, { useEffect, useState } from 'react'

function Statewise() {
    const [data, setdata] = useState([])
    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        // console.log(actualData.statewise);
        setdata(actualData.statewise)
    }
    useEffect(() => {
        getCovidData();
    })
    return (
        <div className='container-fluid mt-5'>
            <div className='main-heading'>
                <h1 className='mb-5'>India covid Dashboard</h1>
            </div>
            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>state</th>
                            <th>confirmed</th>
                            <th>recovered</th>
                            <th>death</th>
                            <th>active</th>
                            <th>updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((currentElement, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{currentElement.state}</td>
                                        <td>{currentElement.confirmed}</td>
                                        <td>{currentElement.recovered}</td>
                                        <td>{currentElement.deatd}</td>
                                        <td>{currentElement.active}</td>
                                        <td>{currentElement.lastupdatedtime}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Statewise
