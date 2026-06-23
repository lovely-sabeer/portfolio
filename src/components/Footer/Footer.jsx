import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import styles from './Footer.module.css';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.brand}>
						<span className={styles.logo}>
							<span className={styles.logoAccent}>S</span>abeer
						</span>
						<p className={styles.tagline}>.NET Full Stack Developer</p>
					</div>

					<div className={styles.socials}>
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialLink}
							aria-label="GitHub"
						>
							<FiGithub size={18} />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialLink}
							aria-label="LinkedIn"
						>
							<FiLinkedin size={18} />
						</a>
						<a
							href="mailto:sabeer@example.com"
							className={styles.socialLink}
							aria-label="Email"
						>
							<FiMail size={18} />
						</a>
					</div>
				</div>

				<div className={styles.divider} />

				<div className={styles.bottom}>
					<p className={styles.copyright}>
						© {currentYear} Sheik Mohamed Sabeer. All rights reserved.
					</p>
					<p className={styles.madeWith}>
						Made with <FiHeart size={14} className={styles.heart} /> using React
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;