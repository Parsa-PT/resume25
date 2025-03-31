'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Contact = () => {
  const [showhover , setShowhover] = useState('phone')


  return (
    <section className=' py-32 text-white max-w-[1200px] mx-auto px-4' id='contact'>
            <motion.div
            initial={{opacity:0 , y:20}}
            whileInView={{opacity:1 , y:0}}
            transition={{duration:0.8}}
            viewport={{once:true}}
            className=' grid lg:grid-cols-2 gap-16'
            >
                    <div className=' space-y-12'>
                            <motion.h2
                            initial={{opacity:0 , x:-20}} 
                            whileInView={{opacity:1 , x:0}}
                            transition={{duration:0.6 , delay:0.2}}
                            className=' text-7xl font-bold text-gray-300'
                            >
                                    Get in <span className=' text-gray-500'>touch</span>
                            </motion.h2>

                            <motion.div
                            initial={{opacity:0 , x:-20}}
                            whileInView={{opacity:1 , x:0}}
                            transition={{duration:0.6 , delay:0.4}}
                            className='glass p-8 rounded-2xl space-y-8'
                            >
                                <div  onMouseEnter={()=> setShowhover('phone')} onMouseLeave={()=> setShowhover('')}  className=' space-y-2'>
                                    <p className=' text-lg text-gray-300'>Phone</p>
                                    <a href="#" className=' text-2xl font-semibold hover:text-gray-400  transition duration-300 flex items-center gap-2'>
                                        +99 9999 999 99
                                        <span></span>
                                    </a>

                                </div>
                                <div onMouseEnter={()=> setShowhover('email')} onMouseLeave={()=> setShowhover('')}  className=' space-y-2'>
                                    <p className=' text-lg text-gray-300'>Email</p>
                                    <a href="mailto:mrparsashams@gmail.com" className=' text-2xl font-semibold hover:text-gray-400  transition duration-300 flex items-center gap-2'>
                                        mrparsashams@gmail.com
                                        <span></span>
                                    </a>

                                </div>
                                <div onMouseEnter={()=> setShowhover('LinkedIn')} onMouseLeave={()=> setShowhover('')}  className=' space-y-2'>
                                    <p className=' text-lg text-gray-300'>LinkedIn</p>
                                    <a href="https://www.linkedin.com/in/parsa-shams-68b96422b/" className=' text-2xl font-semibold hover:text-gray-400  transition duration-300 flex items-center gap-2'>
                                        Parsa shams
                                        <span></span>
                                    </a>

                                </div>
                                <div onMouseEnter={()=> setShowhover('git')}  className=' space-y-2'>
                                    <p className=' text-lg text-gray-300'>Github</p>
                                    <a href="https://github.com/Parsa-PT" target='_blanck' className=' text-2xl font-semibold hover:text-gray-400  transition duration-300 flex items-center gap-2'>
                                         Parsa-PT
                                        <span></span>
                                    </a>

                                </div>

                          
                            </motion.div>
                    </div>

                    

                   
                       
                           
                                {showhover == 'git' ? (
                                     <motion.div
                                     initial={{opacity:0 , x:20}}
                                     whileInView={{opacity:1 , x:0}}
                                     transition={{duration:0.6 }}
                                     className=' w-full h-full min-h-[400px]   flex justify-center items-center'
                                     >
                                    <Image src='/assets/git.png' alt='pic' width={350} height={200}/>
                                    </motion.div>
                                ):showhover == 'phone' ? (
                                    <motion.div
                                    initial={{opacity:0 , x:20}}
                                    whileInView={{opacity:1 , x:0}}
                                    transition={{duration:0.6 }}
                                    className=' w-full h-full min-h-[400px]   flex justify-center items-center'
                                    >
                                    <Image src='/assets/phone.png' alt='pic' width={300} height={200}/>
                                    </motion.div>
                                ): showhover == 'email' ? (
                                    <motion.div
                                    initial={{opacity:0 , x:20}}
                                    whileInView={{opacity:1 , x:0}}
                                    transition={{duration:0.6 }}
                                    className=' w-full h-full min-h-[400px]   flex justify-center items-center'
                                    >
                                    <Image src='/assets/mail2.png' alt='pic' width={300} height={200}/>
                                    </motion.div>
                                ): showhover == 'LinkedIn' ? (
                                    <motion.div
                                    initial={{opacity:0 , x:20}}
                                    whileInView={{opacity:1 , x:0}}
                                    transition={{duration:0.6 }}
                                    className=' w-full h-full min-h-[400px]   flex justify-center items-center'
                                    >
                                    <Image src='/assets/li2.png' alt='pic' width={300} height={200}/>
                                    </motion.div>
                                ):null}
                                
        
                           
             
                      
                    
            </motion.div>
    </section>
  )
}
