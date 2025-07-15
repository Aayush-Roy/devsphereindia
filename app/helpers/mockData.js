export const stats = {
  queriesSolved: 350,
  collabsFormed: 50,
  totalMembers: 1200
};

export const featuredPosts = [
  {
    id: 1,
    title: "Building a React Component Library from Scratch",
    content: "Just finished creating a comprehensive component library with TypeScript and Storybook. Looking for feedback and collaborators!",
    author: "Sarah Chen",
    authorRole: "Frontend Developer",
    tags: ["#showcase", "#react", "#typescript"],
    likes: 45,
    comments: 12,
    timestamp: "2 hours ago",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    title: "Need help with Docker deployment",
    content: "I'm trying to deploy my Node.js app using Docker but running into some issues with environment variables. Any Docker experts here?",
    author: "Mike Rodriguez",
    authorRole: "Backend Developer",
    tags: ["#help", "#docker", "#deployment"],
    likes: 23,
    comments: 8,
    timestamp: "4 hours ago",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

export const announcements = [
  {
    id: 1,
    title: "React Advanced Workshop - Feb 15th",
    content: "Join us for an intensive React workshop covering hooks, context, and performance optimization.",
    type: "workshop",
    date: "2024-02-15",
    urgent: false
  },
  {
    id: 2,
    title: "Internship Applications Due Soon",
    content: "Reminder: Summer internship applications for major tech companies are due by March 1st.",
    type: "deadline",
    date: "2024-03-01",
    urgent: true
  }
];

export const events = [
  {
    id: 1,
    title: "AI & Machine Learning Bootcamp",
    date: "2024-02-20",
    time: "2:00 PM - 6:00 PM",
    mode: "online",
    seats: "45/60",
    speaker: "Dr. Alex Kumar",
    description: "Deep dive into neural networks, ML algorithms, and practical AI implementation.",
    tags: ["AI", "Machine Learning", "Python"],
    registered: false
  },
  {
    id: 2,
    title: "Full-Stack Development Workshop",
    date: "2024-02-25",
    time: "10:00 AM - 4:00 PM",
    mode: "offline",
    location: "Tech Hub, Downtown",
    seats: "25/30",
    speaker: "Emma Thompson",
    description: "Build a complete web application from frontend to backend deployment.",
    tags: ["Full-Stack", "React", "Node.js"],
    registered: true
  }
];

export const opportunities = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechStart Inc.",
    location: "Remote",
    duration: "3 months",
    skills: ["React", "JavaScript", "CSS"],
    type: "internship",
    stipend: "$800/month",
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "UI/UX Design Collaboration",
    company: "Design Studio",
    location: "New York, NY",
    duration: "2 months",
    skills: ["Figma", "Design Systems", "Prototyping"],
    type: "collaboration",
    stipend: "Equity",
    posted: "1 week ago"
  }
];

export const discussions = [
  {
    id: 1,
    title: "How to optimize React app performance?",
    content: "My React app is getting slower as it grows. What are the best practices for optimization?",
    author: "Alex Johnson",
    tags: ["react", "performance", "optimization"],
    answers: 5,
    upvotes: 15,
    solved: false,
    timestamp: "3 hours ago"
  },
  {
    id: 2,
    title: "Best practices for Git workflow in teams?",
    content: "Working with a team of 6 developers. What Git workflow would you recommend?",
    author: "Jordan Smith",
    tags: ["git", "teamwork", "workflow"],
    answers: 8,
    upvotes: 22,
    solved: true,
    timestamp: "1 day ago"
  }
];

export const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    role: "Senior Data Scientist",
    company: "Google",
    skills: ["Machine Learning", "Python", "Data Analysis"],
    experience: "8 years",
    availability: "Weekends",
    rating: 4.9,
    sessions: 156,
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Mark Rodriguez",
    role: "Full-Stack Developer",
    company: "Microsoft",
    skills: ["React", "Node.js", "Cloud Architecture"],
    experience: "6 years",
    availability: "Evenings",
    rating: 4.8,
    sessions: 203,
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

export const projects = [
  {
    id: 1,
    title: "EcoTracker Mobile App",
    description: "A mobile app to track and reduce carbon footprint with gamification elements.",
    tools: ["React Native", "Firebase", "Node.js"],
    category: "Mobile",
    contributors: 3,
    github: "https://github.com/example/ecotracker",
    demo: "https://ecotracker-demo.com",
    image: "https://images.pexels.com/photos/1432942/pexels-photo-1432942.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "AI-Powered Code Review Tool",
    description: "Machine learning tool that provides intelligent code review suggestions.",
    tools: ["Python", "TensorFlow", "Flask"],
    category: "AI",
    contributors: 2,
    github: "https://github.com/example/ai-code-review",
    demo: "https://ai-code-review.com",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
  }
];

export const userProfiles = {
  1: {
    id: 1,
    name: "Alex Johnson",
    role: "Computer Science Student",
    bio: "Passionate about full-stack development and machine learning. Currently pursuing CS degree at MIT.",
    education: "MIT - Computer Science (2022-2026)",
    location: "Boston, MA",
    skills: ["JavaScript", "Python", "React", "Node.js"],
    contributionScore: 1250,
    postsCount: 23,
    projectsCount: 5,
    eventsAttended: 12,
    joinedDate: "January 2023",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
};

export const currentUser = {
  id: 1,
  name: "Alex Johnson",
  role: "student", // guest, student, professional, mentor, admin
  authenticated: true
};