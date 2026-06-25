import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';
import { experiences } from '../../assets/data';

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
								<h3 className={styles.role}>{exp.role}</h3>
								<span className={styles.period}>{exp.type}</span>
								<span className={styles.type}>{exp.period}</span>
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