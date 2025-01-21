import { motion } from "motion/react"

function Hero() {
  return (
    <div className="mx-8 py-6 flex flex-col items-center text-center justify-center h-[88vh]">
      <motion.h1
      
        initial = {{
          y: 100, opacity: 0
        }}
        whileInView = {{
          y: 0, opacity: 1
        }}
        transition={{
          ease: 'backInOut',
          
          delay: 0.5,
          duration: 1
        }}
      
      className="text-5xl font-light text-white">Hi, I am Dnyanesh Lohar</motion.h1>
      <motion.p 
      
      initial = {{
        y: 100, opacity: 0
      }}
      
      whileInView = {{
        y: 0, opacity: 1
      }}
      transition={{
        ease: 'backInOut',
        
        delay: 1,
        duration: 1
      }}
      
      className="text-2xl py-3 bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight">Full Stack Developer</motion.p>
      <motion.p
      initial = {{
        y: 100, opacity: 0
      }}
      
      whileInView = {{
        y: 0, opacity: 1
      }}
      transition={{
        ease: 'backInOut',
        
        delay: 2,
        duration: 1
      }}
       className="text-lg py-3 text-slate-400 tracking-tight">Building seamless user experiences and hoping to design<br />a connection with you.</motion.p>
    </div>
  );
}

export default Hero;
