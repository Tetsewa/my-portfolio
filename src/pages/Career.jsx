import React from 'react';

const TimelineItem = ({ date, title, company, description }) => (
  <div className="mb-8 flex justify-between items-center w-full right-timeline">
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1  w-8 h-8 ">
      <h1 className="mx-auto font-semibold text-lg text-neutral">{date}</h1>
    </div>
    <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 card">
      <h3 className="mb-3 font-bold text-neutral text-xl">{title}</h3>
      <h4 className="mb-3 font-semibold text-neutral text-base">{company}</h4>
      <p className="text-sm leading-snug tracking-wide text-neutral text-opacity-100 text-justify">{description}</p>
    </div>
  </div>
);

const Career = () => {
  const experiences = [
    {
      date: "2024",
      title: "Full Stack Developer",
      company: "Ironhack Netherlands",
      description: "Designed and developed responsive web applications using the MERN stack. Built user-friendly interfaces with HTML, CSS, Tailwind CSS, and JavaScript. Developed and integrated RESTful APIs for dynamic content management."
    },
    {
      date: "2020",
      title: "Client Services Manager",
      company: "Asus Holland BV",
      description: "Analyzed performance data to identify issues and suggest solutions leading to previously unreached KPIs. Provided prompt support to queries from service partners and resolved long-pending repair cases efficiently."
    },
    {
      date: "2018",
      title: "Junior Data Analyst",
      company: "Crowdynews BV",
      description: "Maximized revenue for clients by understanding advertising models and opportunities. Monitored and reported daily changes in client data from dashboards set up using Looker."
    }
  ];

  return (
    <div className="min-h-screen bg-main p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-neutral">Professional Journey</h1>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-neutral h-full border left-1/2"></div>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;