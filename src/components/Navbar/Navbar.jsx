import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import styles from './Navbar.module.css';
import { logoName, navLinks } from '../../data/data';

function Navbar() {
	const [activeSection, setActiveSection] = useState('home');
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const sectionIds = navLinks.map((link) => link.id);
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.2, rootMargin: '-80px 0px -40% 0px' }
		);

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMobileMenuOpen]);

	const scrollToSection = (id) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<motion.nav
			className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
		>
			<div className={styles.container}>
				<button
					className={styles.logo}
					onClick={() => scrollToSection('home')}
					aria-label="Go to home"
				>
					<span className={styles.logoAccent}>{logoName.at(0)}</span>{logoName.substring(1)}
				</button>

				<ul className={styles.navLinks}>
					{navLinks.map((link) => (
						<li key={link.id}>
							<button
								className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''
									}`}
								onClick={() => scrollToSection(link.id)}
							>
								{link.label}
								{activeSection === link.id && (
									<motion.span
										className={styles.activeIndicator}
										layoutId="activeIndicator"
										transition={{ type: 'spring', stiffness: 380, damping: 30 }}
									/>
								)}
							</button>
						</li>
					))}
				</ul>

				<button
					className={styles.menuToggle}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
				</button>
			</div>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<>
						<motion.div
							className={styles.mobileOverlay}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={() => setIsMobileMenuOpen(false)}
						/>
						<motion.div
							className={styles.mobileMenu}
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
						>
							<div className={styles.mobileMenuHeader}>
								<span className={styles.mobileLogo}>
									<span className={styles.logoAccent}>S</span>abeer
								</span>
								<button
									className={styles.mobileClose}
									onClick={() => setIsMobileMenuOpen(false)}
									aria-label="Close menu"
								>
									<HiX size={24} />
								</button>
							</div>
							<ul className={styles.mobileNavLinks}>
								{navLinks.map((link, index) => (
									<motion.li
										key={link.id}
										initial={{ opacity: 0, x: 30 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
									>
										<button
											className={`${styles.mobileNavLink} ${activeSection === link.id ? styles.mobileActive : ''
												}`}
											onClick={() => scrollToSection(link.id)}
										>
											{link.label}
										</button>
									</motion.li>
								))}
							</ul>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}

export default Navbar;