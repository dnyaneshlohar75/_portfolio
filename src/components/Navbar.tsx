import { PiGithubLogoLight, PiLinkedinLogoLight } from "react-icons/pi";
import { motion } from "motion/react";
import { Tooltip } from "./ui/tooltip";

function Navbar() {

  return (
    <>
      <nav className="mx-8 py-6 flex items-center justify-between">
        <div>
          <motion.a
            href="/"
            className="text-white font-thin text-base sm:text-lg rounded-md border px-2 py-1"
          >
            dev.dnyaneshlohar
          </motion.a>
        </div>
        <div className="text-white flex items-center space-x-3 text-2xl">
          <Tooltip content = "LinkedIn">
            <a
              href="https://www.linkedin.com/in/dnyanesh-lohar-6b1910260/"
              target="_blank"
            >
              <PiLinkedinLogoLight />
            </a>
          </Tooltip>
          <Tooltip content = "GitHub">
            <a href="https://github.com/dnyaneshlohar75/" target="_blank">
              <PiGithubLogoLight />
            </a>
          </Tooltip>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
