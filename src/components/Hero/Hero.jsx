import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from 'react-icons/fi';
import styles from './Hero.module.css';
import { heroPic, resume } from "../../assets/assest"
function Hero() {
	const scrollToProjects = () => {
		const el = document.getElementById('projects');
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section id="home" className={styles.hero}>
			<div className={styles.container}>
				<motion.div
					className={styles.content}
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: 'easeOut' }}
				>
					<motion.span
						className={styles.greeting}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Hello, I&apos;m
					</motion.span>

					<motion.h1
						className={styles.name}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.35 }}
					>
						Sheik Mohamed Sabeer
					</motion.h1>

					<motion.h2
						className={styles.title}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						.NET Full Stack Developer
					</motion.h2>

					<motion.p
						className={styles.summary}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.65 }}
					>
						.NET Full Stack Developer with hands-on experience building scalable
						web applications using ASP.NET Core, React.js, Entity Framework Core,
						and MySQL. Skilled in developing REST APIs, responsive user
						interfaces, authentication systems, database design, and business
						applications.
					</motion.p>

					<motion.div
						className={styles.actions}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
					>
						<button className={styles.primaryBtn} onClick={scrollToProjects}>
							View Projects
							<FiArrowDown className={styles.btnIcon} />
						</button>
						<a
							href={resume}
							download
							className={styles.secondaryBtn}
						>
							<FiDownload className={styles.btnIcon} />
							Download Resume
						</a>
					</motion.div>

					<motion.div
						className={styles.socials}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.0 }}
					>
						<a
							href="https://github.com/lovely-sabeer"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialLink}
							aria-label="GitHub"
						>
							<FiGithub size={20} />
						</a>
						<a
							href="https://www.linkedin.com/in/sheik-mohamed-sabeer-07nov2003"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialLink}
							aria-label="LinkedIn"
						>
							<FiLinkedin size={20} />
						</a>
					</motion.div>
				</motion.div>

				<motion.div
					className={styles.imageWrapper}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
				>
					<div className={styles.imageGlow} />
					<div className={styles.imageContainer}>
						<img
							src={heroPic}
							alt="Sheik Mohamed Sabeer"
							className={styles.profileImage}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default Hero;