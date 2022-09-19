import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import Bookin from "../public/assets/projects/Bookin.png";
import GitFinder from "../public/assets/projects/GitFinder.png";
import OpenSource from "../public/assets/projects/OpenSource.png";
import twitchImg from "../public/assets/projects/twitch.jpg";
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
          {/* <ProjectItem
            title="Nueno Project (Open Source)"
            backgroundImg={OpenSource}
            projectUrl="/nueno"
            tech="React JS"
          /> */}
          {/* <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
