import React from 'react';
import { Chrono } from 'react-chrono';

const events = [
    {
        title: "Jul 2024",
        cardTitle: "BuurtHub",
        cardSubtitle: "Best project in Jan 2024 cohort",
        cardDetailedText: "A full-stack community forum app where users can stay updated on local events, make posts, and trade goods and services. Technologies Used: React, Node JS, Figma, Tailwind CSS, Adaptable, Vercel, Supabase, Express, MongoDB."
    },
    {
        title: "May 2024",
        cardTitle: "StyleSavvy",
        cardSubtitle: "Beauty services booking app",
        cardDetailedText: "A single-page application created with React and Node for booking beauty services. Technologies Used: React, Node JS, Figma, Tailwind CSS, Netlify."
    },
    {
        title: "Feb 2024",
        cardTitle: "Fix It Game",
        cardSubtitle: "Single-player quiz game",
        cardDetailedText: "A quiz game testing basic knowledge of computer hardware parts. Built with HTML, CSS, and JavaScript. Technologies Used: HTML, CSS, JavaScript, Canva."
    }
];

function Projects() {
    return (
        <div className="p-8 bg-gray-50">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Projects</h1>
            <div className="mx-auto w-4/5">
                <Chrono items={events} mode="HORIZONTAL" />
            </div>
        </div>
    );
}

export default Projects;
