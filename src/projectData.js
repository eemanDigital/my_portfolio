import screenshot2 from "./assets/screenshot2.png";
import tictactoeImg from "./assets/tictactoe.png";

export const project_data = [
  {
    id: 1,
    header: "Featured Project",
    title: "Case Management Application",
    shortDescription: "A Complete Case Management System for Law Firms",
    image: screenshot2,

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
      "moment",
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
    siteUrl: "https://case-master-app.vercel.app/",
    codeUrl: "https://github.com/eemanDigital/case-master-app",
  },

  {
    id: 2,
    title: "TicTacToe App",
    header: "Other Project",
    shortDescription: "A simple TicTacToe game application.",
    fullDescription:
      "This project showcases a basic TicTacToe game developed using React and CSS. The application features a dynamic game board, player management, and a game log, with a modern UI designed using CSS.",
    image: tictactoeImg, // Ensure this is replaced with the correct image path or variable
    carousel_images: ["screenshot1", "screenshot4"], // Replace with appropriate paths to your carousel images
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
