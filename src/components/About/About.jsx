import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayers, FiTarget } from 'react-icons/fi';
import styles from './About.module.css';

const highlights = [
	{
		icon: <FiCode size={22} />,
		title: 'Full Stack Development',
		description: 'Building end-to-end web solutions with .NET backend and React frontend',
	},
	{
		icon: <FiDatabase size={22} />,
		title: 'Database Design',
		description: 'Designing efficient relational and NoSQL database architectures',
	},
	{
		icon: <FiLayers size={22} />,
		title: 'API Development',
		description: 'Creating RESTful APIs with proper authentication and documentation',
	},
	{
		icon: <FiTarget size={22} />,
		title: 'Problem Solving',
		description: 'Tackling complex challenges with clean, maintainable solutions',
	},
];

const fadeInUp = {
	hidden: { opacity: 0, y: 40 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
	}),
};

function About() {
	return (
		<section id="about" className={styles.about}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className={styles.label}>About Me</span>
					<h2 className={styles.title}>Getting to Know Me</h2>
				</motion.div>

				<div className={styles.content}>
					<motion.div
						className={styles.textBlock}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<p>
							I&apos;m a .NET Full Stack Developer based in Tamil Nadu, India, with a
							strong foundation in building scalable, production-ready web
							applications. My expertise spans across the full development stack
							— from crafting responsive user interfaces with React.js to
							architecting robust backend systems with ASP.NET Core and Entity
							Framework Core.
						</p>
						<p>
							I specialize in designing and consuming REST APIs, implementing
							JWT-based authentication, and working with relational databases
							like MySQL and SQLite, as well as NoSQL solutions like MongoDB. My
							approach to development emphasizes clean code, modular
							architecture, and performance optimization.
						</p>
						<p>
							I&apos;m passionate about software architecture and continuously
							exploring modern tools and best practices to deliver efficient,
							maintainable solutions. Whether it&apos;s building a new feature from
							scratch or optimizing an existing system, I thrive on turning
							complex requirements into elegant, working software.
						</p>
					</motion.div>

					<div className={styles.highlights}>
						{highlights.map((item, index) => (
							<motion.div
								key={item.title}
								className={styles.highlightCard}
								custom={index}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={fadeInUp}
							>
								<div className={styles.highlightIcon}>{item.icon}</div>
								<h3 className={styles.highlightTitle}>{item.title}</h3>
								<p className={styles.highlightDesc}>{item.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;