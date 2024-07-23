import React, { useState } from 'react';
import { skills, experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleMouseEnter = (skill) => {
    setHoveredSkill(skill.name);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="pink-gradient-text font-semibold drop-shadow-sm">Hana</span>
      </h1>

      <div>
        <p className="mt-5 flex-col gap-3 text-slate-500">
          a Software Engineer based in Canada, in my third year at the University of Calgary. I'm interesed in AI, finance, blockchain, robotics, and web development. I'm always looking for unique experiences to learn new things!
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div
              className="block-container w-20 h-20 relative"
              key={skill.name}
              onMouseEnter={() => handleMouseEnter(skill)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center transition-all duration-300">
                {hoveredSkill === skill.name ? (
                  <span className="skill-text">{skill.name}</span>
                ) : (
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="skill-image w-1/2 h-1/2 object-contain transition-opacity duration-300"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Experience</h3>
        <div>
          <p className="mt-5 flex-col gap-3 text-slate-500">
            I've participated in multiple clubs and have been conducting research over the years. Here's the rundown:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
}

export default About;
