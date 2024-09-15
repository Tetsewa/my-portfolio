import React from 'react';
import { Chrono } from 'react-chrono';

const events = [
    {
        title: "Jul 2024",
        cardTitle: "BuurtHub",
        cardSubtitle: "All-inclusive Community Forum App",
        cardDetailedText: "A full-stack community forum app where users can stay updated on local events, make posts, and trade goods and services. Technologies Used: React, Node JS, Figma, Tailwind CSS, Adaptable, Vercel, Supabase, Express, MongoDB.",
        imageUrl: "Buurthub.png", 
        demoLink: "https://buurt-hub.vercel.app/",
        sourceCodeLink: "https://github.com/Sowjanyakambhampati/BuurtHub"
    },
    {
        title: "May 2024",
        cardTitle: "StyleSavvy",
        cardSubtitle: "Beauty Services Booking App",
        cardDetailedText: "A single-page application created with React and Node for booking beauty services. Technologies Used: React, Node JS, Figma, Tailwind CSS, Netlify.",
        imageUrl: "StyleSavvy.png", 
        demoLink: "https://stylesavvyproject.netlify.app/",
        sourceCodeLink: "https://github.com/Tetsewa/StyleSavvy-Salon-Project"
    },
    {
        title: "Feb 2024",
        cardTitle: "Fix It Game",
        cardSubtitle: "Single-player Quiz Game",
        cardDetailedText: "A quiz game testing basic knowledge of computer hardware parts. Built with HTML, CSS, and JavaScript. Technologies Used: HTML, CSS, JavaScript, Canva.",
        imageUrl: "Fix-It-Game.png",  
        demoLink: "https://tetsewa.github.io/Fix-it-Game/",
        sourceCodeLink: "https://github.com/username/fix-it-game"
    }
];

function Projects() {
    return (
        <div className="p-8 bg-gray-50">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Showcasing My Work</h1>
            <div className="mx-auto w-4/5">
                <Chrono
                    items={events.map(event => ({
                        title: event.title,
                        cardTitle: event.cardTitle,
                        cardSubtitle: event.cardSubtitle,
                        cardDetailedText: (
                            <div>
                                <p>{event.cardDetailedText}</p>
                                <img src={event.imageUrl} alt={event.cardTitle} className="mt-4 w-full h-40 object-cover rounded-md shadow-lg" />
                                <div className="mt-4 flex space-x-4">
                                    <a
                                        href={event.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                                    >
                                        App Demo
                                    </a>
                                    <a
                                        href={event.sourceCodeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-900"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        )
                    }))}
                    mode="HORIZONTAL"
                />
            </div>
        </div>
    );
}

export default Projects;
