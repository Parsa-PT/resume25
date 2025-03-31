'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Projects } from '@/constant'
import { animate, useMotionTemplate, useMotionValue , motion} from 'framer-motion'


const COLORS_TOP = ['#12FFAA','#1E67C6', '#CE84CF' , '#DD335C']

export const Portfolio = () => {

    const [selectProject , setSelectec] = useState(Projects[0])

    const color = useMotionValue(COLORS_TOP[0])
    
        useEffect(()=>{
    
            animate(color , COLORS_TOP , {
                ease :'easeInOut',
                duration:10,
                repeat: Infinity,
                repeatType :'mirror'
            })
    
        },[])
    
        const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0% , #000 50% , ${color})`

  return (
    <motion.section style={{backgroundImage}} id='portfolio' className=' py-32 text-white'>
       <div className='  max-w-7xl  mx-auto px-4 grid lg:grid-cols-2 gap-12'>
       <div>
       <h2 className=' text-6xl font-bold mb-10'>Selected <span className='  text-gray-400'>Projects</span></h2>
        {Projects.map((item)=>(
            <div key={item.id} onClick={()=> setSelectec(item)} className=' cursor-pointer mb-8 group'>
                    <p className=' text-gray-400 text-lg'>{item.year}</p>
                    <h3 className={` text-3xl font-semibold  group-hover:text-gray-400 transition-colors duration-300 ${selectProject.id === item.id ? 'text-gray-200' : ''}`}>{item.title}</h3>
                    {selectProject.id === item.id && (
                        <div className=' border-b-2 border-white my-4'></div>
                    )}
                    {selectProject.id === item.id && (
                        <div className=' text-gray-400 duration-500 ease-out transition-all'>{item.desc}</div>
                    )}
            </div>
        ))}
       </div>
       

       <Image src={`/assets/${selectProject.image}.png`} alt='tes' width={800} height={450} className=' rounded-xl shadow-lg transition-opacity duration-500 ease-in-out'/>
       </div>
    </motion.section>
  )
}
