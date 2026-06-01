/**
 * Types representing portfolio information.
 */

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  roles: string[];
  description: string;
  systems: string[];
}

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
}

export interface ProcessPhase {
  phase: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  industry: string;
  colorFrom: string;
  colorTo: string;
}
