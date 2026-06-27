import React from 'react';
import Navbar from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Education from './sections/Education/Education';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.app}>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Education />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;