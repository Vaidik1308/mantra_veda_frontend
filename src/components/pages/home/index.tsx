import React from 'react'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'

const HomePage = () => {
  return (
    <div className='w-[85%] my-4 min-h-[80vh] mx-auto'>
        <HeroSection/>

        <BenefitsSection/>
    </div>
  )
}

export default HomePage