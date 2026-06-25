import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import { skills } from '../../data/data';

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.06,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.4, ease: 'easeOut' },
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
	}),
};

function Skills() {
	return (
		<section id="skills" className={styles.skills}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className={styles.label}>Skills</span>
					<h2 className={styles.title}>Technologies I Work With</h2>
				</motion.div>

				<div className={styles.grid}>
					{skills.map((category, catIndex) => (
						<motion.div
							key={category.title}
							className={styles.categoryCard}
							custom={catIndex}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={cardVariants}
						>
							<h3 className={styles.categoryTitle}>{category.title}</h3>
							<motion.div
								className={styles.skillsList}
								variants={containerVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
							>
								{category.skills.map((skill) => (
									<motion.span
										key={skill}
										className={styles.skillBadge}
										variants={itemVariants}
										whileHover={{
											scale: 1.05,
											borderColor: 'rgba(59, 130, 246, 0.5)',
											backgroundColor: 'rgba(59, 130, 246, 0.1)',
										}}
										transition={{ duration: 0.2 }}
									>
										{skill}
									</motion.span>
								))}
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;