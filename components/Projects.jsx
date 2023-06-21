import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import Bookin from "../public/assets/projects/Bookin.png";
import GitFinder from "../public/assets/projects/GitFinder.png";
import Hades from "../public/assets/projects/hades.png";
import PadeHCM from "../public/assets/projects/padehcm.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="PadeHCM"
            backgroundImg={PadeHCM}
            projectUrl="/padehcm"
            tech="React JS"
          />
          <ProjectItem
            title='Hades'
            backgroundImg={Hades}
            projectUrl='/hades'
            tech='Next JS'
          />
          <ProjectItem
            title="Bookin App"
            backgroundImg={Bookin}
            projectUrl="/bookin"
            tech="NextJS"
          />
          <ProjectItem
            title="GitFinder App"
            backgroundImg={GitFinder}
            projectUrl="/gitfinder"
            tech="Javascript"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
