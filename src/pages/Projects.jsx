import React from 'react';

const projects = [
    {
        title: "Jul 2024",
        cardTitle: "BuurtHub",
        cardDetailedText: "A full-stack community forum app where users can stay updated on local events, make posts, and trade goods and services. Technologies Used: React, Node JS, Figma, Tailwind CSS, Adaptable, Vercel, Supabase, Express, MongoDB.",
        imageUrl: "Buurthub2.png", 
        demoLink: "https://buurt-hub.vercel.app/",
        sourceCodeLink: "https://github.com/Sowjanyakambhampati/BuurtHub"
    },
    {
        title: "May 2024",
        cardTitle: "StyleSavvy",
        cardDetailedText: "A single-page application created with React and Node for booking beauty services. Technologies Used: React, Node JS, Figma, Tailwind CSS, Netlify.",
        imageUrl: "StyleSavvy.png", 
        demoLink: "https://stylesavvyproject.netlify.app/",
        sourceCodeLink: "https://github.com/Tetsewa/StyleSavvy-Salon-Project"
    },
    {
        title: "Feb 2024",
        cardTitle: "Fix It Game",
        cardDetailedText: "A single-player quiz game testing basic knowledge of computer hardware parts. Built with HTML, CSS, and JavaScript. Technologies Used: HTML, CSS, JavaScript, Canva.",
        imageUrl: "Fix-It-Game.png",  
        demoLink: "https://tetsewa.github.io/Fix-it-Game/",
        sourceCodeLink: "https://github.com/tetsewa/fix-it-game"
    }
];

const ProjectCard = ({ project }) => {
    return (
        <div className="group w-96 h-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 opacity-80" src={project.imageUrl} alt={project.cardTitle} />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold mb-4">{project.cardTitle}</h1>
                        <p className="text-base mb-4">{project.cardDetailedText}</p>
                        <div className="mt-4 flex space-x-4">
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="rounded-md bg-white py-2 px-4 text-sm hover:bg-neutral-900">Demo</a>
                            <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="rounded-md bg-white py-2 px-4 text-sm hover:bg-neutral-900">Source</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsContainer = () => {
    return (
        <div className="min-h-screen bg-black py-12 px-4">
            <h1 className="text-4xl font-bold text-center text-white mb-8">
                Showcasing My Work
            </h1>
            <h2 className="text-2xl text-center text-white mb-12">
                Hover over any project to learn more...
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsContainer;