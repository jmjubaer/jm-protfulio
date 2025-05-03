import Projects from "@/components/pages/projects";
import { getSkills } from "@/services/skillServices";
import React from "react";

const ProjectsPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const { technology } = await searchParams;
    const techParam = Array.isArray(technology) ? technology[0] : technology;

    const { data: skills } = await getSkills();
    return (
        <div>
            <Projects skills={skills} technologyParams={techParam} />
        </div>
    );
};

export default ProjectsPage;
