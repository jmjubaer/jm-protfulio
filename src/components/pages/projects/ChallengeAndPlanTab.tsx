import { TProject } from "@/types/project.type";
import React from "react";

const ChallengeAndPlanTab = ({ project }: { project: TProject }) => {
    return (
        <div className=' grid md:grid-cols-2 gap-10 mt-5'>
            <div className=''>
                <h2 className='text-xl font-semibold'>Face Challenge: </h2>
                <div className=' mt-3 ml-7'>
                    {project?.challenges?.map((item) => (
                        <li className='text-lg list-disc font-medium' key={item}>
                            {item}.
                        </li>
                    ))}
                </div>
            </div>{" "}
            <div className=''>
                <h2 className='text-xl font-semibold'>Improvement Plan: </h2>
                <div className=' mt-3 ml-7'>
                    {project?.improvementPlans?.map((item) => (
                        <li className='text-lg list-disc font-medium' key={item}>
                            {item}.
                        </li>
                    ))}
                </div>
            </div>{" "}
        </div>
    );
};

export default ChallengeAndPlanTab;
