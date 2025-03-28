'use client'
import { animate, useMotionTemplate, useMotionValue , motion} from 'framer-motion'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

const COLORS_TOP = ['#12FFAA','#1E67C6', '#CE84CF' , '#DD335C']

export const Hero = () => {

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
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

  return (
    <motion.section style={{
        backgroundImage
    }} className=' relative gird min-h-screen overflow-hidden place-content-center  px-4 py-24 text-gray-200'>

            <div className=' z-10 relative flex  flex-col items-center'>
                <span className=' mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm '>
                    open for work
                </span>
                <h1 className=' text-white/40 text-7xl font-black'>
                    Hi , I am
                </h1>
                <h1 className=' text-5xl max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text md:text-7xl text-transparent font-black leading-tight'>
                    Parsa shams
                </h1>

                <Image src='/assets/profilepic.png' alt='pic' width={250} height={250}/>

                <div className=' flex bg-white/10 shadow-xl p-3 rounded-3xl items-center justify-center mb-4 '>
                 <Image src='/assets/obj1.png' alt='pic' className=' rounded-2xl ' width={30} height={30}/>
                 <Image src='/assets/obj1.png' alt='pic' className=' rounded-2xl ' width={30} height={30}/>
                 <Image src='/assets/obj1.png' alt='pic' className=' rounded-2xl ' width={30} height={30}/>
                </div>
           

            <p className=' text-center'>Frontend Developer with over 4 years experience</p>

             <div className=' w-full flex justify-center mt-6'>
             <motion.button whileHover={{scale:1.015}} whileTap={{scale:0.962}} style={{border , boxShadow}} className=' flex  items-center px-4 py-2 rounded-full gap-2'>
                Download resume<FiArrowRight/>
                
             </motion.button>
             </div>
             </div>

             <div className='bg-circle-container hidden md:block'>
                <div className='bg-circle-background'></div>
                <div className='bg-circle'></div>
             </div>
    </motion.section>
  )
}
