import { FiAward, FiBookOpen, FiCode, FiDatabase, FiLayers, FiMapPin, FiTarget } from "react-icons/fi"
import { heroPic, resume, noImg, femiLanding, femiLogin, femiRegister, femiPurchase } from "../assets/assest"


export const navLinks = [
	{ label: 'Home', id: 'home' },
	{ label: 'About', id: 'about' },
	{ label: 'Skills', id: 'skills' },
	{ label: 'Experience', id: 'experience' },
	{ label: 'Education', id: 'education' },
	{ label: 'Projects', id: 'projects' },
	{ label: 'Contact', id: 'contact' },
]
export const logoName = "SABEER"
export const name = "Sheik Mohamed Sabeer"
export const profession = ".NET Full Stack Developer"
export const summary = ".NET Full Stack Developer with hands-on experience building scalable web applications using ASP.NET Core, React.js, Entity Framework Core, and MySQL. Skilled in developing REST APIs, responsive user interfaces, authentication systems, database design, and business applications."
export const profilePic = heroPic
export const resumeDownload = resume
export const git = "https://github.com/lovely-sabeer"
export const linkedIn = "https://www.linkedin.com/in/sheik-mohamed-sabeer-07nov2003"

export const email = "sheikmohamed.sabeer@gmail.com"
export const phone = "8861848654"
export const address = "Tenkasi, Tamil Nadu, India"

export const aboutMe = {
	aboutme: "I'm a .NET Full Stack Developer based in Tamil Nadu, India, with a strong foundation in building scalable, production-ready web applications. My expertise spans across the full development stack — from crafting responsive user interfaces with React.js to architecting robust backend systems with ASP.NET Core and Entity Framework Core. \n I specialize in designing and consuming REST APIs, implementing JWT - based authentication, and working with relational databases like MySQL and SQLite, as well as NoSQL solutions like MongoDB.My approach to development emphasizes clean code, modular architecture, and performance optimization. \nI'm passionate about software architecture and continuously exploring modern tools and best practices to deliver efficient, maintainable solutions. Whether it's building a new feature from scratch or optimizing an existing system, I thrive on turning complex requirements into elegant, working software.",
	highlights: [
		{
			icon: FiCode,
			title: 'Full Stack Development',
			description: 'Building end-to-end web solutions with .NET backend and React frontend',
		},
		{
			icon: FiDatabase,
			title: 'Database Design',
			description: 'Designing efficient relational and NoSQL database architectures',
		},
		{
			icon: FiLayers,
			title: 'API Development',
			description: 'Creating RESTful APIs with proper authentication and documentation',
		},
		{
			icon: FiTarget,
			title: 'Problem Solving',
			description: 'Tackling complex challenges with clean, maintainable solutions',
		},
	]
}

export const skills = [
	{
		title: 'Frontend',
		skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
	},
	{
		title: 'Backend',
		skills: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'REST APIs', 'JWT Authentication', 'Repository Pattern', 'Singleton Pattern', 'Dependency Injection', 'LINQ', 'OOPs', 'SOLID Principles'],
	},
	{
		title: 'Database',
		skills: ['MySQL', 'SQLite', 'MongoDB'],
	},
	{
		title: 'Tools & Technologies',
		skills: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Postman'],
	},
];

export const experiences = [
	{
		period: 'Sep 2025 - May 2026',
		role: 'Trainee Software Developer',
		type: 'Risolutor Technologies Pvt Ltd',
		description:
			'Worked on full-stack web application development using ASP.NET Core, React.js, Entity Framework Core, and MySQL. Developed RESTful APIs, implemented authentication and authorization, integrated frontend and backend systems, optimized database operations, and contributed to business application development.',
		highlights: [
			'Built scalable web applications using ASP.NET Core and React.js',
			'Developed and integrated RESTful APIs',
			'Implemented JWT authentication and authorization',
			'Designed and optimized MySQL database structures',
			'Collaborated on business application development and maintenance',
		],
	},
	{
		period: 'Feb 2025 - Jun 2025',
		role: 'Java Full Stack Developer Intern',
		type: 'Uniq Technologies',
		description:
			'Completed training and project development in Java Full Stack technologies. Worked on frontend development, backend API implementation, database management, and software development best practices through practical projects.',
		highlights: [
			'Frontend development using React.js',
			'Backend development using Java and Spring Boot',
			'Database design and management with MySQL',
			'REST API development and integration',
			'Version control using Git and GitHub',
		],
	},
];

export const education = [
	{
		degree: 'Bachelor of Engineering',
		field: 'Computer Science and Engineering',
		icon: FiBookOpen,
		details: [
			{
				label: 'Duration',
				value: '2021 – 2025',
				icon: FiAward,
			},
			{
				label: 'Location',
				value: 'Tamil Nadu, India',
				icon: FiMapPin,
			},
		],
	},
	{
		degree: 'Higher Secondary (12th)',
		field: 'State Board',
		icon: FiBookOpen,
		details: [
			{
				label: 'Duration',
				value: '2020 – 2021',
				icon: FiAward,
			},
			{
				label: 'Location',
				value: 'Tamil Nadu, India',
				icon: FiMapPin,
			},
		],
	},
	{
		degree: 'Secondary School (10th)',
		field: 'State Board',
		icon: FiBookOpen,
		details: [
			{
				label: 'Duration',
				value: '2018 – 2019',
				icon: FiAward,
			},
			{
				label: 'Location',
				value: 'Tamil Nadu, India',
				icon: FiMapPin,
			},
		],
	},
];

