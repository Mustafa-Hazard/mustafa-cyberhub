export type BeyondCard = {
  id: string
  icon: string
  iconBg: string
  title: string
  org: string
  desc: string
  date: string
}

export const beyondCards: BeyondCard[] = [
  {
    id: 'top-class',
    icon: '🏆',
    iconBg: 'rgba(200,255,0,0.08)',
    title: 'Top of Class — Twice',
    org: 'SZABIST UNIVERSITY · ACADEMIC',
    desc: 'Ranked first in class twice across my BSCS degree, maintaining a 3.6 CGPA while independently shipping multiple production-grade applications.',
    date: '2023 – 2025',
  },
  {
    id: 'acm',
    icon: '🤝',
    iconBg: 'rgba(59,130,246,0.08)',
    title: 'ACM Core Team Member',
    org: 'ACM SZABIST · LEADERSHIP',
    desc: "Coordinated technical workshops, hackathons, and industry speaker sessions as a Core Team Member, managing logistics across SZABIST's largest student tech community.",
    date: 'Sep 2025 – Present',
  },
  {
    id: 'hackathon',
    icon: '🚀',
    iconBg: 'rgba(34,211,238,0.08)',
    title: 'Hackathon Finalist',
    org: 'SZABIST HACKATHON · COMPETITION',
    desc: 'Achieved finalist standing among 30+ competing teams in a 48-hour hackathon, delivering a fully functional Car Rental Management prototype under high-pressure, time-constrained conditions.',
    date: 'Dec 2023',
  },
  {
    id: 'goethe-volunteer',
    icon: '🌍',
    iconBg: 'rgba(255,107,53,0.08)',
    title: 'Volunteer — The Infinite Library',
    org: 'GOETHE-INSTITUT PAKISTAN · CULTURE',
    desc: 'Guided visitors through a VR & QR-based travelling installation reimagining libraries as interactive, multisensory storytelling spaces. Demonstrated cross-cultural communication skills.',
    date: 'Feb 2023',
  },
  {
    id: 'german',
    icon: '🇩🇪',
    iconBg: 'rgba(52,211,153,0.08)',
    title: 'German Language — B1',
    org: 'GOETHE-INSTITUT · LANGUAGES',
    desc: 'Completed A1, A2, and B1 levels through structured Goethe-Institut coursework, demonstrating commitment to language learning and professional communication in German.',
    date: '2022 – 2024',
  },
  {
    id: 'ielts',
    icon: '📝',
    iconBg: 'rgba(167,139,250,0.08)',
    title: 'IELTS Academic — Band 7',
    org: 'BRITISH COUNCIL · ENGLISH PROFICIENCY',
    desc: 'Achieved IELTS Academic Band 7, demonstrating professional-level command of academic English across reading, writing, listening, and speaking.',
    date: '2024',
  },
]
