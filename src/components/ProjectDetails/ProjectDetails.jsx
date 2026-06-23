import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FiX, FiGithub, FiExternalLink, FiCheckCircle, FiAlertCircle, FiLayers } from 'react-icons/fi';
import styles from './ProjectDetails.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProjectDetails({ project, onClose }) {
	useEffect(() => {
		if (project) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [project]);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape' && project) {
				onClose();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [project, onClose]);

	return (
		<AnimatePresence>
			{project && (
				<>
					<motion.div
						className={styles.overlay}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={onClose}
					/>
					<motion.div
						className={styles.panel}
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'tween', duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
					>
						<div className={styles.panelHeader}>
							<h2 className={styles.panelTitle}>Project Details</h2>
							<button
								className={styles.closeBtn}
								onClick={onClose}
								aria-label="Close details"
							>
								<FiX size={22} />
							</button>
						</div>

						<div className={styles.panelBody}>
							<div className={styles.gallery}>
								<Swiper
									modules={[Navigation, Pagination, A11y]}
									spaceBetween={16}
									slidesPerView={1}
									loop={true}
									navigation={true}
									pagination={{ clickable: true }}
									className={styles.detailSwiper}
								>
									{project.images.map((img, index) => (
										<SwiperSlide key={index}>
											<div className={styles.detailSlide}>
												<img src={img} alt={`${project.title} screenshot ${index + 1}`} />
											</div>
										</SwiperSlide>
									))}
								</Swiper>
							</div>

							<h3 className={styles.projectName}>{project.title}</h3>

							<div className={styles.metaRow}>
								<div className={styles.metaItem}>
									<span className={styles.metaLabel}>Duration</span>
									<span className={styles.metaValue}>{project.duration}</span>
								</div>
								{project.associatedWith && (
									<div className={styles.metaItem}>
										<span className={styles.metaLabel}>Associated With</span>
										<span className={styles.metaValue}>{project.associatedWith}</span>
									</div>
								)}
							</div>

							<div className={styles.section}>
								<span className={styles.sectionLabel}>Technologies Used</span>
								<div className={styles.techTags}>
									{project.technologies.map((tech) => (
										<span key={tech} className={styles.techTag}>
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className={styles.section}>
								<span className={styles.sectionLabel}>Description</span>
								<p className={styles.sectionText}>{project.description}</p>
							</div>

							<div className={styles.section}>
								<span className={styles.sectionLabel}>
									<FiCheckCircle size={14} className={styles.sectionIcon} />
									Features
								</span>
								<ul className={styles.featureList}>
									{project.features.map((feature, i) => (
										<li key={i} className={styles.featureItem}>
											<span className={styles.featureDot} />
											{feature}
										</li>
									))}
								</ul>
							</div>

							<div className={styles.section}>
								<span className={styles.sectionLabel}>
									<FiAlertCircle size={14} className={styles.sectionIcon} />
									Challenges Solved
								</span>
								<ul className={styles.featureList}>
									{project.challenges.map((challenge, i) => (
										<li key={i} className={styles.featureItem}>
											<span className={styles.challengeDot} />
											{challenge}
										</li>
									))}
								</ul>
							</div>

							<div className={styles.section}>
								<span className={styles.sectionLabel}>
									<FiLayers size={14} className={styles.sectionIcon} />
									Architecture Overview
								</span>
								<p className={styles.sectionText}>{project.architecture}</p>
							</div>

							<div className={styles.actions}>
								{project.github && (
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className={styles.actionBtn}
									>
										<FiGithub size={18} />
										<span>GitHub</span>
									</a>
								)}
								{project.liveDemo && (
									<a
										href={project.liveDemo}
										target="_blank"
										rel="noopener noreferrer"
										className={styles.actionBtnPrimary}
									>
										<FiExternalLink size={18} />
										<span>Live Demo</span>
									</a>
								)}
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}

export default ProjectDetails;