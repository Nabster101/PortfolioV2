import React, { useState } from 'react';
import CareerCard from './CareerCard/CareerCard';
import "@/app/components/CareerCardGrid.css";
import { start } from 'repl';

export default function CardGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    { title: "Toyota Racing (Software Engineer Intern)", description: "I am working on the development of a telemetry system to manage large quantaties of live data streams for motorsport applications, utilizing technologies such as Apache Kafka, Apache Flink, Java and AWS. This experience allowed me to gain hands-on experience in software development and cloud computing within the context of motorsport.", startDate: '2026', endDate: 'NOW', source: 'https://toyota-racing.com/'},
    { title: "Fibernet (Software Developer Intern)", description:"I worked on developing a temperature measurement system to monitor the behavior of fiber optic cables at various temperatures, along with writing functional and technical documentation for the application system ", startDate: '2019', endDate: '2020', source: 'https://www.fibernet.it/'},
  ];

  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <div className="row projectsRow" id="workExp">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`col projectCardWrapper ${ hoveredIndex !== null && hoveredIndex !== index ? 'dimmed' : ''}`}
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
