import { TbBrandReact, TbBrandNextjs, TbBrandMongodb } from "react-icons/tb";
import { DiRedis, DiPostgresql } from "react-icons/di";
import { GrDocker } from "react-icons/gr";

import { Tooltip } from "./ui/tooltip";
import { motion } from "motion/react";

const icons = [
    {
        title: "React JS",
        icon: <TbBrandReact />,
        color: "text-cyan-400"
    },
    {
        title: "Next JS",
        icon: <TbBrandNextjs />,
        color: "text-white"
    },
    {
        title: "MongoDB",
        icon: <TbBrandMongodb />,
        color: "text-green-500"
    },
    {
        title: "PostgreSQL",
        icon: <DiPostgresql />,
        color: "text-blue-700"
    },
    {
        title: "Redis",
        icon: <DiRedis />,
        color: "text-red-500"
    },
    {
        title: "Docker",
        icon: <GrDocker />,
        color: "text-blue-700"
    }

]

function Technologies() {
  return (
    <div className="text-white flex flex-col items-center mb-16">
      <header className="text-center">
        <h1 className="text-3xl tracking-wider font-light mb-12">Technologies</h1>
      </header>
      <main className="flex items-center justify-center flex-wrap gap-5">
        {icons?.map((icon) => (
            <Tooltip
            content={icon.title}
          >
            <motion.div
              initial = {{
                x: -10
              }}
              animate = {{
                x: 0,

              }}
              transition={{
                bounce: true
              }}
             className={`${icon.color} text-5xl p-4 rounded-xl border-2 border-gray-900 hover:cursor-pointer`}>
                {icon.icon}
            </motion.div>
          </Tooltip>
        ))}
      </main>
    </div>
  );
}

export default Technologies;
