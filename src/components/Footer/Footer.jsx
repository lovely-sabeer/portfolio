import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import styles from './Footer.module.css';
import { email, git, linkedIn, logoName, name, profession } from '../../assets/data';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.brand}>
						<span className={styles.logo}>
							<span className={styles.logoAccent}>{logoName.at(0)}</span>{logoName.substring(1)}
						</span>
						<p className={styles.tagline}>{profession}</p>
					</div>

					<div className={styles.socials}>
						<a
							href={git}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialLink}
							aria-label="GitHub"
						>
							<FiGithub size={18} />
						</a>
						<a
							href={linkedIn}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialLink}
							aria-label="LinkedIn"
						>
							<FiLinkedin size={18} />
						</a>
						<a
							href={`mailto:${email}`}
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
						© {currentYear} {name}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;