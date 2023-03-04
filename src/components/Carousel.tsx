import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CarouselProps{
  images: string[] | undefined;
}

export function Carousel({images} : CarouselProps){
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(Number(carousel.current?.scrollWidth) - Number(carousel.current?.offsetWidth))
  }, [])

  return (
    <>
      <motion.div ref={carousel} className='flex cursor-grab overflow-hidden w-full h-full' whileTap={{ cursor: "grabbing" }}>
        <motion.div className='flex' drag="x" dragConstraints={{right: 0, left: -width}}>
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