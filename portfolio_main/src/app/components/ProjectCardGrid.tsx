import React, { useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import "@/app/components/ProjectCardGrid.css"

export default function CardGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    { title: 'Rizik0', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, quidem qui dolores corporis tempora iusto voluptates ratione veniam quae laudantium voluptas alias, hic cupiditate officiis aliquid similique sint perferendis quia.', image: '/images/logo_riziko.png', source: 'https://rizik0.ovh/'},
    { title: 'DunkZone', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, quidem qui dolores corporis tempora iusto voluptates ratione veniam quae laudantium voluptas alias, hic cupiditate officiis aliquid similique sint perferendis quia.', image: '/images/logo_dunkzone.png', source: 'https://github.com/dunkz0ne' },
    { title: 'CyberPlayground', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, quidem qui dolores corporis tempora iusto voluptates ratione veniam quae laudantium voluptas alias, hic cupiditate officiis aliquid similique sint perferendis quia.', image: '/images/logo_cyber.png', source: 'https://github.com/Nabster101/CyberPlayground' },
    { title: 'File system FAT', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, quidem qui dolores corporis tempora iusto voluptates ratione veniam quae laudantium voluptas alias, hic cupiditate officiis aliquid similique sint perferendis quia.', image: '/images/logo_fat.jpg', source: 'https://github.com/Nabster101/File-System-FAT' },
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
            <ProjectCard {...card} source={card.source || ''} />
          </div>
        ))}
      </div>
    </div>
  );
}
