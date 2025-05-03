import SectionTitle from "@/components/shered/SectionTitle";
import { TProject } from "@/types/project.type";
import ProjectCard from "@/components/ui/ProjectCard";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/services/projectServices";

const Projects = () => {
    const [projects, setProjects] = useState<TProject[] | null>(null);
    useEffect(() => {
        (async () => {
            const data = await getAllProjects([
                { name: "page", value: 1 },
                { name: "limit", value: 3 },
                { name: "sort", value: "serial" },
            ]);
            if (data.success) {
                setProjects(data.data);
            }
        })();
    }, []);
    return (
        <div id='project' className=' jm_container'>
            <SectionTitle
                firstHeading={"My"}
                lastheading={"Projects"}
                subHeading={"Explore my awesome project"}></SectionTitle>

            {projects &&
                projects?.map((project, idx) => (
                    <ProjectCard
                        isHome={true}
                        key={idx}
                        idx={idx}
                        project={project}
                    />
                ))}
        </div>
    );
};

export default Projects;
