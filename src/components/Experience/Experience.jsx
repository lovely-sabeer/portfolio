import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
	{
		period: 'Sep 2025 – May 2026',
		role: 'Trainee Software Developer',
		type: 'Risolutor Technologies Pvt Ltd',
		description:
			'Worked on full-stack web application development using ASP.NET Core, React.js, Entity Framework Core, and MySQL. Developed RESTful APIs, implemented authentication and authorization, integrated frontend and backend systems, optimized database operations, and contributed to business application development.',
		highlights: [
			'Built scalable web applications using ASP.NET Core and React.js',
			'Developed and integrated RESTful APIs',
			'Implemented JWT authentication and authorization',
			'Designed and optimized MySQL database structures',
			'Collaborated on business application development and maintenance',
		],
	},
	{
		period: 'Feb 2025 – Jun 2025',
		role: 'Java Full Stack Developer Intern',
		type: 'Uniq Technologies',
		description:
			'Completed training and project development in Java Full Stack technologies. Worked on frontend development, backend API implementation, database management, and software development best practices through practical projects.',
		highlights: [
			'Frontend development using React.js',
			'Backend development using Java and Spring Boot',
			'Database design and management with MySQL',
			'REST API development and integration',
			'Version control using Git and GitHub',
		],
	},
];

function Experience() {
	return (
		<section id="experience" className={styles.experience}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className={styles.label}>Experience</span>
					<h2 className={styles.title}>Professional Journey</h2>
				</motion.div>

				<div className={styles.timeline}>
					<div className={styles.timelineLine} />
					{experiences.map((exp, index) => (
						<motion.div
							key={exp.period}
							className={styles.timelineItem}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.15 }}
						>
							<div className={styles.timelineDot} />
							<div className={styles.timelineCard}>
								<span className={styles.period}>{exp.period}</span>
								<span className={styles.type}>{exp.type}</span>
								<h3 className={styles.role}>{exp.role}</h3>
								<p className={styles.description}>{exp.description}</p>
								<ul className={styles.highlights}>
									{exp.highlights.map((item) => (
										<li key={item} className={styles.highlightItem}>
											<span className={styles.highlightDot} />
											{item}
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Experience;