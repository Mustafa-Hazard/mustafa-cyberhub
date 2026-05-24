export type SkillBar = { name: string; pct: number }
export type SkillGroup = {
  id: string
  icon: string
  iconBg: string
  iconColor: string
  title: string
  type: 'bars' | 'tags'
  bars?: SkillBar[]
  tags?: { label: string; color: 'lime' | 'cyan' | 'blue' | 'orange' | 'white' }[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    icon: '⟨/⟩',
    iconBg: 'rgba(200,255,0,0.08)',
    iconColor: '#c8ff00',
    title: 'Programming Languages',
    type: 'bars',
    bars: [
      { name: 'C#',                    pct: 78 },
      { name: 'JavaScript / TypeScript', pct: 80 },
      { name: 'Python',                pct: 72 },
      { name: 'Java',                  pct: 88 },
      { name: 'SQL',                   pct: 82 },
      { name: 'C',                     pct: 65 },
    ],
  },
  {
    id: 'databases',
    icon: '⊡',
    iconBg: 'rgba(59,130,246,0.1)',
    iconColor: '#93c5fd',
    title: 'Databases',
    type: 'bars',
    bars: [
      { name: 'MS SQL Server',     pct: 82 },
      { name: 'PostgreSQL / NeonDB', pct: 78 },
      { name: 'MongoDB',           pct: 70 },
      { name: 'Firebase',          pct: 65 },
    ],
  },
  {
    id: 'frameworks',
    icon: '⊞',
    iconBg: 'rgba(255,107,53,0.08)',
    iconColor: '#fb923c',
    title: 'Frameworks & Tools',
    type: 'tags',
    tags: [
      { label: 'ASP.NET Core MVC',      color: 'lime' },
      { label: 'Entity Framework Core', color: 'white' },
      { label: 'React / Next.js',        color: 'white' },
      { label: 'Redux Toolkit',          color: 'white' },
      { label: 'Node.js',                color: 'white' },
      { label: 'Express.js',             color: 'white' },
      { label: 'Flask',                  color: 'white' },
      { label: 'Alpine.js',              color: 'white' },
      { label: 'EJS',                    color: 'white' },
      { label: 'Docker',                 color: 'orange' },
      { label: 'Git / GitHub',           color: 'white' },
      { label: 'Vercel',                 color: 'white' },
      { label: 'Firebase Hosting',       color: 'white' },
      { label: 'Tailwind CSS',           color: 'white' },
    ],
  },
  {
    id: 'qa-security',
    icon: '🛡',
    iconBg: 'rgba(34,211,238,0.08)',
    iconColor: '#22d3ee',
    title: 'QA, Security & ML',
    type: 'tags',
    tags: [
      { label: 'Cypress (E2E)',    color: 'cyan' },
      { label: 'Playwright',       color: 'cyan' },
      { label: 'Jira',             color: 'cyan' },
      { label: 'scikit-learn',     color: 'lime' },
      { label: 'TF-IDF / NLP',    color: 'lime' },
      { label: 'Wireshark',        color: 'white' },
      { label: 'Splunk',           color: 'white' },
      { label: 'NIST CSF',         color: 'white' },
      { label: 'Incident Response', color: 'white' },
      { label: 'RBAC',             color: 'white' },
      { label: 'Log Analysis',     color: 'white' },
      { label: 'Linux CLI / SSH',  color: 'white' },
      { label: 'SOC Basics',       color: 'white' },
    ],
  },
]
