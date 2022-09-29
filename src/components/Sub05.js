
import React from 'react'

const Sub05 = ({ content }) => {
    const num = 4;
    return (
        <section className='Subpage'>
            <div className="inner">
                <h2>{content[num].tit}</h2>
                <p>{content[num].des}</p>
            </div>
        </section>
    )
}

export default Sub05