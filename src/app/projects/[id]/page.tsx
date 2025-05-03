import ProjectDetails from "@/components/pages/projects/ProjectDetails";
import { getSingleProjects } from "@/services/projectServices";

const ProjectDetailsPage = async ({
    params,
}: {
    params: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const { id } = await params;
    const { data } = await getSingleProjects(id as string);
    return (
        <div>
            <ProjectDetails project={data} />
        </div>
    );
};

export default ProjectDetailsPage;
