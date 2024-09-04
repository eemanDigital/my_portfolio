import screenshot1 from "./assets/screenshot1.png";
import screenshot2 from "./assets/screenshot2.png";
import screenshot3 from "./assets/screenshot3.png";
import screenshot4 from "./assets/screenshot4.png"; // Corrected duplicate import

export const projects = [
  {
    id: 1,
    title: "Case Management Application",
    shortDescription: "A Complete Case Management System for Law Firms",
    fullDescription: "Detailed project description...",
    image: screenshot2,
    carousel_images: [screenshot2, screenshot1, screenshot3],
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
    ],
    siteUrl: "https://example.com",
    codeUrl: "https://github.com/example/repo",
  },
  {
    id: 2,
    title: "TicTacToe App",
    shortDescription: "A simple TicTacToe game application.",
    fullDescription:
      "This project showcases a basic TicTacToe game developed using React and CSS.",
    image: screenshot4,
    carousel_images: [screenshot1, screenshot4],
    technologies: ["React", "CSS"],
    timeline: "July 2022 - August 2022",
    role: "Developer",
    challenges: [
      {
        title: "Game Logic Implementation",
        description:
          "Developing the game logic in a modular and reusable manner.",
        solution:
          "Used React hooks to manage game state and implemented an algorithm for game outcomes.",
      },
    ],
    outcomes: [
      "Enhanced understanding of game development with React",
      "Improved skills in state management and component reusability",
    ],
    siteUrl: "https://example.com/tictactoe",
    codeUrl: "https://github.com/example/tictactoe-repo",
  },
  // ... more projects
];
