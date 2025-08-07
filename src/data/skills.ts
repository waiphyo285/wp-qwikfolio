const SKILLS: { field: string; skills: { skill: string; icon: string }[] }[] = [
  {
    field: "Languages",
    skills: [
      { skill: "JavaScript", icon: "javascript" },
      { skill: "TypeScript", icon: "typescript" },
      { skill: "PHP", icon: "php" },
      { skill: "Python", icon: "python" },
      { skill: "Golang", icon: "go" },
    ],
  },
  {
    field: "Front-End",
    skills: [
      { skill: "HTML", icon: "html5" },
      { skill: "CSS", icon: "css3" },
      { skill: "React.js", icon: "reactjs" },
      { skill: "Next.js", icon: "nextjs" },
      { skill: "Redux", icon: "redux" },
      // { skill: "React Native", icon: "reactjs" },
      { skill: "jQuery", icon: "jquery" },
      { skill: "Bootstrap", icon: "bootstrap" },
      { skill: "TailwindCSS", icon: "tailwindcss" },
    ],
  },
  {
    field: "Back-End",
    skills: [
      { skill: "Node.js", icon: "nodejs" },
      { skill: "Express.js", icon: "expressjs" },
      { skill: "NestJS", icon: "nestjs" },
      { skill: "GraphQL", icon: "graphql" },
    ],
  },
  {
    field: "Databases",
    skills: [
      { skill: "MySQL", icon: "mysql" },
      { skill: "PostgresQL", icon: "psql" },
      { skill: "MongoDB", icon: "mongodb" },
      { skill: "Redis", icon: "redis" },
      { skill: "TypeORM", icon: "typeorm" },
      { skill: "Prisma", icon: "prisma" },
    ],
  },
  {
    field: "Others",
    skills: [
      { skill: "Firebase", icon: "firebase" },
      { skill: "Git", icon: "git" },
      { skill: "Digital Ocean", icon: "digitalocean" },
      { skill: "AWS", icon: "amazon" },
      { skill: "Docker", icon: "docker" },
    ],
  },
];

export default SKILLS;
