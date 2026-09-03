export type SkillLevel = 1 | 2 | 3;

export type SkillItem = {
  name: string;
  reason: string;
  level: SkillLevel;
};

export type SkillCategory = {
  id: 'Languages' | 'Framework & Libraries' | 'Database' | 'Tools';
  label: string;
  items: SkillItem[];
};

export const skills: SkillCategory[] = [
  { id: 'Languages', label: 'Languages', items: [] },
  { id: 'Framework & Libraries', label: 'Framework & Libraries', items: [] },
  { id: 'Database', label: 'Database', items: [] },
  { id: 'Tools', label: 'Tools', items: [] },
];
