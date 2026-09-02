export type SkillLevel = 1 | 2 | 3;

export type SkillItem = {
  name: string;
  reason: string;
  level: SkillLevel;
};

export type SkillCategory = {
  id: 'frontend' | 'backend' | 'tool-infra' | 'ai';
  label: string;
  items: SkillItem[];
};

export const skills: SkillCategory[] = [
  { id: 'frontend', label: 'Frontend', items: [] },
  { id: 'backend', label: 'Backend', items: [] },
  { id: 'tool-infra', label: 'Tool / Infra', items: [] },
  { id: 'ai', label: 'AI 툴', items: [] },
];
