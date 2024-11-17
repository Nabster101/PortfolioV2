import React from 'react';
import "@/app/components/CareerCard/CareerCard.css"
import Link from 'next/link';

interface CareerCardProps {
	title: string;
	description: string;
	source: string;
    startDate: string;
    endDate: string;
}

const CareerCard: React.FC<CareerCardProps> = ({ title, description, startDate, endDate, source }) => {
	return (

		<div className="container-fluid containerCareerCard">
			<div className="row">
				<Link href={source} target='_blank' rel='noopener noreferrer' className='cardCareerLink'>
					<div className="col-md-4 col-lg-3">
                        <div className="dateCareerCard">
						    {startDate} - {endDate}
                        </div>
					</div>
					<div className="col-sm-12 col-md-8 col-lg-9">
						<div className="cardCareerTitle">
							{title}
						</div>
						<div className="cardCareerDescription">
							{description}
						</div>
					</div>
				</Link>	
			</div>
		</div>
  );
};

export default CareerCard;
