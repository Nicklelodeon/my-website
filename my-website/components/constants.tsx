
export type ExperienceBoxProps = {
    imgSrc: string;
    alt: string;
    imgLink: string;
    company: string;
    jobTitle: string;
    techStack: string[];
    experience: string[];
}


export const JobExperiences: ExperienceBoxProps[] = [
    {
        imgSrc: "/images/govtech.png",
        alt: "GovTech DSAID Image",
        imgLink: "https://www.tech.gov.sg/our-capabilities/data-science-and-artificial-intelligence/",
        company: "GovTech",
        jobTitle: "Software Development Intern",
        techStack: [
            "Next.js",  "TypeScript", "AWS Sagemaker", "AWS Lambda", "AWS Step Functions", "AWS Terraform", "Tailwind CSS", "shadcn-UI"
        ],
        experience: [
            "worked at govtech", "ate there"
        ]
    },
    {
        imgSrc: "/images/infineon.png",
        alt: "Infineon Image",
        imgLink: "https://www.infineon.com/",
        company: "Infineon",
        jobTitle: "Software Development Intern",
        techStack: [
            "ASP.NET Core", "C#", "HTML", "CSS", "JQuery", "KendoUI", "Microsoft SQL Server", "Quartz.NET", "NUnit", "Azure DevOps"
        ],
        experience: [
            "worked at govtech", "ate there"
        ]
    },
    {
        imgSrc: "/images/nus.jpg",
        alt: "NUS Image",
        imgLink: "https://www.comp.nus.edu.sg/",
        company: "NUS",
        jobTitle: "Teaching Assistant for Programming Methodology II (CS2030)",
        techStack: [
            "Java",  "Object-Oriented Programming", "Functional Programming", "Discrete Event Simulator"
        ],
        experience: [
            "worked at govtech", "ate there"
        ]
    },
    {
        imgSrc: "/images/ASTAR.png",
        alt: "ASTAR Image",
        imgLink: "https://www.a-star.edu.sg/",
        company: "A*STAR",
        jobTitle: "Operations Research Intern",
        techStack: [
            "Python", "PyTorch", "Bayesian Optimization", "Genetic Algorithm", "Deep Neural Network", "Reinforcement Learning"
        ],
        experience: [
            "worked at govtech", "ate there"
        ]
    }
]

export type ProjectBoxProps = {
    imgSrc: string;
    alt: string;
    imgLink: string;
    projectName: string;
    projectDescription: string;
    techStack: string[];

}

export const ProjectExperiences: ProjectBoxProps[] = [
    {
        imgSrc: "",
        alt: "Backend image",
        imgLink: "github",
        projectName: "Weight To Go!",
        projectDescription: "Weight To Go automates extraction of waste bin weight from picture of dashboards through an optimised Character Recognition Model",
        techStack: [
            "Python", "Flask", "Next.js", "TypeScript", "Nginx", "MySQL", "Docker", "OpenCV", "PyTesseract"
        ]
    }, 
    {
        imgSrc: "",
        alt: "Backend image",
        imgLink: "github",
        projectName: "AgriVision",
        projectDescription: "AgriVision provides a platform for researchers to manage their smart grow box and interact with other researchers",
        techStack: [
            "Next.js", "TypeScript", "Firebase Storage", "PostgreSQL", "Vercel", "Docker", "HiveMQ"
        ]
    },
    {
        imgSrc: "", 
        alt: "Image",
        imgLink: "https://ay2223s2-cs2103-f10-1.github.io/tp/",
        projectName: "OfficeConnect",
        projectDescription: "OfficeConnect is a task management tool tailored to meet the needs of managers working in corporate settings.",
        techStack: [
            "Java", "JavaFX", "FXML", "Junit", "PlantUML", "GitHub"
        ]
    },
    {
        imgSrc: "", 
        alt: "Image",
        imgLink: "https://github.com/Nicklelodeon/ip",
        projectName: "Duke",
        projectDescription: "Duke is a chatbot tailored to help users keep track of tasks.",
        techStack: [
            "Java", "JavaFX", "JUnit", "GitHub"
        ]
    },
]

export type ClickProps = {
    scrollId: string;
    content: string;
  };


export const Clicks = [
    {
        scrollId: "Home",
        content: "Home"
    }, 
    {
        scrollId: "AboutMe",
        content: "About Me"
    }, 
    {
        scrollId: "Experiences",
        content: "Experiences"
    }, 
    {
        scrollId: "Projects",
        content: "Projects"
    }, 
]





