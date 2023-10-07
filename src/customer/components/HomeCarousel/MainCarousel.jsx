import React from 'react'
import { MainCarouselData } from './MainCarouselData'
import './MainCarousel.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
};

const MainCarousel = () => {
    const items = MainCarouselData.map((item) => {
        return(

            <div className='carousel-container'> 
               <img src={item.pic} alt="carousel image" className='cursor-pointer carousel-image' role='presentation' />
            </div>
        )
    })
    
    return (
        <AliceCarousel
        items={items}
        responsive={responsive}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
        // disableDotsControls
    />
    )
}

export default MainCarousel


