import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
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