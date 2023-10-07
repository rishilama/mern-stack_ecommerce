import React from 'react'

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
            
            <div className='h-[13rem] w-[15rem]'>
                <img className='object-cover object-top w-full h-full' src="https://cdn.pixabay.com/photo/2021/07/12/16/55/wristwatch-6409941_1280.jpg" alt="home_card" />
            </div>

            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>Rolex</h3>
                <p className='mt-2 txt-sm text-gray-500'>Model name</p>
            </div>

        </div>
    )
}

export default HomeSectionCard