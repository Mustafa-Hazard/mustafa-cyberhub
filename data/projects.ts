export type Project = {
    id: string
    title: string
    shortTitle: string
    desc: string
    longDesc: string
    image: string
    stack: string[]
    stackColors: ('lime' | 'blue' | 'cyan' | 'orange' | 'white')[]
    github?: string
    live?: string
    tags: ('featured' | 'fullstack' | 'security' | 'web' | 'systems' | 'ml')[]
    featured?: boolean
    date: string
}

export const projects: Project[] = [
    {
        id: 'protocol-zero',
        title: 'Protocol-Zero — Game Discovery Platform',
        shortTitle: 'Protocol-Zero',
        desc: 'Full-stack game discovery platform with real-time search, multi-criteria filtering, and decoupled architecture.',
        longDesc:
            'Architected a decoupled full-stack platform with ASP.NET Core 9 REST API (Controller–Service–Repository pattern) and React 18 + Redux Toolkit, delivering real-time search with multi-criteria filtering. Optimized MongoDB query performance via pagination and indexing, and standardized API responses using ApiResponseDto<T> with global middleware.',
        image: '/images/protocol_zero.png',
        stack: ['React 18', 'TypeScript', 'Redux Toolkit', 'ASP.NET Core 9', 'MongoDB'],
        stackColors: ['lime', 'lime', 'cyan', 'white', 'white'],
        github: 'https://github.com/Mustafa-Hazard/Protocol-Zero',
        tags: ['featured', 'fullstack'],
        date: 'Apr – May 2026',
    },
    {
        id: 'steam-sentiment',
        title: 'Steam Game Review Sentiment Analyzer',
        shortTitle: 'Steam Sentiment',
        desc: 'NLP web app classifying 6.4M Steam reviews using Multinomial Naive Bayes. 77.86% accuracy, Dockerized.',
        longDesc:
            'Built a full-stack NLP web app classifying Steam reviews using Multinomial Naive Bayes trained on 400,000 balanced samples from a 6.4M-row dataset, achieving 77.86% accuracy with strong recall across both classes. Implemented full CRUD operations with MongoDB, a RESTful JSON API, and containerized the stack with Docker Compose for one-command deployment.',
        image: '/images/steam_review.png',
        stack: ['Flask', 'MongoDB', 'Naive Bayes', 'TF-IDF', 'scikit-learn', 'Docker'],
        stackColors: ['lime', 'white', 'cyan', 'cyan', 'white', 'orange'],
        github: 'https://github.com/Mustafa-Hazard/steam-sentiment-analyzer',
        tags: ['featured', 'fullstack', 'ml'],
        date: 'May 2026',
    },
    {
        id: 'spamshield',
        title: 'SpamShield AI — Email Spam Detection',
        shortTitle: 'SpamShield AI',
        desc: 'AI-powered spam detection using SVM + TF-IDF trained on 34K emails. Real-time classification with confidence scores.',
        longDesc:
            'AI-powered spam email detection system using NLP, TF-IDF, and SVM machine learning. Features real-time spam detection with confidence score, full CRUD for prediction records, search & filter email history, stats dashboard with line chart showing detections over time. Trained on 34,217 emails from Enron and SpamAssassin datasets. Cybersecurity-themed UI with orange accent.',
        image: '/images/SpamShield_Ai.png',
        stack: ['Python', 'Flask', 'SVM', 'TF-IDF', 'scikit-learn', 'NLP'],
        stackColors: ['lime', 'white', 'cyan', 'cyan', 'white', 'orange'],
        github: 'https://github.com/Mustafa-Hazard/spamshield-ai',
        tags: ['featured', 'ml', 'security'],
        date: 'May 2026',
    },
    {
        id: 'aeronexa',
        title: 'AeroNexa — Airline Management System',
        shortTitle: 'AeroNexa',
        desc: 'Full-stack airline reservation with admin & passenger portals, PDF e-tickets, and revenue analytics.',
        longDesc:
            'Full-stack airline reservation platform with 2 distinct role-based portals (Admin and Passenger). Implements secure session-based authentication using enterprise MVC design patterns. Core workflows include flight search, seat availability management, booking lifecycle processing, automated PDF e-ticket generation, and revenue analytics using optimised stored procedures. Tracked via Jira for sprint planning and bug management throughout development.',
        image: '/images/AeroNexa.png',
        stack: ['ASP.NET Core 8', 'EF Core', 'MS SQL Server', 'C#', 'MVC', 'Jira'],
        stackColors: ['lime', 'white', 'white', 'cyan', 'white', 'blue'],
        github: 'https://github.com/Mustafa-Hazard/AirlineTicketingSystem',
        tags: ['featured', 'fullstack', 'security'],
        date: 'Oct 2025 – Jan 2026',
    },
    {
        id: 'attendance',
        title: 'Attendance Management System',
        shortTitle: 'Attendance Tracker',
        desc: 'Multi-role attendance platform with bcrypt auth, Cypress E2E tests, and Jira-tracked bug lifecycle.',
        longDesc:
            'Multi-role attendance platform supporting 3 access tiers — Admin, Faculty, and Student. Features bcrypt password hashing, server-side session management, and input validation. End-to-end tests written in Cypress covering critical auth and attendance-marking flows. Bug lifecycle managed via Jira during iterative development.',
        image: '/images/Attendance.png',
        stack: ['Node.js', 'Express.js', 'PostgreSQL', 'EJS', 'bcrypt', 'Cypress', 'Jira'],
        stackColors: ['lime', 'white', 'white', 'white', 'white', 'cyan', 'blue'],
        github: 'https://github.com/Mustafa-Hazard/Attendance',
        tags: ['featured', 'fullstack', 'security'],
        date: 'Oct – Dec 2025',
    },
    {
        id: 'cgpa-tracker',
        title: 'Student CGPA & Probation Tracker',
        shortTitle: 'CGPA Tracker',
        desc: 'Live GPA/CGPA calculator with 30% query optimization, probation auto-flagging, and Firebase deploy.',
        longDesc:
            'Full-stack web app computing live GPA and CGPA values and flagging students on academic probation across multiple departments via RESTful APIs. Optimised PostgreSQL queries delivered a 30% performance improvement on large student datasets. Deployed on Firebase Hosting with NeonDB as the managed Postgres backend.',
        image: '/images/Student.png',
        stack: ['Node.js', 'Express', 'NeonDB', 'Firebase Hosting', 'Alpine.js', 'PostgreSQL'],
        stackColors: ['lime', 'white', 'white', 'orange', 'white', 'white'],
        github: 'https://github.com/Mustafa-Hazard/Student-CGPA-Probation-Tracker',
        tags: ['fullstack', 'web'],
        date: 'Apr – Jun 2025',
    },
    {
        id: 'car-rental',
        title: 'Car Rental Management System',
        shortTitle: 'Car Rental',
        desc: 'Console-based C program with file I/O, struct-based data management, and rental history reporting.',
        longDesc:
            'A systems-level car rental management program written in C. Implements file I/O for persistent data storage, two core structs (Car, RentalRecord), and array-based record management. Features include adding cars, renting, generating rental history reports, and a menu-driven interface with a do-while loop and switch statement. Demonstrates low-level systems programming and data structure fundamentals.',
        image: '/images/Car_Rental.png',
        stack: ['C', 'File I/O', 'Structs', 'Systems Programming'],
        stackColors: ['lime', 'white', 'white', 'orange'],
        tags: ['systems'],
        date: '2024',
    },
    {
        id: 'numerical-calculator',
        title: 'Numerical Computing Calculator',
        shortTitle: 'Numerical Calculator',
        desc: 'Browser-based root-finding tool with configurable tolerance, iteration counts, and live deploy on Vercel.',
        longDesc:
            'A browser-based numerical methods calculator for root-finding algorithms. Supports adjustable bounds, tolerance levels, and iteration counts. Deployed on Vercel.',
        image: '/images/Project_NC.png',
        stack: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
        stackColors: ['lime', 'white', 'white', 'orange'],
        live: 'https://numericalcomputingcalculator.vercel.app/',
        tags: ['web'],
        date: '2024',
    },
    {
        id: 'traffic-light',
        title: 'Traffic Light System (DLD)',
        shortTitle: 'Traffic Light DLD',
        desc: 'Digital logic traffic-light simulation using combinational and sequential circuits with 7-segment display.',
        longDesc:
            'A digital logic design team project for a university competition. Simulates a full traffic-light sequence using combinational and sequential logic circuits with 7-segment display output.',
        image: '/images/DLD.jpg',
        stack: ['Digital Logic Design', 'Sequential Circuits', '7-Segment Display'],
        stackColors: ['lime', 'white', 'white'],
        tags: ['systems'],
        date: '2023',
    },
]

export const filterTabs = [
    { label: 'All', value: 'all' },
    { label: 'Featured', value: 'featured' },
    { label: 'Full-Stack', value: 'fullstack' },
    { label: 'ML / AI', value: 'ml' },
    { label: 'Security', value: 'security' },
    { label: 'Systems', value: 'systems' },
    { label: 'Web', value: 'web' },
]
