"use client";

import Image from "next/image";
import "@/app/ui/page.css";
import { robotoCondensed } from "./ui/fonts";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ProjectCardGrid from "@/app/components/ProjectCardGrid";
import CareerCardGrid from "@/app/components/CareerCardGrid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowTrendUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";



export default function Home() {

	const [activeSection, setActiveSection] = useState('');
	const sectionsRef = useRef<(HTMLElement | null)[]>([]);
	const cursorRef = useRef(null);

	useEffect(() => {
		if (sectionsRef.current.length === 0) return; // Prevent empty array errors
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
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		interface MouseEventWithClient extends MouseEvent {
			clientX: number;
			clientY: number;
		}

		const handleMouseMove = (event: MouseEventWithClient) => {
			if (cursorRef.current) {
			(cursorRef.current as HTMLElement).style.left = `${event.clientX}px`;
			(cursorRef.current as HTMLElement).style.top = `${event.clientY}px`;
			}
		};

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

	const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

	return (
		<>
			<Head>
                <title>Pietro Costanzi Fantini</title>
                <meta name="description" content="Portfolio of Pietro Costanzi Fantini" />
            </Head>
			<div className="container">
				<div ref={cursorRef} className="custom-cursor"></div>
				<div className="container sidebar">
					<div className="row">
						<div className="col">
							<div className="logoContainer">
								<Image 
									className="personalLogo"
									src={"/images/logo_personal2.jpg"}
									alt="Personal logo"
									width={300}
									height={300}
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="container infoColumn">
								<div className="row">
									<div className={`col-xl-12 col-lg-12 mainTitle ${robotoCondensed.className}`}>
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
										<div>I like to build cool things on the web</div>
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
										<Link style={{textDecoration: 'none',  color: '#94a3b8'}} target="_blank" href="/CV_Pietro_Costanzi_Fantini.pdf">
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
										<section id="about" ref={(el) => {if (el) sectionsRef.current[0] = el;}} style={{ paddingTop: "6.55rem" }}>
											<span>
												I am a developer with a strong passion for <strong style={{color:"#e2e8f0"}}>security</strong> and <strong style={{color:"#e2e8f0"}}>IT innovations</strong>. My work focuses on crafting secure, high-performance user interfaces that are both <strong style={{color:"#e2e8f0"}}>functional</strong> and <strong style={{color:"#e2e8f0"}}>user-friendly</strong>. I am deeply involved in the intersection of development and security, designing and building solutions that adhere to industry standards.
												<br />
												<br />
												I’m currently pursuing a Master’s degree in <strong style={{color:"#e2e8f0"}}>Computer Science</strong>, focusing on <strong style={{color:"#e2e8f0"}}>cybersecurity</strong>, <strong style={{color:"#e2e8f0"}}>biometric systems</strong>, and <strong style={{color:"#e2e8f0"}}>distributed systems</strong>. I previously earned a Bachelor’s degree in Computer Engineering, where I tackled topics such as Algorithms and Data Structures, Software Engineering, Embedded Systems, Computer Network Infrastructures, and Formal Mathematical Methods. I'm accustomed to using modern technologies like <strong style={{color:"#e2e8f0"}}>Next.js</strong>, <strong style={{color:"#e2e8f0"}}>Gatsby</strong> and <strong style={{color:"#e2e8f0"}}>Typescript</strong>, paired with framworks such as <strong style={{color:"#e2e8f0"}}>React</strong>. Lately I've been taking interest in developing <strong style={{color:"#e2e8f0"}}>biometric systems</strong> and the intricate structure of the <strong style={{color:"#e2e8f0"}}>Bitcoin blockchain</strong>.
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
										<section id="career" ref={(el) => { if(el) sectionsRef.current[1] = el; }} style={{paddingTop: '7rem'}}>
											<CareerCardGrid />
										</section>
									</div>
								</div>
								<div className="row">
									<div className="col subTitle">
										<section id="projects" ref={(el) => { if(el) sectionsRef.current[2] = el; }} style={{paddingTop: '7rem', paddingBottom: '7rem'}}>
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
		</>
	);
}

