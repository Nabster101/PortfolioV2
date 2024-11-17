"use client";

import Image from "next/image";
import style from "./page.module.css";
import "@/app/ui/page.css";
import { robotoCondensed } from "./ui/fonts";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ProjectCardGrid from "@/app/components/ProjectCardGrid";
import CareerCardGrid from "@/app/components/CareerCardGrid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowTrendUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";



export default function Home() {

	const [activeSection, setActiveSection] = useState('');
  	const sectionsRef = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
		  (entries) => {
			entries.forEach((entry) => {
			  if (entry.isIntersecting) {
				setActiveSection(entry.target.id); 
			  }
			});
		  },
		  { threshold: 0.6 } 
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
									{/* <div className="row">
										<div className="col colLinkProgress">
											<Link href="#certifications" className={activeSection === "certifications" ? "activeLink" : "inactiveLink"}>CERTIFICATIONS</Link>
										</div>
									</div> */}
								</div>
								
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div className="container" style={{ marginTop: '2rem'}}>
							<div className="row">
								<div className="col-1">
									<Link href="https://github.com/Nabster101" target="_blank">
										<FontAwesomeIcon icon={faGithub} className="contactIcon" />
									</Link>
								</div>
								<div className="col-1">
									<Link href="https://www.linkedin.com/in/pietro-costanzi-fantini/" target="_blank">
										<FontAwesomeIcon icon={faLinkedin} className="contactIcon" />
									</Link>
								</div>
								<div className="col-1">
									<Link href="https://instagram.com/pietro.costanzi" target="_blank">
										<FontAwesomeIcon icon={faInstagram} className="contactIcon" />
									</Link>
								</div>
								<div className="col">
									<Link href="mailto:pietrocostanzi39@gmail.com">
										<FontAwesomeIcon icon={faEnvelope} className="contactIcon"></FontAwesomeIcon>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col" style={{marginTop: '1.5rem'}}>
						<div className="container">
							<div className="row">
								<div className="col">
									<Link style={{textDecoration: 'none',  color: '#94a3b8'}} target="_blank" href="https://www.linkedin.com/in/pietro-costanzi-fantini/overlay/1731863850270/single-media-viewer/?profileId=ACoAAC9uxrMB3vzRfCkvoO2Vtm5W_F02V-XIQnQ">
										<div className='resumeButton' style={{textDecoration: 'none'}}> Full resume <FontAwesomeIcon icon={faArrowTrendUp}></FontAwesomeIcon></div>
									</Link>
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
										<span>
											I’m a developer with a strong passion for <strong style={{color:"#e2e8f0"}}>security</strong> and <strong style={{color:"#e2e8f0"}}>IT innovations</strong>. My work focuses on crafting secure, high-performance user interfaces that are both <strong style={{color:"#e2e8f0"}}>functional</strong> and <strong style={{color:"#e2e8f0"}}>user-friendly</strong>. I’m deeply involved in the intersection of development and security, where I design and build solutions that meet industry standards.
											<br />
											<br />
											Currently, I’m studying for my master's degree in <strong style={{color:"#e2e8f0"}}>Computer Science</strong>, where im focusing on cybersecurity and distributed systems. I'm accustomed to using modern technologies like <strong style={{color:"#e2e8f0"}}>Next.js</strong>, <strong style={{color:"#e2e8f0"}}>Gatsby</strong> and <strong style={{color:"#e2e8f0"}}>Typescript</strong>, paired with framworks such as <strong style={{color:"#e2e8f0"}}>React</strong>. Lately I've been taking interest in developing <strong style={{color:"#e2e8f0"}}>biometric systems</strong> and the intricate structure of the <strong style={{color:"#e2e8f0"}}>Bitcoin blockchain</strong>.
											<br />
											<br />
											In the past, I’ve had the opportunity to develop software in various settings, working on projects that tackle different <strong style={{color:"#e2e8f0"}}>cybersecurity</strong> challenges. I’ve also spent time crafting interactive playgrounds and security-focused applications that offer hands-on learning experiences for those wanting to dive into <strong style={{color:"#e2e8f0"}}>web application security</strong>.
											<br />
											<br />
											In my spare time, I enjoy working out, hiking and volunteering at my local Red Cross center.
										</span>
									</section>
								</div>
							</div>
							<div className="row">
								<div className="col subTitle">
									<section id="career" ref={(el) => (sectionsRef.current[1] = el)} style={{paddingTop: '7rem'}}>
										<CareerCardGrid />
									</section>
								</div>
							</div>
							<div className="row">
								<div className="col subTitle">
									<section id="projects" ref={(el) => (sectionsRef.current[2] = el)} style={{paddingTop: '7rem', paddingBottom: '7rem'}}>
										<ProjectCardGrid />
									</section>
								</div>
							</div>
							{/* <div className="row">
								<div className="col subTitle testHeight">
									<section id="certifications" ref={(el) => (sectionsRef.current[3] = el)}>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, quidem qui dolores corporis tempora iusto voluptates ratione veniam quae laudantium voluptas alias, hic cupiditate officiis aliquid similique sint perferendis quia.
									</section>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);
}

