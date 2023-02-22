import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CarouselProps{
  images: string[] | undefined;
}

export function Carousel({images} : CarouselProps){
  return (
    <>
      <motion.div className='cursor-grab overflow-hidden' whileTap={{ cursor: "grabbing" }}>
        <motion.div className='flex w-full h-full' drag="x">
          {images?.map(image => (
            <motion.div className="rounded-xl pointer-events-none min-w-[123vh] p-2" key={image}>
              <img src={image} className=""/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}