import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ECard = ({ edu }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      date={edu.date}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{edu.title}</h3>
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((edu, index) => (
            <ECard
              key={`edu-${index}`}
              edu={edu}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "work");
