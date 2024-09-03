import screenshot1 from "./assets/screenshot1.png";
import screenshot2 from "./assets/screenshot2.png";
import screenshot3 from "./assets/screenshot3.png";
import screenshot4 from "./assets/screenshot3.png";

export const projects = [
  {
    id: 1,
    title: "Case Management Application",
    shortDescription: "A Complete Case Management System for Law Firms",
    fullDescription: "Detailed project description...",
    image: screenshot2,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Ant Design",
      "Rechart",
    ],
    siteUrl: "https://example.com",
    codeUrl: "https://github.com/example/repo",
  },
  {
    id: 2,
    title: "TicTacToe App",
    shortDescription: "A game",
    fullDescription: "Detailed project description...",
    image: screenshot4,
    technologies: ["React", "CSS"],
    siteUrl: "https://example.com",
    codeUrl: "https://github.com/example/repo",
  },
  // ... more projects
];

// DETAIL INFO

export const projectDetail = {
  id: 1,
  title: "Case Management Application",
  shortDescription: "A comprehensive solution for legal case management",
  fullDescription:
    "This application streamlines the process of managing legal cases...",
  images: [screenshot1, screenshot2, screenshot3],
  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Ant Design",
    "Rechart",
  ],
  timeline: "January 2023 - June 2023",
  role: "Lead Frontend Developer",
  challenges: [
    {
      title: "Complex Data Relationships",
      description:
        "The application required handling intricate relationships between cases, clients, and documents.",
      solution:
        "Implemented a graph database structure using MongoDB to efficiently manage and query complex relationships.",
    },
    // ... more challenges
  ],
  outcomes: [
    "Reduced case processing time by 40%",
    "Improved data accuracy by 60%",
    "Increased user satisfaction score from 6.5 to 8.9",
    // ... more outcomes
  ],
  siteUrl: "https://example.com",
  codeUrl: "https://github.com/example/repo",
};
