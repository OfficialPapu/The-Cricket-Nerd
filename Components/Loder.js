import React from 'react'

const Loder = () => {
    return (
        <div className='flex justify-center my-12'>
            <div class="flex justify-center items-center gap-2 w-full">
                <div class="animate-pulse bg-gray-300 w-24 h-24 rounded-full"></div>
                <div class="flex flex-col gap-2">
                    <div class="animate-pulse bg-gray-300 w-[15vw] h-5 rounded-full"></div>
                    <div class="animate-pulse bg-gray-300 w-[25vw] h-5 rounded-full"></div>
                    <div class="animate-pulse bg-gray-300 w-[50vw] h-5 rounded-full"></div>
                    <div class="animate-pulse bg-gray-300 w-[70vw] h-5 rounded-full"></div>
                    <div class="animate-pulse bg-gray-300 w-[90vw] h-5 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Loder
