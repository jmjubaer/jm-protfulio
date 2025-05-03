import { TProject } from "@/types/project.type";
import Image from "next/image";
import Link from "next/link";
type TProps = {
    project: TProject;
    idx: number;
    isHome?: boolean;
};
const ProjectCard = ({ project, idx, isHome }: TProps) => {
    return (
        <div className='grid md:grid-cols-5 gap-10 items-center mt-14'>
            {/* Text Section */}
            <div
                data-aos={
                    isHome ? (idx % 2 === 0 ? "fade-right" : "fade-left") : ""
                }
                className={`md:col-span-3 ${
                    idx % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}>
                <h2
                    data-aos={isHome ? "fade-up" : ""}
                    className='text-5xl font-semibold'>
                    {project?.title}
                </h2>
                <p
                    data-aos={isHome ? "fade-up" : ""}
                    className='text-xl font-medium mt-2 text-[#1C99FE]'>
                    {project?.techTitle}
                </p>
                <h3
                    data-aos={isHome ? "fade-up" : ""}
                    className='text-2xl mt-8 font-semibold'>
                    Features:
                </h3>
                <div className='text-lg'>
                    {project?.features?.map((feature: string) => (
                        <li key={feature} data-aos={isHome ? "fade-up" : ""}>
                            {feature}
                        </li>
                    ))}
                </div>

                <Link data-aos={isHome ? "fade-up" : ""}
                    className='button_primary mt-5 inline-block w-full text-center'
                    href={`/projects/${project?._id}`}>
                    View Details
                </Link>
            </div>

            {/* Image Section */}
            <div
                data-aos={
                    isHome ? (idx % 2 === 0 ? "fade-right" : "fade-left") : ""
                }
                className={`md:col-span-2 h-[60vh] md:h-full w-[80vw] md:w-full mx-auto relative jm_parent overflow-hidden border-4 border_gradient ${
                    idx % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}>
                <div className='absolute w-full h-fit top-0 left-0 jm_child'>
                    <Image
                        className='w-full h-full jm_transition'
                        src={project?.mainImage}
                        width={500}
                        height={1000}
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