export const projects = [
	{
		id: 1,
		title: 'Monitor Application',
		duration: 'Feb 2026 - Mar 2026',
		associatedWith: 'Risolutor Technologies Pvt Ltd',
		technologies: ['.Net','MAUI','Windows Services', 'SignalR', 'SQLite','ASP.NET Core', 'MySQL'],
		description:
			'A real-time monitoring application designed to track system activities, application health, and background services. The system provides centralized monitoring, status reporting, and automated notifications for operational visibility.',
		features: [
			'Real-time monitoring of application and service status',
			'Dashboard displaying system health and activity',
			'Automated notifications for failures and critical events',
			'Historical monitoring logs for troubleshooting',
			'Secure authentication and role-based access',
		],
		challenges: [
			'Handling continuous background monitoring efficiently',
			'Designing scalable logging and monitoring architecture',
			'Maintaining real-time updates with minimal performance impact',
		],
		architecture:
			'Built using ASP.NET Core REST APIs, React.js frontend, MySQL database, and Windows Services for continuous background monitoring and task execution.',
		images: [
			noImg,
			noImg,
			noImg,
		],
		github: '',
		liveDemo: '',
	},
	{
		id: 2,
		title: 'FSM Application',
		duration: 'Sep 2025 - Nov 2025',
		associatedWith: 'Risolutor Technologies Pvt Ltd',
		technologies: ['ASP.NET Core', 'React.js', 'MySQL', 'REST APIs', 'API Integration', 'Singleton Pattern', 'Axios'],
		description:
			'A field service management application developed to manage service requests, engineer assignments, task tracking, and customer interactions through a centralized web platform.',
		features: [
			'Service request management',
			'Task assignment and progress tracking',
			'Employee management',
			'Payout Management',
			'Real-time status updates',
		],
		challenges: [
			'Managing multiple workflow states efficiently',
			'Designing scalable APIs for field operations',
			'Maintaining consistent data across multiple modules',
		],
		architecture:
			'Developed using ASP.NET Core REST APIs with React.js frontend and MySQL database following a layered architecture for maintainability.',
		images: [
			noImg,
			noImg,
			noImg,
		],
		github: '',
		liveDemo: '',
	},
	{
		id: 3,
		title: 'Gym Management Application',
		duration: '',
		associatedWith: 'NA / Professional Project',
		technologies: ['React.js', 'Java Script', 'Apex Charts', 'Axios'],
		description:
			'A complete gym management solution for managing memberships, trainers, workout plans, attendance, and payment records through a user-friendly administrative dashboard.',
		features: [
			'Member registration and profile management',
			'Trainer and workout schedule management',
			'Membership plan tracking',
			'Attendance management',
			'Payment and subscription records',
		],
		challenges: [
			'Designing flexible membership management workflows',
			'Creating responsive dashboards for administrators',
			'Managing relational data efficiently',
		],
		architecture:
			'Built with ASP.NET Core backend, React.js frontend, and MySQL database using RESTful APIs for seamless communication.',
		images: [
			noImg,
			noImg,
			noImg,
		],
		github: 'https://github.com/lovely-sabeer/Gym_Management_System.git',
		liveDemo: 'https://gym-management-system-teal.vercel.app',
	},
	{
		id: 4,
		title: 'HR Management Application',
		duration: 'Jun 2025 - Present',
		associatedWith: ' NA / Personal Project',
		technologies: ['React.js', 'Java Script', 'Apex Charts', 'Axios', 'ASP.NET Core', 'MySQL', 'Repository Pattern', 'Entity Framework Core (ORM)'],
		description:
			'An initial version of an HR management system developed to streamline employee information, department management, attendance, and leave tracking through a centralized platform.',
		features: [
			'Employee profile management',
			'Department management',
			'Attendance tracking',
			'Leave request management',
			'Role-based authentication',
		],
		challenges: [
			'Designing reusable modules for future expansion',
			'Creating a maintainable database structure',
			'Implementing secure authentication and authorization',
		],
		architecture:
			'Developed using ASP.NET Core APIs, React.js frontend, and MySQL with a modular architecture to support future feature enhancements.',
		images: [
			noImg,
			noImg,
			noImg,
		],
		github: 'https://github.com/lovely-sabeer/Hr_Management.git',
		liveDemo: '',
	},
	{
		id: 5,
		title: 'Femi E-Commerce Website',
		duration: 'Nov 2024 - Dec - 2025',
		associatedWith: 'NA / For Learn Firebase Auth',
		technologies: ['React.js', 'Tailwind CSS', 'Firebase Auth'],
		description:
			"A modern e-commerce website designed for women's hygiene products with responsive layouts, secure authentication, and Firebase- powered backend services.",
		features: [
			'Responsive product catalog',
			'Product search and filtering',
			'Firebase Authentication',
			'Cloud Firestore integration',
			'Modern responsive UI using Tailwind CSS',
		],
		challenges: [
			'Optimizing page performance and image loading',
			'Implementing Firebase security rules',
			'Building a responsive shopping experience across devices',
		],
		architecture:
			'Built using React.js with Tailwind CSS for the frontend and Firebase Authentication with Cloud Firestore for backend services and real-time data management.',
		images: [
			femiLanding,
			femiLogin,
			femiRegister,
			femiPurchase,
		],
		github: 'https://github.com/lovely-sabeer/FemiECommerce.git',
		liveDemo: 'femi-e-commerce.vercel.app',
	},
];
