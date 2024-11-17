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

		<div className="container-fluid containerCard">
			<div className="row">
				<Link href={source} target='_blank' rel='noopener noreferrer' className='cardLink'>
					<div className="col-3">
                        <div className="dateCard">
						    {startDate} - {endDate}
                        </div>
					</div>
					<div className="col-9">
						<div className="cardTitle">
							{title}
						</div>
						<div className="cardDescription">
							{description}
						</div>
					</div>
				</Link>	
			</div>
		</div>
  );
};

export default CareerCard;
