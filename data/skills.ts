export interface SkillCategory {
  category: string
  skills: string[]
  icon?: string
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "C++", "SQL", "Assembly", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks",
    skills: ["Django", "JavaFX", "Bootstrap", "Spring Boot", "Next.js", "React", "Node.js", "OpenGL"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "Visual Studio", "VS Code", "PyCharm", "Code::Blocks", "IntelliJ IDEA", "Docker"],
  },
  {
    category: "Scripting",
    skills: ["LaTeX", "HTML", "CSS", "Bash"],
  },
  {
    category: "Simulation Tools",
    skills: ["Proteus", "Logisim"],
  },
  {
    category: "Operating System",
    skills: ["Windows 10/11", "Linux"],
  },
  {
    category: "Databases",
    skills: ["Oracle", "MSSQL", "MySQL", "PostgreSQL"],
  },
  {
    category: "Communication",
    skills: ["Effective Communication", "Active Presentation", "Collaborative Teamwork"],
  },
  {
    category: "Management",
    skills: ["Time Management", "Task Management", "Meeting Deadlines"],
  },
  {
    category: "Problem Solving",
    skills: ["Algorithm Design", "Data Structures", "Competitive Programming", "Research"],
  },
]

// Legacy export for backward compatibility
export const skills = {
  languages: ["Python", "Java", "C", "C++", "SQL", "Assembly", "JavaScript", "TypeScript"],
  frameworks: ["Django", "JavaFX", "Bootstrap", "Spring Boot", "Next.js", "React", "Node.js", "OpenGL"],
  tools: ["Git", "Visual Studio", "Visual Studio Code", "PyCharm", "Code::Blocks", "IntelliJ IDEA", "Docker"],
  scripting: ["LaTeX", "HTML", "CSS", "Bash"],
  simulation: ["Proteus", "Logisim"],
  operatingSystems: ["Windows 10/11", "Linux"],
  databases: ["Oracle", "MSSQL", "MySQL", "PostgreSQL"],
  soft: [
    "Effective Communication",
    "Active Presentation",
    "Collaborative Teamwork",
    "Time Management",
    "Task Management",
    "Problem Solving",
    "Research",
  ],
}
