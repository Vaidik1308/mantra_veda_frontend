
import React from 'react'
// 🧘‍♂️ Stress Relief – Calm your mind with soothing Vedic chants.
// 🔹 😴 Better Sleep – Experience deep relaxation for restful nights.
// 🔹 🌿 Inner Healing – Harmonize your body, mind, and spirit.
// 🔹 🔋 Energy Boost – Recharge with powerful sound vibrations.
// 🔹 🕉 Spiritual Growth – Connect with divine energy through sacred mantras.
// 🔹 🎵 Focus & Clarity – Enhance concentration with sound therapy.


const BenefitsSection = () => {
    const benefits = [
        {
            icon:"🧘‍♂️",
            title:"Stress Relief",
            label:"Calm your mind with soothing Vedic chants."
        },
        {
            icon:"😴",
            title:"Better Sleep",
            label:"Calm your mind with soothing Vedic chants."
        },
        {
            icon:"🌿",
            title:"Inner Healing",
            label:"Calm your mind with soothing Vedic chants."
        },
        {
            icon:"🔋",
            title:"Energy Boost",
            label:"Calm your mind with soothing Vedic chants."
        },
        {
            icon:"🕉",
            title:"Spiritual Growth",
            label:"Calm your mind with soothing Vedic chants."
        },
        {
            icon:"🎵",
            title:"Focus & Clarity",
            label:"Calm your mind with soothing Vedic chants."
        },
    ]
  return (
    <div className='w-full my-4  mt-10'>
        <h2 className='text-2xl md:text-4xl font-[700]'>Harness the Power of Ancient Sound Therapy</h2>
        <div className='md:flex grid grid-cols-2 md:flex-row gap-2 mt-2'>
            {
                benefits.map((item,i) => (
                    <div key={i} className='flex md:flex-row flex-col gap-6 md:gap-2 md:hover:bg-[#fffae0] duration-200 cursor-pointer items-center bg-[#F9F6E6] shadow-lg border border-gray-200 rounded-lg p-2'>
                        <div className='w-full text-center md:w-1/4 md:text-4xl text-6xl'>
                            {item.icon}
                        </div>
                        <div className='flex flex-col items-center md:items-start w-full gap-1.5 md:gap-1'>
                            <h4 className='font-[700] text-sm md:text-[1rem]'>{item.title}</h4>
                            <p className='text-[0.8rem] font-[500] leading-3.5 text-center md:text-left text-gray-500'>
                                {item.label}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default BenefitsSection