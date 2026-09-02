export type ProjectLink = {
  label: string;
  url: string;
};

export type TroubleShooting = {
  problem: string;
  cause: string;
  failedAttempt: string;
  solution: string;
  result: string;
};

export type Project = {
  slug: string;
  title: string;
  parts: string;
  thumbnail: string;
  featured: boolean;
  stack: string[];
  period: string;
  team: string;
  role: string;
  overview: string;
  retro: string;
  troubles: TroubleShooting[];
  links: ProjectLink[];
};

export const projects: Project[] = [];
