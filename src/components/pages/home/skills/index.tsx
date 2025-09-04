"use client";
import SectionTitle from "@/components/shered/SectionTitle";
import { TSkill } from "@/types/skill.type";
import { useEffect, useState } from "react";
import { getSkills } from "@/services/skillServices";
import SkillCard from "./SkillCard";
import { Spin } from "antd";
const categories = ["Frontend", "Backend", "Database", "Tools"];

const SkillSection = () => {
    const [skills, setSkills] = useState<TSkill[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    console.log(skills);
   
    useEffect(() => {
        (async () => {
            setLoading(true);
            const data = await getSkills(selectedCategory);
            if (data.success) {
                setSkills(data.data);
                setLoading(false);
            }
            setLoading(false);
        })();
    }, [selectedCategory]);
    return (
        <div className='pt-28 jm_container' id="skills">
            <SectionTitle
                subHeading={"Explore What can I do."}
                firstHeading={"My"}
                lastheading={"Skill"}></SectionTitle>

            <div className='flex flex-wrap justify-center gap-4 my-12'>
                {["All", ...categories].map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-7 py-2.5 rounded-full font-medium uppercase cursor-pointer transition-all duration-300  ${
                            selectedCategory === category
                                ? " bg-gradient-to-r to-[#1C99FE] via-[#7644FF] from-[#FD4766] "
                                : "bg-[#2A2C4C]/50 text-white/50"
                        }`}
                        // style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Skills grid */}
            <Spin size='large' spinning={loading}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {skills?.map((skill, index) => (
                        <SkillCard
                            key={`${skill.title}-${selectedCategory}`}
                            skill={skill}
                            index={index}
                        />
                    ))}
                </div>
            </Spin>
        </div>
    );
};

export default SkillSection;
