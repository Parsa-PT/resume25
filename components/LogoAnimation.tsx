"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Images } from "@/constant";




export const LogoAnimation = () => {
  return (
    <div className=" py-8 bg-purple-200/10 opacity-80">
      <div className=" container mx-auto">
        <div className=" overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,__transparent)]">
          <motion.div
            className=" flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >

                {Images.map((item , index)=>(
                  
                        <Image key={index} src={`/assets/${item.src}.png`} alt="figma" width={50} height={30}/>
                    
                ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
