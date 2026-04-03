export const sections = ["about", "skill", "projects", "contact"] as const;

export type SectionId = (typeof sections)[number];

