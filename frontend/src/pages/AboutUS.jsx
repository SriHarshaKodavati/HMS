import React from "react";
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import AboutHome from "../components/AboutHome";
const AboutUS = () => {
  return (
    <>
      <AboutHome title={"At CareMaster, we are dedicated to revolutionizing the way hospitals and healthcare facilities operate. With a focus on innovation, efficiency, and patient-centric care, we provide cutting-edge solutions to meet the evolving needs of the healthcare industry."}
       />
      <hr  className="hr-css" />
      <Bio/>
    </>
  );
};

export default AboutUS;