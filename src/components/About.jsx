import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et odio sit amet felis viverra vehicula. Integer lacinia bibendum sapien vel fermentum. Nam elementum imperdiet eleifend. Integer accumsan vestibulum lorem, sit amet tristique metus. Etiam accumsan, odio id mattis tempus, nunc lacus tincidunt nulla, quis luctus sem velit eu tortor
      </p>
    </>
  );
};

export default SectionWrapper(About, "about");
