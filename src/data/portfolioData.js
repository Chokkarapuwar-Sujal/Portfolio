export const personalInfo = {
  name: "Sujal",
  role: "Software Engineer",
  heroTagline: "Hi, I'm Chokkarapuwar Sujal",
  heroDescription:
    "A Software Engineer and Full Stack Developer passionate about building scalable web applications, solving complex problems, and creating impactful digital experiences.",
  aboutText:
    "I'm a Software Engineer and Full Stack Developer passionate about designing and building scalable, user-centric applications. I enjoy developing end-to-end software solutions using modern technologies, with a strong focus on clean architecture, performance, and maintainability. Driven by curiosity and continuous learning, I'm always exploring new ways to solve real-world problems through technology.",
  email: "chokkarapuwarsujal@gmail.com",
  github: "https://github.com/Chokkarapuwar-Sujal",
  linkedin: "https://www.linkedin.com/in/chokkarapuwar-sujal-1399b42bb/",
  resumeUrl: "YOUR_RESUME_URL",
};

export const projects = [
  {
    title: "MongoDB Semantic Search Engine",
    description:
      "A production-style semantic search platform that leverages MongoDB Atlas Vector Search and Sentence Transformers to retrieve documents based on meaning rather than keywords. Built with a microservices architecture using React, Node.js, FastAPI, and Docker, featuring document ingestion, vector embeddings, filtering, pagination, and a responsive search interface.",
    tech: ["React", "Vite", "TailwindCSS","Node.js","Express","FastAPI","MongoDB Atlas","Vector Search","Sentence Transformers",
    "Docker"],
    github: "https://github.com/Chokkarapuwar-Sujal/mongodb-semantic-search-engine",
    live: "",
  },
  {
    title: "AI-Driven Urban Digital Twin for Integrated City Simulation and Prediction Engine",
    description:
      "A production-style urban intelligence platform that simulates real-time city operations through an interactive 3D digital twin. Built with FastAPI, Streamlit, CesiumJS, and PyTorch, it combines spatio-temporal traffic prediction, reinforcement learning-based traffic signal optimization, accident simulation, explainable AI, and live event streaming.",
    tech: ["Python",
    "FastAPI",
    "Streamlit",
    "PyTorch",
    "Stable-Baselines3",
    "CesiumJS",
    "WebSockets",
    "Plotly",
    "GeoPandas",
    "NetworkX"],
    github: "https://github.com/Chokkarapuwar-Sujal/AI-Driven-Urban-Digital-Twin-for-Integrated-City-Simulation-and-Prediction-Engine",
    live: "",
  },
  {
    title: "AI-Powered Database Query Optimization & Index Recommendation System",
    description:
      "Built an intelligent SQL performance analysis platform that detects query anti-patterns, analyzes execution complexity, recommends indexes, rewrites inefficient SQL, simulates optimization impact, and visualizes query performance through an interactive Streamlit dashboard.",
    tech: [ "Python",
  "Streamlit",
  "Plotly",
  "Pandas",
  "sqlparse",
  "SQLAlchemy",
  "PyMySQL",
  "MySQL"],
    github: "https://github.com/Chokkarapuwar-Sujal/AI-Powered-SQL-Query-Optimizer",
    live: "https://ai-powered-sql-query-optimizer.streamlit.app",
  },
  
  {
    title: "Sales Data Analytics Dashboard",
    description:
      "Developed a production-style sales analytics dashboard using Streamlit, Plotly, and machine learning to visualize business KPIs, forecast sales, segment customers, generate automated insights, and export interactive reports for data-driven decision-making.",
    tech: ["Python","Streamlit","Pandas","Plotly","Scikit-learn","XGBoost","NumPy","openpyxl"],
    github: "https://github.com/Chokkarapuwar-Sujal/sales-analytics-dashboard",
    live: "https://sales-analytics-dashboard-app.streamlit.app",
  },
];

export const skills = {
  Languages: ["Java", "JavaScript", "Python", "C++", "SQL","TypeScript"],
  Frontend: ["React", "HTML", "CSS", "Vite","TailwindCSS"],
  Backend: ["Node.js", "Express", "FastAPI"],
  "AI / ML": ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
  Databases: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "Docker", "VS Code"],
};
