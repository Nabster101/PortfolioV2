import React, { useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import "@/app/components/ProjectCardGrid.css"

export default function CardGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    { title: 'Adaptive Cache Occupancy Fingerprinting', description: 'This project investigates an adaptive cache-based website fingerprinting attack that integrates passive device fingerprinting to select environment-specific classification models, significantly improving accuracy over generic approaches across CPUs, browsers, and operating systems.', source: '/DNS_Report.pdf', image: '/images/fingerprint.jpg' },
    { title: 'AES vs SHA3 using GPU acceleration', description: 'A concise overview of AES and SHA‑3 focusing on algorithm structure, parallelizable modes, and high‑performance implementations using AES‑NI on CPUs and CUDA techniques on GPUs, including ECB/CTR suitability, key schedule constraints, and T‑table and bitsliced designs for throughput.', image: '/images/cuda.png', source: '/AA_Presentation.pdf' },
    { title: 'Kubernetes Orchestration on AWS with HPA', description: 'A self-managed Kubernetes cluster on AWS (kubeadm, containerd, Flannel) runs a scalable web app to evaluate Horizontal Pod Autoscaler behavior under varying traffic using Apache JMeter across a 1-master/4-worker architecture on t2.medium instances.', image: '/images/kubernetes.png', source: '/CC_Presentation.pdf'},
    { title: 'Biometric Fingerprint Recognition System', description: 'A comparative study of classical fingerprint enhancement techniques—segmentation, orientation and frequency estimation, and filtering—integrated into a full recognition pipeline to quantify their impact on minutiae extraction and identification reliability on FVC2002 datasets using a proposed single-attempt confidence metric (SRR).', image: '/images/biometric.jpg', source: '/Biometric_Report.pdf' },
    { title: 'Rizik0', description: 'Along with a couple of collegues at my University, we made an online version of the popular game of Risk. It features a backend server made with Python to keep track of all the matches and statistics for each player, along with an intutive frontend desing to guarantee a fluid and intutive gaming experience.', image: '/images/logo_riziko.png', source: 'https://rizik0.ovh/'},
    { title: 'DunkZone', description: 'With a team of collegues at my University, we developped an online utility portal with the use of the official NBA API where anyone can keep track of all upcoming and past matches of their favorite NBA team, along with interesting statistics and other features.', image: '/images/logo_dunkzone.png', source: 'https://github.com/dunkz0ne' },
    { title: 'CyberPlayground', description: "For my Bachelor's degree I made a web-based playground designed to simulate and demonstrate various common web application security vulnerabilities. It provides an interactive environment where users can explore real-world security issues such as SQL Injection (SQLi), Cross-Site Request Forgery (CSRF) and Cross-Site Scripting (XSS).", image: '/images/logo_cyber.png', source: 'https://github.com/Nabster101/CyberPlayground' },
    { title: 'File system FAT', description: 'This is my approach on making a fully fledged FAT system in C with the added feature of being persistant, meaning it can be used on any PC while keeping track of all the data it has previously saved. It includes useful features such as a write-on-file function, a read-from-file, a make-directory command and others.', image: '/images/logo_fat.jpg', source: 'https://github.com/Nabster101/File-System-FAT' }
  ];

  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <div className="row projectsRow">
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <div
              className={`col-xl-12 col-lg-12 projectCardWrapper ${
                hoveredIndex !== null && hoveredIndex !== index ? 'dimmed' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectCard {...card} source={card.source || ''} />
            </div>
            {index == 1 && (
              <div className="w-100 d-none d-xl-block d-lg-block d-md-block d-sm-block d-xs-block" style={{ height: '2rem', color: '#e2e8f0' }}>Cloud Computing</div>
            )}

            {index == 2 && (
              <div className="w-100 d-none d-xl-block d-lg-block d-md-block d-sm-block d-xs-block" style={{ height: '2rem', color: '#e2e8f0' }}>Biometric Systems</div>
            )}
            
            {index == 3 && (
              <div className="w-100 d-none d-xl-block d-lg-block d-md-block d-sm-block d-xs-block" style={{ height: '2rem', color: '#e2e8f0' }}>Web Development</div>
            )}

            {index == cards.length-2 && (
              <div className="w-100 d-none d-xl-block d-lg-block d-md-block d-sm-block d-xs-block" style={{ height: '2rem', color: '#e2e8f0' }}>Software Engineering</div>
            )}
              
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
