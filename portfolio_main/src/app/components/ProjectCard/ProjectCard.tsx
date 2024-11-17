import React from 'react';
import Image from 'next/image';
import "@/app/components/ProjectCard/ProjectCard.css"
import Link from 'next/link';

interface ProjectCardProps {
	title: string;
	description: string;
	image?: string;
	source: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, source }) => {
	return (

		<div className="container-fluid containerCard">
			<div className="row">
				<Link href={source} target='_blank' rel='noopener noreferrer' className='cardLink'>
					<div className="col-12 col-md-4">
						<Image
							src={image || 'https://via.placeholder.com/300'}
							width={150}
							height={150}
							alt='Project image'
							className="cardImage"
						/>
					</div>
					<div className="col-sm-12 col-md-8">
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

		/*
		
    <div
      className="card"
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        margin: '16px auto',
        textAlign: 'center',
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      )}
      <h2 style={{ fontSize: '18px', margin: '8px 0' }}>{title}</h2>
      <p style={{ color: '#555', fontSize: '14px' }}>{description}</p>
      
    </div>

	*/
  );
};

export default ProjectCard;
