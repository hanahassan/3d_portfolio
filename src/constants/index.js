import { acr, blockchain, schulich, SSRT, techstart } from "../assets/images";
import {
    plane,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    c,
    clickhouse,
    cpp,
    csharp,
    dbeaver,
    gazebo,
    python,
    intelliJ,
    java,
    julia,
    jupyter,
    latex,
    linux,
    moveit,
    mysql,
    postgres,
    postman,
    riscv,
    ros2,
    unity,
    vscode,
    disaster
} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language"
    },
    {
        imageUrl: cpp,
        name: "Cpp",
        type: "Programming Language"
    },
    {
        imageUrl: csharp,
        name: "Csharp",
        type: "Programming Language"
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language"
    },
    {
        imageUrl: julia,
        name: "Julia",
        type: "Programming Language"
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language"
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control"
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend"
    },
    {
        imageUrl: riscv,
        name: "Riscv",
        type: "Data Format"
    },
    {
        imageUrl: clickhouse,
        name: "Clickhouse",
        type: "Database"
    },
    {
        imageUrl: dbeaver,
        name: "Dbeaver",
        type: "Database"
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database"
    },
    {
        imageUrl: postgres,
        name: "PostgreSQL",
        type: "Database"
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend"
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend"
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend"
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend"
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend"
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Engine"
    },
    {
        imageUrl: intelliJ,
        name: "IntelliJ",
        type: "IDE"
    },
    {
        imageUrl: vscode,
        name: "VS Code",
        type: "IDE"
    },
    {
        imageUrl: jupyter,
        name: "Jupyter",
        type: "Notebook"
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "Operating System"
    },
    {
        imageUrl: gazebo,
        name: "Gazebo",
        type: "Robotics"
    },
    {
        imageUrl: moveit,
        name: "MoveIt",
        type: "Robotics"
    },
    {
        imageUrl: ros2,
        name: "ROS 2",
        type: "Robotics"
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management"
    },
    {
        imageUrl: latex,
        name: "LaTeX",
        type: "Typesetting System"
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control"
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "API Tool"
    },
];

export const experiences = [
    {
        title: "Bounty Hunter",
        company_name: "UCalgary Blockchain Society",
        icon: blockchain,
        iconBg: "#DE716B",
        date: "June 2024 – Present",
        points: [
            "Researching on and development of finance, Fintech, Blockchain & AI.",
            "Participating in hackathons and case competitions to win prizes and recognition.",
            "Collaborating with companies for research and development opportunities.",
            "Writing technical articles and blogs on emerging technologies and innovative companies.",
        ],
    },
    {
        title: "Undergraduate Decentralized Finance Research Assistant",
        company_name: "Schulich School of Engineering",
        icon: schulich,
        iconBg: "#a2d2ff",
        date: "Dec 2023 – Present",
        points: [
            "Leveraging data from the Bitcoin node, utilizing RPC API to access and extract NFT storage mechanisms, subsequently storing it in a Postgres SQL database using multi-threading in Julia programming language, and improving daily insertion speed by 75%.",
            "Conducted in-depth user classification and activity analysis of Ethereum Blockchain, leveraging database queries and statistical measures to discern patterns in gas token usage and transaction behavior.",
            "Led cost analysis initiatives, employing miner loss calculations and user benefit assessments to optimize gas token economics and enhance market efficiency.",
            "Investigated the economic value of gas tokens through comprehensive market analysis, examining their role in complete markets and crafting a compelling narrative around their significance and potential impact.",
        ],
    },
    {
        title: "Controls Integration Developer",
        company_name: "Schulich Space Rover Team",
        icon: SSRT,
        iconBg: "#FF9354",
        date: "Oct 2023 – Present",
        points: [
            "Applied inverse kinematics to translate desired end-effector positions into precise joint angles, optimizing the control of the robotic arm for efficient task execution with 83% improved accuracy.",
            "Development and integration of advanced control systems for a space rover project, ensuring precise navigation and operational functionality in simulated extraterrestrial environments.",
            "Using ROS2 functionalities and SLAM algorithms, to create robust robotic systems in Python and utilizing Gazebo, Rviz and MoveIt to craft immersive robot simulations.",
        ],
    },
    {
        title: "Robocup Software Developer",
        company_name: "ACRobotics",
        icon: acr,
        iconBg: "#FFD383",
        date: "Oct 2023 – June 2024",
        points: [
            "Developing autonomous multi-robot systems, enhancing real-time data processing and algorithm optimization.",
            "Improving wireless communication and ensuring adherence to strategic gameplay and league guidelines with data modeling, validation, and processing.",
            "Engaged in thorough research of neural network architectures, training algorithms, and optimization techniques.",
        ],
    },
    {
        title: "TechStart Software Developer",
        company_name: "TechStart",
        icon: techstart,
        iconBg: "#b7e4c7",
        date: "Oct 2022 – May 2023",
        points: [
            "Developing software using Unity with C# to create a side-scrolling interactive game with a penguin attempting to avoid obstacles.",
            "Working in a cross-functional team using GitHub while creating multiple games to combine into one Chrome extension.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/hanahassan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/hanahassan0',
    }
];

export const projects = [
    {
        iconUrl: disaster,
        theme: 'btn-back-red',
        name: 'Disaster Relief Service',
        description: '• Designed and implemented a disaster relief management system in Java, including modules for managing disaster victims, relief workers, and medical records.<br />• Utilized object-oriented programming principles and relational database integration to ensure efficient data handling and user-friendly interface.<br />• Created and optimized an SQL database to enhance data retrieval and storage efficiency.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: plane,
        theme: 'btn-back-blue',
        name: 'Airline Information Management System',
        description: '• Developed a robust airline reservation system using advanced C++ features such as polymorphism and inheritance, while applying object-oriented programming principles to design modular classes enhancing code maintainability and scalability.<br />• Implemented file handling techniques for data persistence, enabling seamless storage and retrieval of information.lining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-pink',
        name: 'Google Chrome Game Extension',
        description: '• Developing software using Unity with C# to create a side-scrolling interactive game with a penguin attempting to avoid obstacles.<br />• Working in a cross-functional team using GitHub while creating multiple games to combine into one Chrome extension.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
];