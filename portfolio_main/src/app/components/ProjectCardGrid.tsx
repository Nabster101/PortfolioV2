import React, { useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import "@/app/components/ProjectCardGrid.css"

export default function CardGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    { title: 'Rizik0', description: 'Along with a couple of collegues at my University, we made an online version of the popular game of Risk. It features a backend server made with Python to keep track of all the matches and statistics for each player, along with an intutive frontend desing to guarantee a fluid and intutive gaming experience.', image: '/images/logo_riziko.png', source: 'https://rizik0.ovh/'},
    { title: 'DunkZone', description: 'With a team of collegues at my University, we developped an online utility portal with the use of the official NBA API where anyone can keep track of all upcoming and past matches of their favorite NBA team, along with interesting statistics and other features.', image: '/images/logo_dunkzone.png', source: 'https://github.com/dunkz0ne' },
    { title: 'CyberPlayground', description: "For my Bachelor's degree I made a web-based playground designed to simulate and demonstrate various common web application security vulnerabilities. It provides an interactive environment where users can explore real-world security issues such as SQL Injection (SQLi), Cross-Site Request Forgery (CSRF) and Cross-Site Scripting (XSS).", image: '/images/logo_cyber.png', source: 'https://github.com/Nabster101/CyberPlayground' },
    { title: 'File system FAT', description: 'This is my approach on making a fully fledged FAT system in C with the added feature of being persistant, meaning it can be used on any PC while keeping track of all the data it has previously saved. It includes useful features such as a write-on-file function, a read-from-file, a make-directory command and others.', image: '/images/logo_fat.jpg', source: 'https://github.com/Nabster101/File-System-FAT' },
  ];

  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <div className="row projectsRow">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`col-xl-12 col-lg-12 projectCardWrapper ${
              hoveredIndex !== null && hoveredIndex !== index ? 'dimmed' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ProjectCard {...card} source={card.source || ''} />
          </div>
        ))}
      </div>
    </div>
  );
}
