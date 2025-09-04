import Projects from "@/components/pages/projects";
import { getSkills } from "@/services/skillServices";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
    title: "Md Jubaer | Projects",
    description:
        "My name is md jubaer is a MERN stack developer. Here has some my project.",
};
const ProjectsPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const { technology } = await searchParams;
    const techParam = Array.isArray(technology) ? technology[0] : technology;

    const { data: skills } = await getSkills("All");
    return (
        <div>
            <Projects skills={skills} technologyParams={techParam || ""} />
        </div>
    );
};

export default ProjectsPage;
