"use client";

import Image from "next/image";
import style from "./page.module.css";
import "@/app/ui/page.css";
import { robotoCondensed } from "./ui/fonts";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "@/app/components/ProjectCard/ProjectCard";
import ProjectCardGrid from "@/app/components/ProjectCardGrid";

export default function Home() {

	const [activeSection, setActiveSection] = useState('');
  	const sectionsRef = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
		  (entries) => {
			entries.forEach((entry) => {
			  if (entry.isIntersecting) {
				setActiveSection(entry.target.id); // Update active section
			  }
			});
		  },
		  { threshold: 0.3 } // Trigger when 60% of the section is visible
		);
	
		sectionsRef.current.forEach((section) => {
		  observer.observe(section);
		});
	
		return () => observer.disconnect();
	  }, []);

	const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

	return (
		<div className="container">
			<div className="container sidebar">
				<div className="row">
					<div className="col">
						<div className="container infoColumn">
							<div className="row">
								<div className={`col mainTitle ${robotoCondensed.className}`}>
									<div>Pietro Costanzi Fantini</div>
								</div>
							</div>
							<div className="row">
								<div className="col jobTitle">
									<div>Fullstack Developer</div>
								</div>	
							</div>
							<div className="row">
								<div className="col subTitle">
									<div>I like to build things on the web</div>
								</div>
							</div>
							<div className="row" id="progressItems">
								<div className="container">
									<div className="row">
										<div className="col colLinkProgress">
											<Link href="#about" className={activeSection === "about" ? "activeLink" : "inactiveLink"} onClick={scrollToTop}>ABOUT</Link>
										</div>
									</div>
									<div className="row">
										<div className="col colLinkProgress">
											<Link href="#career" className={activeSection === "career" ? "activeLink" : "inactiveLink"}>CAREER</Link>
										</div>
									</div>
									<div className="row">
										<div className="col colLinkProgress">
											<Link href="#projects" className={activeSection === "projects" ? "activeLink" : "inactiveLink"}>PROJECTS</Link>
										</div>
									</div>
									<div className="row">
										<div className="col colLinkProgress">
											<Link href="#contacts" className={activeSection === "contacts" ? "activeLink" : "inactiveLink"}>CONTACTS</Link>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container scrollInfo">
				<div className="row">
					<div className="col">
						<div className="container infoColumn">
							<div className="row">
								<div className="col subTitle">
									<section id="about" ref={(el) => (sectionsRef.current[0] = el)} style={{paddingTop: '6.55rem'}}>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum in corporis, dolore saepe quis quae voluptatum hic eius laboriosam et, reiciendis cumque asperiores tempora tenetur numquam praesentium. Distinctio, et quidem!
									</section>
								</div>
							</div>
							<div className="row">
								<div className="col subTitle testHeight">
									<section id="projects" ref={(el) => (sectionsRef.current[1] = el)} style={{paddingTop: '5rem'}}>
										<ProjectCardGrid />
									</section>
								</div>
							</div>
							<div className="row">
								<div className="col subTitle testHeight">
									<section id="contacts" ref={(el) => (sectionsRef.current[2] = el)}>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, quidem qui dolores corporis tempora iusto voluptates ratione veniam quae laudantium voluptas alias, hic cupiditate officiis aliquid similique sint perferendis quia.
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);
}

