import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Clint | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Michael Jonathan</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/mikejrn/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/bigmike12"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>JAVASCRIPT
            <span className="px-2">|</span> HTML <span className="px-2">|</span>
            CSS <span className="px-2">|</span>React
            <span className="px-2">|</span>Next
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> GRAPHQL
            <span className="px-2">|</span> SCSS
            <span className="px-2">|</span> TYPESCRIPT
          </p>
          <p className="py-2">
            <span className="font-bold">Sources Control</span>
            <span className="px-2">|</span>GITHUB
            <span className="px-2">|</span>GITLAB
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">KONGA ONLINE</span>
            <span className="px-2">|</span>Lagos, Nigeria
          </p>
          <p className="py-1 italic">November (2021 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Manage the frontend architecture for one of the country’s most
              popular eCommerce platform with an average daily visit of over
              5000 using NextJs, GraphQL, and SASS.
            </li>
            <li>
              Executed the building, testing and maintaining of new features on
              Konga.com which improved sales by 30% and site stability.
            </li>
            <li>
              Managed a process re-engineering project to improve and
              consolidate end-to-end service processes; restructured
              communication flow among 4 departments and cut down paperwork by
              75% using ReactJs, Typescript, SASS, and Bootstrap.
            </li>
            <li>
              Managed and responsible for the writing of test case for new
              components and features for the Konga.com web app using Jest,
              React-testing-library and Enzyme.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">KONGA ONLINE</span>
            <span className="px-2">|</span>Lagos, Nigeria
          </p>
          <p className="py-1 italic">August 2020 - October 2021</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Managed the Graphics, UI Design and also Frontend Development of
              the marketing Department internal and external clients using web
              technologies like HTML, CSS and JavaScript.
            </li>
            <li>
              Executed the designing and development and maintainance of Landing
              Pages for the business and its partners that generated an extra
              30% revenue for the company.
            </li>
            <li>
              Managed and executed the graphics design for social media that saw
              increase in engagement and following by almost 50%.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
