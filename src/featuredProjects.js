import screenshot1 from "./assets/screenshot1.png";
import screenshot2 from "./assets/screenshot2.png";
import screenshot3 from "./assets/screenshot3.png";
import screenshot4 from "./assets/screenshot4.png"; // Corrected duplicate import

export const featuredProjects = [
  {
    id: 1,
    header: "Featured Project",
    title: "Case Management Application",
    shortDescription: "A Complete Case Management System for Law Firms",

    image: screenshot2,

    fullDescription:
      "CaseMaster App streamlines the process of managing legal cases, enabling law firms to efficiently handle case management, client and staff coordination, document handling, billing, and reporting, all within a single platform.",

    images: [screenshot2, screenshot1, screenshot3],
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
      "Nodemailer",
    ],
    timeline: "April 2024 - August 2024",
    role: "Full Stack Developer",
    challenges: [
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
        title: "Email Integration with Attachments",
        description:
          "Incorporating email functionalities with dynamic templates and attachment handling for case reports and invoices.",
        solution:
          "Implemented Nodemailer and Pug for generating dynamic email content, and configured the app to handle attachments seamlessly.",
      },
      // ... more challenges if needed
    ],
    outcomes: [
      "Streamlined case management processes, leading to a 35% reduction in administrative overhead.",
      "Enhanced user engagement with real-time notifications and dynamic reporting.",
      "Improved client satisfaction by providing a transparent and accessible client dashboard.",
    ],
    siteUrl: "https://case-master-app.example.com",
    codeUrl: "https://github.com/jalasem/case-master-app",
  },
];
