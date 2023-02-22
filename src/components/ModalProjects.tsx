import { Carousel } from './Carousel'

import I1 from '../assets/miulist/1.png';
import I2 from '../assets/miulist/1.png';
import I3 from '../assets/miulist/1.png';
import I4 from '../assets/miulist/1.png';


interface ModalProjectsProps {
  open: number;
  onClose(): void;
}

export const ModalProjects = ({ open, onClose}: ModalProjectsProps) => {
  var images = ['']
  if(open === 1){
    images = [I1, I2, I3, I4];
  }else{
    images = [I1, I2, I3, I4];
  }
  if (!open) return null
  return (
    <div className='fixed w-11/12 h-3/4 p-4 bg-zinc-900 m-auto left-0 right-0 top-0 bottom-0'>
      <Carousel images={images}/>
      <button className="flex text-lg m-auto mt-5 justify-center items-center py-2 px-4 text-red-200 bg-opacity-60 rounded-full bg-zinc-800" onClick={onClose}> X </button>
    </div>
  )
}