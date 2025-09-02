export type TSkill = {
    title: string;
    image: string;
    totalProjects?: number;
    skill: number;
    description: string;
    category: "Frontend" | "Backend" | "Database";
    color: string;
};
