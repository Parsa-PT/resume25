'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu , AiOutlineClose } from 'react-icons/ai'
import { NAVLINKS } from '@/constant'

export const Navbar = () => {

  const [ShowNav , setShow] = useState(false)


  const ToggleNAv =()=>{
      setShow(!ShowNav)
  }

  return (
    <div className=' z-50 fixed justify-center  w-full text-white font-bold'>
            <div className=' border border-white/20 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto '>

                <ul className=' flex flex-row p-2 space-x-8'>
                    {NAVLINKS.map((item , index)=>(
                        <li key={index}>
                              <Link href={item.path} className=' transform  hover:text-white/50 transition-all ease-in-out duration-300'>
                                {item.title}
                              </Link>
                        </li>
                    ))}
                </ul>
            </div>


            <div onClick={ToggleNAv} className=' md:hidden absolute top-5 right-14 border rounded z-50  text-white/70 border-white/70 p2'>
                      {ShowNav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={39}/>}
            </div>

            <div className={`fixed left-0 top-0  w-full h-full bg-gray-800/50 transform transition-transform duration-300 ${ShowNav ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul className=' flex  flex-col w-full  items-center justify-center  h-full  gap-y-4'>
                    {NAVLINKS.map((item , index)=>(
                        <li key={index}>
                              <Link href={item.path} onClick={ToggleNAv} className=' text-4xl'>
                                {item.title}
                              </Link>
                        </li>
                    ))}
                </ul>
            </div>
    </div>
  )
}
