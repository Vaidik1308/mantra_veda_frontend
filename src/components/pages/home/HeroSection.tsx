import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



const HeroSection = () => {
  return (
    <div className='w-full flex flex-col md:gap-4'>
      <div className='md:px-2 md:mt-12 flex md:flex-row flex-col items-center '>
        <div className='md:w-1/2 w-full flex flex-col gap-2'>
          <h1 className=' text-[2.2rem] md:text-6xl md:flex-col md:items-start font-[600]'>
            <span>
              Harness the Power of  
            </span>
            <span className='font-[700]  px-3  text-orange-500'>
              Vedic Mantras 
            </span>
            <span className='flex  flex-wrap'>
              for 
              <span className='font-[700] md:mx-1.5  text-green-400'>
                Modern Healing
              </span>
            </span> 
          </h1>
          <div className='text-[0.8rem] leading-4 font-[600] text-[#563C5C] md:text-[1.1rem] lowercase md:leading-5 md:font-[500]'>
          Experience the vibrations of Vedic chants that restore balance, peace, and wellness to your mind, body, and soul.
          </div>
        </div>
        <div className='w-full md:w-1/2'>
            <Image src={"https://plus.unsplash.com/premium_vector-1724866284844-581d39bfa4b0?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='mantra_inmg_hero_pic' width={100} height={100} className=' h-[280px] mx-auto md:h-[520px] w-[80%] md:w-[80%] object-cover'/>
        </div>
      </div>

      <div className='flex justify-center items-center mt-1.5  '>
        <Button  className='bg-none rounded-full bg-[#563C5C] border border-gray-300 w-[100px] flex justify-center items-center'>
          <ChevronDown className='animate-bounce text-3xl' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection