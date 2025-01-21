import { achivements } from "../assets/data";

import './../../node_modules/swiper/swiper.css';
import Slider from "./Slider";
import * as motion from "motion/react-client"

function Achivements() {
  return (
    <div className="mx-8 py-6 text-white flex flex-col items-center mb-16">
      <header className="text-center">
        <h1 className="text-3xl tracking-wider font-light mb-12">
          Achivements
        </h1>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        {achivements?.map((achivement) => (
          <motion.div
          
            whileHover={{
              scale: 1.1
            }}
          layoutId="modal" className="cursor-pointer flex items-center gap-5 w-full p-8">
            <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-36 md:h-36 xl:w-44 xl:h-44 rounded-3xl flex items-center justify-center">
                <Slider images={achivement?.images} />
            </div>
            <div>
              <h1 className="text-base mb-2">{achivement.name}</h1>
              <p className="text-sm text-neutral-400">
                {achivement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}

export default Achivements;
