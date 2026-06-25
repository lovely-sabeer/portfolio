import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend, FiCheck, FiMapPin } from 'react-icons/fi';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { address, email, phone } from '../../assets/data';

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [sending, setSending] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const now = new Date();
	const timeString = now.toLocaleTimeString();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSending(true);
		try {
			await emailjs.send(
				import.meta.env.EMAILJS_SERVICE_ID,
				import.meta.env.EMAILJS_TEMPLATE_ID,
				{
					name: formData.name,
					email: formData.email,
					subject: formData.subject,
					time: timeString,
					message: formData.message,
				},
				import.meta.env.EMAILJS_PUBLIC_KEY,
			);
			setSubmitted(true);
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: '',
			});
			setTimeout(() => setSubmitted(false), 5000);
		} catch (error) {
			console.error(error);
			alert('Failed to send message.');
		} finally {
			setSending(false);
		}
	};

	return (
		<section id="contact" className={styles.contact}>
			<div className={styles.container}>
				<motion.div
					className={styles.header}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<span className={styles.label}>Contact</span>
					<h2 className={styles.title}>Get In Touch</h2>
					<p className={styles.subtitle}>
						Have a question or want to work together? Feel free to reach out.
					</p>
				</motion.div>

				<div className={styles.content}>
					<motion.div
						className={styles.info}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<div className={styles.infoCard}>
							<h3 className={styles.infoTitle}>Contact Information</h3>
							<p className={styles.infoText}>
								I&apos;m open to job opportunities, freelance projects, and
								collaborations. Don&apos;t hesitate to reach out.
							</p>

							<div className={styles.contactItems}>
								<a
									href={`mailto:${email}`}
									className={styles.contactItem}
								>
									<div className={styles.contactIcon}>
										<FiMail size={18} />
									</div>
									<div>
										<span className={styles.contactLabel}>Email</span>
										<span className={styles.contactValue}>{email}</span>
									</div>
								</a>

								<a href={`tel:+91${phone}`} className={styles.contactItem}>
									<div className={styles.contactIcon}>
										<FiPhone size={18} />
									</div>
									<div>
										<span className={styles.contactLabel}>Phone</span>
										<span className={styles.contactValue}>+91 {phone}</span>
									</div>
								</a>

								<div className={styles.contactItem}>
									<div className={styles.contactIcon}>
										<FiMapPin size={18} />
									</div>
									<div>
										<span className={styles.contactLabel}>Location</span>
										<span className={styles.contactValue}>{address}</span>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						className={styles.formWrapper}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<form className={styles.form} onSubmit={handleSubmit}>
							<div className={styles.formRow}>
								<div className={styles.formGroup}>
									<label htmlFor="name" className={styles.formLabel}>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="Your name"
										className={styles.formInput}
										required
									/>
								</div>
								<div className={styles.formGroup}>
									<label htmlFor="email" className={styles.formLabel}>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										placeholder="your@email.com"
										className={styles.formInput}
										required
									/>
								</div>
							</div>

							<div className={styles.formGroup}>
								<label htmlFor="subject" className={styles.formLabel}>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									placeholder="What's this about?"
									className={styles.formInput}
									required
								/>
							</div>

							<div className={styles.formGroup}>
								<label htmlFor="message" className={styles.formLabel}>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Your message..."
									rows={5}
									className={styles.formTextarea}
									required
								/>
							</div>

							<button
								type="submit"
								className={`${styles.submitBtn} ${submitted ? styles.submitted : ''
									} ${sending ? styles.sending : ''}`}
								disabled={sending || submitted}
							>
								{sending ? (
									'Sending...'
								) : submitted ? (
									<>
										<FiCheck size={18} />
										Message Sent!
									</>
								) : (
									<>
										<FiSend size={18} />
										Send Message
									</>
								)}
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default Contact;