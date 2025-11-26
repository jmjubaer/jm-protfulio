import SectionTitle from "@/components/shered/SectionTitle";
import { TProject } from "@/types/project.type";
import ProjectCard from "@/components/ui/ProjectCard";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/services/projectServices";
import { Spin } from "antd";

const Projects = () => {
    const [projects, setProjects] = useState<TProject[] | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const data = await getAllProjects([
                { name: "page", value: 1 },
                { name: "limit", value: 3 },
                { name: "sort", value: "serial" },
            ]);
            if (data.success) {
                setProjects(data.data);
                setLoading(false);
            }
            setLoading(false);
        })();
    }, []);
    return (
        <div id='project' className='pt-28 jm_container'>
            <SectionTitle
                firstHeading={"My"}
                lastheading={"Projects"}
                subHeading={"Explore my awesome project"}></SectionTitle>
            <Spin spinning={loading} tip='Loading...' size='large'>
                {projects &&
                    projects?.map((project, idx) => (
                        <ProjectCard
                            isHome={true}
                            key={idx}
                            idx={idx}
                            project={project}
                        />
                    ))}
            </Spin>
        </div>
    );
};

export default Projects;
