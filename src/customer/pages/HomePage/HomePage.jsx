import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

function HomePage() {
    return (
            <>
                <MainCarousel />

                <div className='py-20 space-y-10 flex-col justify-center'>
                    <HomeSectionCarousel />
                </div>

            </>
        )
}

export default HomePage