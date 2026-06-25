import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FiExternalLink } from 'react-icons/fi';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import styles from './Projects.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { projects } from '../../data/data';

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
	}),
};

function Projects() {
	const [selectedProject, setSelectedProject] = useState(null);

	const openProject = (project) => {
		setSelectedProject(project);
	};

	const closeProject = () => {
		setSelectedProject(null);
	};

	return (
		<section id="projects" className={styles.projects}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className={styles.label}>Projects</span>
					<h2 className={styles.title}>Projects I've Developed & Contributed To</h2>
				</motion.div>

				<div className={styles.grid}>
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							className={styles.projectCard}
							custom={index}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={cardVariants}
							whileHover={{ y: -6, transition: { duration: 0.3 } }}
							onClick={() => openProject(project)}
							role="button"
							tabIndex={0}
							onKeyDown={(e) => e.key === 'Enter' && openProject(project)}
						>
							<div className={styles.cardGallery}>
								<Swiper
									modules={[Navigation, Pagination, A11y]}
									spaceBetween={0}
									slidesPerView={1}
									loop={true}
									navigation={false}
									pagination={{ clickable: true }}
									className={styles.cardSwiper}
								>
									{project.images.map((img, imgIndex) => (
										<SwiperSlide key={imgIndex}>
											<div className={styles.slideImage}>
												<img src={img} alt={`${project.title} screenshot ${imgIndex + 1}`} />
											</div>
										</SwiperSlide>
									))}
								</Swiper>
								<div className={styles.cardOverlay}>
									<FiExternalLink size={20} />
									<span>View Details</span>
								</div>
							</div>

							<div className={styles.cardContent}>
								<h3 className={styles.cardTitle}>{project.title}</h3>
								<span className={styles.cardDuration}>{project.duration}</span>
								<div className={styles.cardTech}>
									{project.technologies.map((tech) => (
										<span key={tech} className={styles.techTag}>
											{tech}
										</span>
									))}
								</div>
								{project.associatedWith && (
									<div className={styles.associated}>
										<span className={styles.associatedLabel}>Associated With:</span>
										<span className={styles.associatedValue}>{project.associatedWith}</span>
									</div>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<ProjectDetails project={selectedProject} onClose={closeProject} />
		</section>
	);
}

export default Projects;