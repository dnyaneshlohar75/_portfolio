import { Badge } from "@chakra-ui/react";
import { projects } from "../assets/data";
import { motion } from "motion/react";

function Projects() {

  return (
    <div className="mx-8 py-6 text-white flex flex-col items-center mb-16">
      <header className="text-center">
        <h1 className="text-3xl tracking-wider font-light mb-12">Projects</h1>
      </header>
      <main className="">
        {projects?.map((project) => (
          <>
            <motion.div
              initial=  {{
                x: -250,
                opacity: 0
              }}

              transition={{
                duration: 0.7,
                delay: 0.7
              }}

              whileInView={{
                x: 0,
                opacity: 1
              }}
            
            className="grid sm:grid-cols-3 gap-5 w-full p-8">
              <div>
                <img src={project.image} />
              </div>
              <div className="col-span-2 border-b border-neutral-800">
                <h1 className="text-base mb-2">{project.projectName}</h1>
                <p className="text-sm text-neutral-400">
                  {project.description}
                </p>

                <div className="space-x-2 my-3">
                  {project.technologies?.map((tech) => (
                    <Badge colorPalette={tech?.color}>{tech?.title}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        ))}
      </main>
    </div>
  );
}

export default Projects;
