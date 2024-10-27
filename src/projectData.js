import screenshot2 from "./assets/screenshot2.png";
import tictactoeImg from "./assets/tictactoe.png";
import eemanTechImg from "./assets/eemanTech.png";
import sc1 from "./assets/CM1.png";
import sc2 from "./assets/CM2.png";
import sc3 from "./assets/CM3.png";
import sc4 from "./assets/CM4.png";
import sc5 from "./assets/CM5.png";
import bw1 from "./assets/bw1.png";
import bw2 from "./assets/bw2.png";
import bw3 from "./assets/bw3.png";
import bw4 from "./assets/bw4.png";
import bw5 from "./assets/bw5.png";
import bw6 from "./assets/bw6.png";

export const project_data = [
  {
    id: 1,
    header: "Featured Project",
    title: "Case Management Application",
    shortDescription: "A Complete Case Management System for Law Firms",
    image: sc1,
    screenshots: [sc1, sc2, sc3, sc4, sc5],

    fullDescription:
      "CaseMaster App is a comprehensive case management solution tailored for law firms to efficiently manage legal cases and administrative tasks. It offers a unified platform to handle case tracking, client and staff coordination, document management, billing, search data search functionality, and reporting. The application integrates email notifications, ensuring stakeholders are promptly informed about case updates. With features like Role-Based Access Control (RBAC), calendar event management, and dynamic reporting, CaseMaster not only enhances productivity but also improves transparency with its client-facing dashboard. It is secure, responsive design ensures ease of use across devices, empowering legal teams to streamline their workflows.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Ant Design",
      "Recharts",
      "Redux",
      "Pug",
      "handlebars",
      "Nodemailer",
    ],
    timeline: "March 2024 - September 2024",
    role: "Sole Developer",

    challenges: [
      {
        title: "Complex Form Management",
        description:
          "Managing intricate forms with multiple nested fields and dynamic inputs was crucial for handling legal documentation and client interactions efficiently.",
        solution:
          "Leveraged Ant Design's form components to implement robust form management solutions. This approach simplified the creation and validation of dynamic and complex forms, significantly reducing development time and improving user experience.",
      },
      {
        title: "Streamlining Data for Chart Visualization",
        description:
          "Required summarizing key metrics such as total payments received within a month, case categorization, and generating case cause lists for specific periods.",
        solution:
          "Used MongoDB aggregation pipelines to efficiently calculate totals and categorize data. Implemented Recharts for dynamic data visualization, providing users with clear, real-time insights into their legal cases and payments.",
      },
      {
        title: "Role-Based Access Control (RBAC) Implementation",
        description:
          "Ensuring secure data access by implementing RBAC, which required defining various user roles with specific access permissions.",
        solution:
          "Developed a flexible RBAC system integrated with the authentication module to manage user permissions efficiently.",
      },
      {
        title: "Data Filtering and Search Functionality",
        description:
          "Needed to implement an efficient filtering and search mechanism for large datasets, including cases and client information.",
        solution:
          "Utilized MongoDB's aggregation framework and React state management to create responsive and accurate search and filter features.",
      },
      {
        title: "Automated Email Integration",
        description:
          "Incorporating email functionalities with dynamic template to allow users send automated notification within and outside office outside",
        solution:
          "Implemented Nodemailer and handlebars for generating dynamic email content",
      },
    ],
    outcomes: [
      "Streamlined case management processes, leading to a 35% reduction in administrative overhead.",
      "Enhanced user engagement with real-time notifications and dynamic reporting.",
      "Improved client satisfaction by providing a transparent and accessible client dashboard.",
    ],
    siteUrl: "https://youtu.be/VspUllQbS-c?si=0Gcb7ObrXhUvRSVr",
    codeUrl: "https://github.com/eemanDigital/case-master-app",
  },

  {
    id: 2,
    header: "Full-Stack Blog Platform",
    title: "Business Registration Services Website with a Blog System",
    shortDescription:
      "A comprehensive full-stack web application featuring a blog system with CRUD operations, full-text search, and comment functionality",
    image: bw1,
    screenshots: [bw1, bw2, bw3, bw4, bw5, bw6],

    fullDescription:
      "A sophisticated full-stack web application built on the MERN stack, featuring a blog system alongside business registration services. The platform incorporates features such as commenting with nested replies, full-text search capabilities, and an admin dashboard. The blog system is designed to enhance content management experience for both administrators and users while ensuring robust content organization and accessibility.",

    technologies: ["React", "Node.js", "Express", "MongoDB", "SCSS"],

    timeline: "November 2023 - October, 2024",
    role: "Sole Developer",

    features: [
      "Authentication & Role-based Access Control",
      "Comment System with Nested Replies",
      "Full-text Search with Filtering Options",
      "Rich Text Editor for Content Creation",
      "Image Upload and Management System",
      "Social Sharing Integration",
      "Related Posts Recommendation System",
      "Responsive Design with Infinite Scroll",
      "Tag and Category Management",
      "Admin Dashboard for Content Management",
    ],

    challenges: [
      {
        title: "Authentication System",
        description:
          "Implementing a secure authentication system with role-based access control (admin, author, reader) while maintaining a smooth user experience.",
        solution:
          "Implemented JWT authentication with HTTP-only cookies for secure token storage. Created middleware for role-based access control to protect admin routes and ensure proper authorization for different user actions.",
      },
      {
        title: "Comment System Implementation",
        description:
          "Building a comment system with nested replies while ensuring proper data organization and user interaction handling.",
        solution:
          "Implemented a nested comment structure using the Materialized Path pattern in MongoDB. Created optimized queries for fetching comment threads and implemented UI components for intuitive comment interactions and nested reply displays.",
      },
      {
        title: "Search Optimization",
        description:
          "Implementing efficient full-text search across blog posts with filtering capabilities while maintaining performance with growing content.",
        solution:
          "Created compound text indexes in MongoDB for efficient search. Implemented debouncing for search input and pagination for results. Added filters using MongoDB's aggregate pipeline for category and date-based filtering.",
      },
      {
        title: "Image Management System",
        description:
          "Designing a scalable system for handling image uploads and storage while optimizing for performance and cost.",
        solution:
          "Integrated AWS S3 for image storage with pre-signed URLs for secure uploads. Implemented image optimization using Sharp.js for resizing and compression. Added lazy loading with blur placeholders for better user experience.",
      },
      {
        title: "Performance Optimization",
        description:
          "Managing performance with increasing content and user interactions, especially with features like infinite scroll and image loading.",
        solution:
          "Implemented pagination with infinite scroll using Intersection Observer. Optimized database queries with proper indexing. Used React.lazy for component splitting to reduce initial bundle size.",
      },
      {
        title: "Content Management Workflow",
        description:
          "Creating an intuitive workflow for content creation and management while handling rich text content and media.",
        solution:
          "Integrated TipTap rich text editor with custom extensions for image handling. Implemented auto-save functionality using debounce. Added preview mode for posts before publication.",
      },
      {
        title: "SEO and Social Sharing",
        description:
          "Implementing SEO features and social sharing capabilities while ensuring proper meta tags and content structure.",
        solution:
          "Implemented dynamic meta tags using React Helmet. Added structured data for blog posts using JSON-LD. Integrated Open Graph tags for better social sharing previews. Implemented proper heading hierarchy for better SEO.",
      },
      {
        title: "Mobile Responsiveness",
        description:
          "Ensuring complex features like rich text editing and infinite scroll worked seamlessly across all devices.",
        solution:
          "Used CSS Grid and Flexbox for responsive layouts. Implemented touch-friendly interfaces for mobile users. Created device-specific optimizations for the rich text editor. Used Intersection Observer for efficient infinite scroll on mobile devices.",
      },
    ],

    lessons: [
      "The importance of proper architecture planning for scalable features",
      "Effective strategies for handling comment system data structure",
      "Balancing feature richness with performance optimization",
      "Best practices for implementing secure user authentication",
    ],

    siteUrl: "https://eemantech-app.vercel.app",
    codeUrl: "https://github.com/eemanDigital/modern_business_app",

    futureEnhancements: [
      "Analytics Dashboard Integration",
      "Email Notification System",
      "Real-time Chat Features",
      "Enhanced Admin Dashboard with Analytics",
      "Multi-language Support",
    ],
  },
  {
    id: 3,
    title: "TicTacToe App",
    header: "Other Project",
    shortDescription: "A simple TicTacToe game application.",
    fullDescription:
      "This project showcases a basic TicTacToe game developed using React and CSS. The application features a dynamic game board, player management, and a game log, with a modern UI designed using CSS.",
    image: tictactoeImg,

    technologies: ["React", "CSS"],
    timeline: "July 2022 - August 2022",
    role: "Sole Developer",
    challenges: [
      {
        title: "Game Logic Implementation",
        description:
          "Developing the game logic in a modular and reusable manner was crucial to ensure smooth gameplay.",
        solution:
          "Used React hooks to manage game state and implemented an algorithm for determining game outcomes, including identifying a winner or a draw scenario.",
      },
      {
        title: "Dynamic UI Updates",
        description:
          "Ensuring the UI dynamically updates to reflect game state changes, including player moves and active player highlighting.",
        solution:
          "Utilized derived state to reduce the need for excessive state management, allowing the interface to respond swiftly to user actions.",
      },
    ],
    outcomes: [
      "Enhanced understanding of game development with React.",
      "Improved skills in state management and component reusability.",
      "Gained proficiency in designing responsive and user-friendly interfaces using CSS.",
    ],
    siteUrl: "https://tic-tac-toe-app-mu-lemon.vercel.app/", // Replace with the actual live demo URL
    codeUrl: "https://github.com/eemanDigital/tic-tac-toe_app", // Replace with the actual GitHub repository URL
  },
];
