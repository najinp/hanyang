
import React from 'react'

const Sub02 = ({ content }) => {
    const num = 1;
    return (
        <section className='Subpage'>
            <div className="inner">
                <h2>{content[num].tit}</h2>
                <p>{content[num].des}</p>
            </div>
        </section>
    )
}

export default Sub02