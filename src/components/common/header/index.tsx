import LogoComp from '@/components/reusable/Logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const HeaderSection = () => {
    const navigationLinks = [
        {
            label:"Home",
            path:"/"
        },
        {
            label:"Mantras",
            path:"/"
        },
        {
            label:"About Us",
            path:"/"
        },
    ]
  return (
    <header className='w-full border-b border-gray-200'>

        <div className='p-3 w-full flex justify-between items-center'>
            {/* logo */}
            <div className='flex items-center w-[40%] justify-between p-0.5'>
                <LogoComp/>
                <nav className='hidden md:flex items-center gap-4 font-[500]'>
                    {navigationLinks.map((item,i) => (
                        <Link href={item.path} key={i}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* navigation links */}


            {/* auth */}
            <div className='flex items-center gap-1.5'>
                <Button className='bg-[#563C5C] hover:bg-[#614467] duration-300'>Login</Button>
                <Button variant={"outline"}>Register</Button>
            </div>
        </div>


        
    </header>
  )
}

export default HeaderSection