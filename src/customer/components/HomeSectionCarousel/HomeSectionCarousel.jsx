import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 4 },
    1024: { items: 5.5 },
};

const HomeSectionCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const items=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item)=> <HomeSectionCard />)

    const slidePrev = () => setActiveIndex(activeIndex-1)
    const slideNext = () => setActiveIndex(activeIndex+1)

    const syncActiveIndex = ({item}) => setActiveIndex(item)

    return (
        <div className='px-4 lg:px-8 border border-black'>
            <div className='relative p-5'>
                <AliceCarousel
                items={items}
                responsive={responsive}
                disableDotsControls
                disableButtonsControls
                onSlideChanged={syncActiveIndex}
                activeIndex={activeIndex}
                />

               {activeIndex!==items.length-5 &&  <Button className='z-5 bg-white' variant='contained' onClick={slideNext} sx={{position:'absolute',  bgcolor:"white", top:'8rem', right:'0rem', transform:"translateX(50%) rotate(90deg)"}} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", color:"black"}} />
                </Button>}
                {activeIndex!==0 && <Button className='z-5 bg-white' variant='contained' onClick={slidePrev} sx={{position:'absolute',  bgcolor:"white", top:'8rem', left:'0rem', transform:"translateX(50%) rotate(-90deg)"}} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", color:"black"}} />
                </Button>}
            </div>
        </div>
    )
}

export default HomeSectionCarousel