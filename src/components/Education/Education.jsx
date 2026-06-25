import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiMapPin } from 'react-icons/fi';
import styles from './Education.module.css';
import { education } from '../../data/data';

const EducationCard = ({ education }) => {
	const EducationIcon = education.icon;

	return (
		<motion.div
			className={styles.educationCard}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: 0.15 }}
		>
			<div className={styles.cardHeader}>
				<div className={styles.iconWrapper}>
					<EducationIcon size={28} />
				</div>

				<div>
					<h3 className={styles.degree}>{education.degree}</h3>
					<p className={styles.field}>{education.field}</p>
				</div>
			</div>

			<div className={styles.details}>
				{education.details.map((detail, index) => {
					const DetailIcon = detail.icon;

					return (
						<div key={index} className={styles.detailItem}>
							<DetailIcon size={16} className={styles.detailIcon} />

							<div>
								<span className={styles.detailLabel}>{detail.label}</span>
								<span className={styles.detailValue}>{detail.value}</span>
							</div>
						</div>
					);
				})}
			</div>
		</motion.div>
	);
};
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
					{
						education.map((item, index) => <EducationCard education={item} key={index} />)
					}
				</div>
			</div>
		</section>
	);
}

export default Education;