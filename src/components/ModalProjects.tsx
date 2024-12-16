import { Carousel } from "./Carousel";

import I0 from "../assets/miulist/0.png";
import I1 from "../assets/miulist/1.png";
import I2 from "../assets/miulist/2.png";
import I3 from "../assets/miulist/3.gif";
import I4 from "../assets/miulist/5.png";
import I5 from "../assets/miulist/6.png";

import NotFound from "../assets/NotFound.png";

interface ModalProjectsProps {
  open: number;
  onClose(): void;
}

export const ModalProjects = ({ open, onClose }: ModalProjectsProps) => {
  var images = [""];
  if (open === 1) {
    images = [I0, I1, I2, I3, I4, I5];
  } else {
    images = [NotFound, NotFound];
  }
  if (!open) return null;
  return (
    <div className="z-100 fixed bottom-0 left-0 right-0 top-0 m-auto h-3/4 w-11/12 bg-zinc-900 p-4">
      <Carousel images={images} />
      <button
        className="m-auto mt-5 flex items-center justify-center rounded-full bg-zinc-800 bg-opacity-60 px-4 py-2 text-lg text-red-200"
        onClick={onClose}
      >
        {" "}
        X{" "}
      </button>
    </div>
  );
};
