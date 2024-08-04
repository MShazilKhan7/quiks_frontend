import React from 'react'
import PrimaryCard from './PrimaryCard'

export default function PrimaryCards() {
  return (
    <>
        <div className='border-2 border-priamry flex flex-auto lg:w-[30%] w-full order-2 lg:order-1'>
            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[1.5rem] font-semibold font-secondary text-gray-800'>Trending Quiks</h2>
                    <button className='text-[0.85rem] font-semibold font-secondary text-gray-700'>Show all</button>
                </div>
                <div className="grid gap-4 mt-1 lg:grid-cols-1 md:grid-cols-2 sm:lg:grid-cols-1 ">
                    <PrimaryCard id={1} image="https://images.blinkist.io/images/books/5f802b3b6cee07000646ad41/1_1/470.jpg" category="Business" title="How I built this" author="Guy Raz" length={15}/>
                    <PrimaryCard id={2} image="https://images.blinkist.io/images/books/66598ac581aa110007c1ca1e/1_1/470.jpg" category="Personal" title="The humour habit" author="Sunny Bonnell" length={18}/>
                </div>
            </div>
        </div>
    </>
  )
}
