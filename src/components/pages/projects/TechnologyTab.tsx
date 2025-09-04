import { TProject } from "@/types/project.type";

const TechnologyTab = ({ project }: { project: TProject }) => {
    return (
        <div className='md:flex gap-20'>
            <div className=''>
                <h2 className='text-xl font-semibold text-white'>Technology Stack:</h2>
                <div className='capitalize mt-3 ml-7 text-white/80'>
                    {project?.technology?.map((item) => (
                        <li
                            className='text-lg font-medium list-disc'
                            key={item}>
                            {item}
                        </li>
                    ))}
                </div>
            </div>{" "}
            <div className='md:mt-0 mt-5'>
                <h2 className='text-xl font-semibold text-white'>Additional Package: </h2>
                <div
                    className={`mt-3 ml-7 capitalize text-white/80 ${
                        project?.packages?.length > 8 && "grid gap-x-20 sm:grid-cols-2 "
                    }`}>
                    {project?.packages?.map((item) => (
                        <li
                            className='text-lg font-medium list-disc'
                            key={item}>
                            {item}
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechnologyTab;
