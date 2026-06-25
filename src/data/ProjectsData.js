const ProjectsData = [
	{
		id: 1,
		title: 'Monitor Application',
		duration: 'Sep 2025 – May 2026',
		associatedWith: 'Professional Project',
		technologies: ['ASP.NET Core', 'React.js', 'MySQL', 'Windows Service'],
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
			'https://picsum.photos/seed/monitor1/800/500',
			'https://picsum.photos/seed/monitor2/800/500',
			'https://picsum.photos/seed/monitor3/800/500',
		],
		github: '',
		liveDemo: '',
	},
	{
		id: 2,
		title: 'FSM Application',
		duration: '2026',
		associatedWith: 'Professional Project',
		technologies: ['ASP.NET Core', 'React.js', 'MySQL'],
		description:
			'A field service management application developed to manage service requests, engineer assignments, task tracking, and customer interactions through a centralized web platform.',
		features: [
			'Service request management',
			'Task assignment and progress tracking',
			'Customer and engineer management',
			'Real-time status updates',
			'Reporting and dashboard modules',
		],
		challenges: [
			'Managing multiple workflow states efficiently',
			'Designing scalable APIs for field operations',
			'Maintaining consistent data across multiple modules',
		],
		architecture:
			'Developed using ASP.NET Core REST APIs with React.js frontend and MySQL database following a layered architecture for maintainability.',
		images: [
			'https://picsum.photos/seed/fsm1/800/500',
			'https://picsum.photos/seed/fsm2/800/500',
			'https://picsum.photos/seed/fsm3/800/500',
		],
		github: '',
		liveDemo: '',
	},
	{
		id: 3,
		title: 'Gym Management Application',
		duration: '2026',
		associatedWith: 'Professional Project',
		technologies: ['ASP.NET Core', 'React.js', 'MySQL'],
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
			'https://picsum.photos/seed/gym1/800/500',
			'https://picsum.photos/seed/gym2/800/500',
			'https://picsum.photos/seed/gym3/800/500',
		],
		github: '',
		liveDemo: '',
	},
	{
		id: 4,
		title: 'HR Management Application',
		duration: '2025',
		associatedWith: 'Professional Project',
		technologies: ['ASP.NET Core', 'React.js', 'MySQL'],
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
			'https://picsum.photos/seed/hr1/800/500',
			'https://picsum.photos/seed/hr2/800/500',
			'https://picsum.photos/seed/hr3/800/500',
		],
		github: '',
		liveDemo: '',
	},
	{
		id: 5,
		title: 'Femi E-Commerce Website',
		duration: '2024',
		associatedWith: 'Personal Project',
		technologies: ['React.js', 'Tailwind CSS', 'Firebase'],
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
		'https://picsum.photos/seed/femi1/800/500',
		'https://picsum.photos/seed/femi2/800/500',
		'https://picsum.photos/seed/femi3/800/500',
	],
	github: '',
	liveDemo: '',
	},
];

export default ProjectsData;