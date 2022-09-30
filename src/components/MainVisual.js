import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Menu from './Menu';



const MainVisual = () => {
    return (
        <section className='MainVisual'>
            <Slider>
                <figure className='main01'>
                </figure>
            </Slider>
            <Menu />
        </section>
    )
}

export default MainVisual