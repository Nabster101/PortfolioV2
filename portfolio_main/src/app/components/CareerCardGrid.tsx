import React, { useState } from 'react';
import CareerCard from './CareerCard/CareerCard';
import "@/app/components/CareerCardGrid.css";

export default function CardGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    { title: "Sapienza University of Rome (Master's degree)", description: "I'm currently studying for my master's degree in Computer Science, with my main focus being on cybersecurity, biometric systems and the development of distributed systems.", startDate: '2024', endDate: 'NOW', source: 'https://corsidilaurea.uniroma1.it/it/corso/2024/29932/home'},
    { title: "Sapienza University of Rome (Bachelor's degree)", description: "I graduated in Computer Engineering where I was able to takle topics ranging from Algorithms and Data Structures, Software Engineering, Embedded Systems, Computer Network Infrastructures and Formal Mathematical Methods.", startDate: '2021', endDate: '2024', source: 'https://corsidilaurea.uniroma1.it/it/corso/2021/29931/home'},
    { title: 'Enrico Fermi Technical High School', description: 'During high school, I explored a wide range of IT fields and participated in numerous hackathons (IT competitions). Additionally, I completed an internship at Fibernet, a fiber-cable development company, where I gained hands-on experience in IT infrastructure.', startDate: '2016', endDate: '2021', source: 'https://www.itisfermi.edu.it/'},
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
