import "./Hero.scss";
import { motion } from "framer-motion";
import HomeAvatar from "@/assets/images/home-avatar.jpg";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function downloadResume() {
  const fileUrl = "/files/resume.pdf";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "resume.pdf";
  link.click();
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="sofia-regular" variants={textVariants}>
            Hi, I'm Annie Le
          </motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={downloadResume}>
              Download my CV
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        My Little Corner
      </motion.div>
      <div className="imageContainer">
        <img src={HomeAvatar} alt="" />
      </div>
    </div>
  );
};

export default Hero;
