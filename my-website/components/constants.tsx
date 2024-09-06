export type ExperienceBoxProps = {
  imgSrc: string;
  alt: string;
  imgLink: string;
  company: string;
  jobTitle: string;
  techStack: string[];
  experience: string[];
};

export const JobExperiences: ExperienceBoxProps[] = [
  {
    imgSrc: "/images/govtech.png",
    alt: "GovTech DSAID Image",
    imgLink:
      "https://www.tech.gov.sg/our-capabilities/data-science-and-artificial-intelligence/",
    company: "GovTech",
    jobTitle: "Software Development Intern",
    techStack: [
      "Next.js",
      "TypeScript",
      "AWS Sagemaker",
      "AWS Lambda",
      "AWS Step Functions",
      "AWS Terraform",
      "Tailwind CSS",
      "shadcn-UI",
    ],
    experience: [
      "Designed and implemented modular front-end components with Next.js, Tailwind CSS and shadcn-ui, focusing on reusability with minimal reconfiguration",
      "Engineered back-end services with a serverless, microservices based architecture utilizing AWS Lambda and Step Functions, providing a scalable and cost-efficient backend server",
      "Automated provisioning of IaC with Terraform, maintaining reproducibility and scalability of environment and resources",
      "Optimised front-end load times with server-side rendering and background fetching using Next.js and TanStack Query",
    ],
  },
  {
    imgSrc: "/images/infineon.png",
    alt: "Infineon Image",
    imgLink: "https://www.infineon.com/",
    company: "Infineon",
    jobTitle: "Software Development Intern",
    techStack: [
      "ASP.NET Core",
      "C#",
      "HTML",
      "CSS",
      "JQuery",
      "KendoUI",
      "Microsoft SQL Server",
      "Quartz.NET",
      "NUnit",
      "Azure DevOps",
    ],
    experience: [
      "Developed 2 full-stack ASP.NET Core applications to serve thousands of internal and external users at low latency, utilizing C#, HTML, CSS, JQuery and KendoUI",
      "Established relational database along with stored procedures and triggers with Microsoft SQL Server",
      "Implemented Cron jobs with Quartz.NET to automate daily mass sending of thousands of emails",
      "Implemented CI CD workflows through NUnit testing framework with code coverage of more than 95%, and Azure DevOps pipeline for automated build and deployment of solution in less than 10 minutes",
      "Utilised Tableau to visualise key report findings for business stakeholders]",
    ],
  },
  {
    imgSrc: "/images/nus.jpg",
    alt: "NUS Image",
    imgLink: "https://www.comp.nus.edu.sg/",
    company: "NUS",
    jobTitle: "Teaching Assistant for Programming Methodology II (CS2030)",
    techStack: [
      "Java",
      "Object-Oriented Programming",
      "Functional Programming",
      "Discrete Event Simulator",
    ],
    experience: [
      "Planned a comprehensive lab curriculum to introduce students to Object-Oriented programming and Functional programming in Java",
      "Assessed projects of 20 students and provided timely and informative feedback",
      "Received stellar teaching feedback and rating of 4.5/5, nominated by 6 students for teaching awards",
    ],
  },
  {
    imgSrc: "/images/astar.jpeg",
    alt: "ASTAR Image",
    imgLink: "https://www.a-star.edu.sg/",
    company: "A*STAR",
    jobTitle: "Operations Research Intern",
    techStack: [
      "Python",
      "PyTorch",
      "Bayesian Optimization",
      "Genetic Algorithm",
      "Deep Neural Network",
      "Reinforcement Learning",
    ],
    experience: [
      "Built a multi-echelon inventory optimization model using Python and Object-Oriented programming concepts",
      "Applied Meta-heuristic and Statistical optimization methods, as well as Deep Neural Networks and Reinforcement Learning in PyTorch to optimize multi-echelon supply chain models, contributing to an improvement in profit of 20% over baseline models",
      "Performed literature review and produced a comprehensive 40-page report detailing results of research findings",
    ],
  },
];

export type ProjectBoxProps = {
  imgSrc: string;
  alt: string;
  imgLink: string;
  projectName: string;
  projectDescription: string;
  techStack: string[];
};

export const ProjectExperiences: ProjectBoxProps[] = [
  {
    imgSrc: "/images/WeightToGo.png",
    alt: "Backend image",
    imgLink: "github",
    projectName: "Weight To Go!",
    projectDescription:
      "Weight To Go automates extraction of waste bin weight from pictures of dashboards through an optimised Character Recognition Model",
    techStack: [
      "Python",
      "Flask",
      "Next.js",
      "TypeScript",
      "Nginx",
      "MySQL",
      "Docker",
      "OpenCV",
      "PyTesseract",
    ],
  },
  {
    imgSrc: "/images/NinjaVan.png",
    alt: "Backend image",
    imgLink: "https://github.com/mcbebu/Ninja-Turtles",
    projectName: "Ninja-Chat!",
    projectDescription:
      "Ninja Chat seeks to improve Ninja Van's existing chatbot through implementation of a reschuedule feature and integration of NLP model for sentiment analysis.",
    techStack: [
      "Python",
      "Flask",
      "Java",
      "JavaFX",
      "Spacey",
      "Natural Language Processing",
    ],
  },
  {
    imgSrc: "/images/Agrivision.png",
    alt: "Backend image",
    imgLink: "https://github.com/jovanwongzixi/AgriApp",
    projectName: "AgriVision",
    projectDescription:
      "AgriVision provides a platform for researchers to manage their smart grow box and interact with other researchers",
    techStack: [
      "Next.js",
      "TypeScript",
      "Firebase Storage",
      "PostgreSQL",
      "Vercel",
      "Docker",
      "HiveMQ",
    ],
  },
  {
    imgSrc: "/images/OfficeConnect.png",
    alt: "Image",
    imgLink: "https://ay2223s2-cs2103-f10-1.github.io/tp/",
    projectName: "OfficeConnect",
    projectDescription:
      "OfficeConnect is a task management tool tailored to meet the needs of managers working in corporate settings.",
    techStack: ["Java", "JavaFX", "FXML", "Junit", "PlantUML", "GitHub"],
  },
  {
    imgSrc: "/images/Duke.png",
    alt: "Image",
    imgLink: "https://github.com/Nicklelodeon/ip",
    projectName: "Duke",
    projectDescription:
      "Duke is a chatbot tailored to help users keep track of tasks.",
    techStack: ["Java", "JavaFX", "JUnit", "GitHub"],
  },
  {
    imgSrc: "/images/image.jpeg",
    alt: "Image",
    imgLink: "https://github.com/Nicklelodeon/ip",
    projectName: "My Website",
    projectDescription:
      "My Website showcases my internship experiences and personal projects throughout university",
    techStack: ["Next.js", "Typescript", "Chakra UI", "Tailwind CSS"],
  },
];

export type ClickProps = {
  scrollId: string;
  content: string;
  isMobile?: boolean;
};

export const Clicks = [
  {
    scrollId: "AboutMe",
    content: "About Me",
  },
  {
    scrollId: "Experiences",
    content: "Experiences",
  },
  {
    scrollId: "Projects",
    content: "Projects",
  },
];
