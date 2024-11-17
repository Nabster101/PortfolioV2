import Image from "next/image";
import style from "./page.module.css";
import "@/app/ui/page.css";
import { robotoCondensed } from "./ui/fonts";
import Link from "next/link";

export default function Home() {
	return (
		<div className="container" style={{marginTop: '6rem'}}>
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
									<div className="col">
										<Link href="#about">About</Link>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<div>Projects</div>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<div>Contacts</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				<div className="col testHeight">
					<div className="container infoColumn">
						<div className="row">
							<div className="col subTitle">
								<div>
									efbwefbwofjwebfjb
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

