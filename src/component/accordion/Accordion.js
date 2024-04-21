import React, { useState } from 'react';
import { questions } from './api';
import MyAccordion from './MyAccordion'
function Accordion() {
    const [data, setData] = useState(questions)
    return (
        <div>
            <section className='main_div'>
                <h1>React Accordion Demo</h1>
                {
                    data.map((curElem) => {
                        const { id } = curElem;
                        return <MyAccordion key={id}  {...curElem} />;
                    })
                }
            </section>
        </div>
    )
}

export default Accordion
