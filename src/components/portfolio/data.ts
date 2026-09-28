export const navItems = [ ['home','Home'], ['about','About'], ['skills','Skills'], ['projects','Projects'], ['experience','Experience'], ['contact','Contact'] ] as const;
export const projects = [
  { name: 'Smart Health Card', category: 'HEALTHCARE / DIGITAL RECORDS', number: '01', description: 'A digital health record platform designed to provide secure, accessible and portable healthcare records.', features: ['Patient details', 'Medical records', 'Prescriptions', 'Emergency information'], mark: '✳' },
  { name: 'NoteHive', category: 'EDUCATION / KNOWLEDGE SHARING', number: '02', description: 'A digital notes sharing platform for discovering and contributing learning resources.', features: ['Department-wise notes', 'Verified PDFs', 'YouTube resources', 'Admin approval workflow', 'Search and download', 'Reward leaderboard'], mark: '✦' },
  { name: 'AgriQueue', category: 'AGRICULTURE / PROCUREMENT', number: '03', description: 'A smart farm procurement system designed to reduce unnecessary waiting and travel time.', features: ['Slot booking', 'Digital tokens', 'Live queue tracking', 'AI-assisted demand forecasting'], mark: '⌁' },
  { name: 'SafeSite', category: 'SAFETY / MONITORING', number: '04', description: 'A construction safety monitoring system that helps teams respond to risks in real time.', features: ['Real-time hazard reporting', 'SOS alerts', 'Risk tracking', 'Role-based supervisor dashboards'], mark: '◇' },
  { name: 'Smart Canteen', category: 'CAMPUS / ORDERING', number: '05', status: 'IN PROGRESS', description: 'A web-based canteen ordering experience aimed at reducing queue waiting time.', features: ['Student pre-ordering', 'Real-time order tracking', 'Automated order management', 'Reduced queue waiting time'], mark: '◈' },
] as const;
export const skillGroups = [
  { title: 'Languages', items: ['C', 'Java', 'Python'] },
  { title: 'Frameworks', items: ['Spring Boot', 'Bootstrap', 'React.js', 'Node.js', 'Express.js', 'Thymeleaf'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL', 'H2'] },
  { title: 'Tools & platforms', items: ['Git', 'GitHub', 'Canva', 'Figma'] },
  { title: 'Web technologies', items: ['HTML', 'CSS', 'JavaScript', 'MERN Stack'] },
  { title: 'Concepts', items: ['Software Development', 'Full-Stack Development', 'REST APIs', 'Version Control', 'Agile Development', 'Data Structures', 'Problem Solving', 'UI/UX Design'] },
];
export const certifications = ['TinkerHub Certification', 'Level Up with AI — IEEE', 'Building Infrastructure for Agentic AI', 'Formal Language and Automata — Edzumbo Pvt Ltd', 'Figma Poster Design Workshop — IEDC', 'GitHub Workshop', 'NxtWave AI Workshop'];
