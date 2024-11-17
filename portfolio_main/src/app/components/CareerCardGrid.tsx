import React, { useState } from 'react';
import CareerCard from './CareerCard/CareerCard';
import "@/app/components/CareerCardGrid.css";

export default function CardGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    { title: "Sapienza University of Rome (Master's degree)", description: "I'm currently studying for my master's degree in Computer Science, with my main focus being on cybersecurity, biometric systems and the development of distributed systems", startDate: '2024', endDate: 'NOW', source: 'https://rizik0.ovh/'},
    { title: "Sapienza University of Rome (Bachelor's degree)", description: "I graduated in Computer Engineering where I was able to takle topics ranging from Algorithms and Data Structures, Software engineering, Embedded systems, Computer network infrastructures and Formal mathematical methods.", startDate: '2021', endDate: '2024', source: 'https://rizik0.ovh/'},
    { title: 'Enrico Fermi Technical High School', description: 'During my highschool years I was able to explore and experiment a multitude of IT fields. I was even able to take part in numerous hackathons (IT competitions) and have the opportunity to do an intership at Fibernet, a fiber-cable development company.', startDate: '2016', endDate: '2021', source: 'https://rizik0.ovh/'},
  ];

  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <div className="row projectsRow">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`col projectCardWrapper ${
              hoveredIndex !== null && hoveredIndex !== index ? 'dimmed' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CareerCard {...card} source={card.source || ''} />
          </div>
        ))}
      </div>
    </div>
  );
}
