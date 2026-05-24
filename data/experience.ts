export type Experience = {
  id: string
  org: string
  role: string
  date: string
  bullets: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    id: 'szabist-intern',
    org: 'Department of University Advancements — SZABIST',
    role: 'University Advancement & Partnerships Intern',
    date: 'Dec 2025 – Feb 2026',
    bullets: [
      'Conducted systematic validation of data integrity across 200+ institutional MoU records, reinforcing information security compliance and mitigating risks of unauthorised data exposure.',
      'Established and maintained structured audit trails, access control protocols, and secure digital record management procedures to strengthen departmental document security posture.',
      'Identified and documented 15+ compliance gaps and operational risk factors through structured data analysis, contributing to risk-focused reporting delivered to department leadership.',
    ],
    tags: ['Data Validation', 'Compliance Auditing', 'Risk Assessment', 'Access Control', 'Documentation'],
  },
]
