// import { StackItem } from '@/constant';
import React from 'react'
import { FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from 'react-icons/tb';



 const StackItem = [
    {id : 1 , name:'react' , icon :FaReact , color :'#61DAFB'},
    {id : 2 , name:'tailwind' , icon :RiTailwindCssFill , color :'#61DAFB'},
    {id : 3 , name:'typescript' , icon :SiTypescript , color :'#3178C6'},
    {id : 4 , name:'next' , icon :TbBrandNextjs , color :'#ffffff'},
]

export const Stack = () => {
  return (
    <section id='stack' className='glass py-16'>
        <div className=' max-w-[1200px] mx-auto px-4 text-center'>
            <h2 className=' text-5xl text-gray-200 font-bold mb-7'>My Stack</h2>
            <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1'>
                {StackItem.map((item)=>(
                    <div key={item.id} className=' flex hover:scale-110  group transition-all duration-300 ease-in-out items-center justify-center  flex-col rounded-xl p-4'>
                            <div className=' mb-4 bg-white/10  p-4 rounded-xl'>
                            {React.createElement(item.icon , {
                                className :' w-32 h-32',
                                style: {color:item.color}
                            })}
                            </div>
                            <p className=' text-gray-400  opacity-0 group-hover:opacity-100 transition-all duration-300  font-semibold'>{item.name}</p>

                    </div>  
                ))}
            </div>
        </div>
    </section>
  )
}
