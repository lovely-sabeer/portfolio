const ProjectsData = [
	{
		id: 1,
		title: 'QR-Based Student Attendance System',
		duration: 'Jan 2024 – Apr 2024',
		associatedWith: 'Final Year Project',
		technologies: ['React Native', 'Spring Boot', 'MySQL'],
		description:
			'A QR-code-based attendance management system where staff scan student QR codes to mark attendance automatically. The system includes role-based authentication, detailed attendance reports, semester management, and automated absence tracking with notification capabilities.',
		features: [
			'QR code generation and scanning for instant attendance marking',
			'Role-based authentication for staff, students, and administrators',
			'Comprehensive attendance reports with filtering and export options',
			'Complete student and semester management modules',
			'Automated absence tracking with threshold-based alerts',
		],
		challenges: [
			'Ensuring reliable QR code scanning across varying lighting conditions and device cameras',
			'Designing an efficient database schema to handle attendance records at scale',
			'Implementing real-time sync between mobile scanning and backend processing',
		],
		architecture:
			'Built with React Native for cross-platform mobile access, Spring Boot REST APIs for business logic, and MySQL for relational data storage. JWT-based authentication secures all endpoints.',
		images: [
			'https://picsum.photos/seed/qrsystem1/800/500',
			'https://picsum.photos/seed/qrsystem2/800/500',
			'https://picsum.photos/seed/qrsystem3/800/500',
		],
		github: 'https://github.com',
		liveDemo: '',
	},
	{
		id: 2,
		title: 'Inventory Management System',
		duration: '2024',
		associatedWith: 'Personal Project',
		technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
		description:
			'A full-featured inventory management platform designed for product tracking, stock monitoring, and streamlining business operations. Provides real-time dashboards and analytics for informed decision-making.',
		features: [
			'Complete product management with CRUD operations',
			'Real-time stock tracking with low-stock alerts',
			'Interactive dashboard with key business metrics',
			'Detailed reports with filtering, sorting, and export',
			'Category and supplier management',
		],
		challenges: [
			'Building a responsive dashboard that handles large datasets efficiently',
			'Implementing real-time stock level updates across multiple sessions',
			'Designing intuitive filtering and search for large product catalogs',
		],
		architecture:
			'MERN stack architecture with React.js frontend, Express.js/Node.js API layer, and MongoDB for flexible document-based storage. Uses aggregation pipelines for complex reporting queries.',
		images: [
			'https://picsum.photos/seed/inventory1/800/500',
			'https://picsum.photos/seed/inventory2/800/500',
			'https://picsum.photos/seed/inventory3/800/500',
		],
		github: 'https://github.com',
		liveDemo: '',
	},
	{
		id: 3,
		title: 'Todo Management Application',
		duration: '2024',
		associatedWith: 'Personal Project',
		technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
		description:
			'A productivity-focused task management application with user authentication, categorization, and full CRUD operations. Designed with a clean interface for efficient daily task organization.',
		features: [
			'Secure user authentication with JWT tokens',
			'Full task CRUD with due dates and priority levels',
			'Category-based task organization',
			'Task filtering, searching, and sorting capabilities',
			'Responsive design for mobile and desktop use',
		],
		challenges: [
			'Implementing secure password hashing and token-based authentication flow',
			'Building an intuitive drag-and-drop task reordering interface',
			'Handling concurrent task updates and data consistency',
		],
		architecture:
			'React.js SPA with React Router for navigation, Express.js REST API with middleware-based auth, MongoDB with Mongoose ODM for data modeling and validation.',
		images: [
			'https://picsum.photos/seed/todoapp1/800/500',
			'https://picsum.photos/seed/todoapp2/800/500',
			'https://picsum.photos/seed/todoapp3/800/500',
		],
		github: 'https://github.com',
		liveDemo: '',
	},
	{
		id: 4,
		title: 'Femi E-Commerce Website',
		duration: '2024',
		associatedWith: 'Personal Project',
		technologies: ['React.js', 'Tailwind CSS', 'Firebase'],
		description:
			'A modern e-commerce platform featuring responsive product showcase, Firebase-powered backend services, and a polished user interface designed for optimal shopping experience.',
		features: [
			'Responsive product catalog with grid and list views',
			'Product detail pages with image galleries',
			'Firebase integration for authentication and data storage',
			'Modern, accessible UI with smooth transitions',
			'Search and category-based product filtering',
		],
		challenges: [
			'Implementing Firebase security rules for data protection',
			'Optimizing image loading for a smooth browsing experience',
			'Creating a consistent responsive layout across all breakpoints',
		],
		architecture:
			'React.js with Tailwind CSS for rapid UI development, Firebase Authentication for user management, and Cloud Firestore for real-time data storage and synchronization.',
		images: [
			'https://picsum.photos/seed/ecommerce1/800/500',
			'https://picsum.photos/seed/ecommerce2/800/500',
			'https://picsum.photos/seed/ecommerce3/800/500',
		],
		github: 'https://github.com',
		liveDemo: '',
	},
];

export default ProjectsData;