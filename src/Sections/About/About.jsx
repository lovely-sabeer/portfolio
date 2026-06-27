import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import { aboutMe } from '../../data/data';

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
							{aboutMe.aboutme}
						</p>
					</motion.div>

					<div className={styles.highlights}>
						{aboutMe.highlights.map((item, index) => {
							const Icon = item.icon;
							return (
								<motion.div
									key={item.title}
									className={styles.highlightCard}
									custom={index}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={fadeInUp}
								>
									<div className={styles.highlightIcon}><Icon size={22} /></div>
									<h3 className={styles.highlightTitle}>{item.title}</h3>
									<p className={styles.highlightDesc}>{item.description}</p>
								</motion.div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;