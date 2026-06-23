import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiMapPin } from 'react-icons/fi';
import styles from './Education.module.css';

function Education() {
	return (
		<section id="education" className={styles.education}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className={styles.label}>Education</span>
					<h2 className={styles.title}>Academic Background</h2>
				</motion.div>

				<div className={styles.cardWrapper}>
					<motion.div
						className={styles.educationCard}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.15 }}
					>
						<div className={styles.cardHeader}>
							<div className={styles.iconWrapper}>
								<FiBookOpen size={28} />
							</div>
							<div>
								<h3 className={styles.degree}>Bachelor of Engineering</h3>
								<p className={styles.field}>Computer Science and Engineering</p>
							</div>
						</div>

						<div className={styles.details}>
							<div className={styles.detailItem}>
								<FiAward size={16} className={styles.detailIcon} />
								<div>
									<span className={styles.detailLabel}>Duration</span>
									<span className={styles.detailValue}>2020 – 2024</span>
								</div>
							</div>
							<div className={styles.detailItem}>
								<FiMapPin size={16} className={styles.detailIcon} />
								<div>
									<span className={styles.detailLabel}>Location</span>
									<span className={styles.detailValue}>Tamil Nadu, India</span>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						className={styles.educationCard}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.15 }}
					>
						<div className={styles.cardHeader}>
							<div className={styles.iconWrapper}>
								<FiBookOpen size={28} />
							</div>
							<div>
								<h3 className={styles.degree}>Bachelor of Engineering</h3>
								<p className={styles.field}>Computer Science and Engineering</p>
							</div>
						</div>

						<div className={styles.details}>
							<div className={styles.detailItem}>
								<FiAward size={16} className={styles.detailIcon} />
								<div>
									<span className={styles.detailLabel}>Duration</span>
									<span className={styles.detailValue}>2020 – 2024</span>
								</div>
							</div>
							<div className={styles.detailItem}>
								<FiMapPin size={16} className={styles.detailIcon} />
								<div>
									<span className={styles.detailLabel}>Location</span>
									<span className={styles.detailValue}>Tamil Nadu, India</span>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						className={styles.educationCard}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.15 }}
					>
						<div className={styles.cardHeader}>
							<div className={styles.iconWrapper}>
								<FiBookOpen size={28} />
							</div>
							<div>
								<h3 className={styles.degree}>Bachelor of Engineering</h3>
								<p className={styles.field}>Computer Science and Engineering</p>
							</div>
						</div>

						<div className={styles.details}>
							<div className={styles.detailItem}>
								<FiAward size={16} className={styles.detailIcon} />
								<div>
									<span className={styles.detailLabel}>Duration</span>
									<span className={styles.detailValue}>2020 – 2024</span>
								</div>
							</div>
							<div className={styles.detailItem}>
								<FiMapPin size={16} className={styles.detailIcon} />
								<div>
									<span className={styles.detailLabel}>Location</span>
									<span className={styles.detailValue}>Tamil Nadu, India</span>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default Education;