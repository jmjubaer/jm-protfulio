import { TSkill } from "@/types/skill.type";
import { Tooltip } from "antd";
import Image from "next/image";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
const SkillCard = ({ skill, index }: { skill: TSkill; index: number }) => {
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <div
                className={`skill-card relative overflow-hidden group cursor-pointer transform transition-all duration-700 p-5 rounded-2xl card_shadow bg-[#2A2C4C]/40`}
                style={
                    {
                        animationDelay: `${index * 0.1}s`,
                        // backgroundColor: skill.color,
                    } as React.CSSProperties
                }>
                {/* Overlay */}
                <div
                    className='w-full h-full opacity-0 absolute top-0 z-0 left-0 transition-all duration-700 group-hover:opacity-20 '
                    style={{ backgroundColor: skill?.color }}></div>

                {/* Icon with floating animation */}
                <div className='relative z-10 grid grid-cols-2 items-center justify-between mb-4'>
                    <Image
                        className='object-cover h-[100px] rounded-2xl '
                        src={skill?.image}
                        width={100}
                        height={100}
                        alt=''
                    />
                    <p className=' font-bold  text-3xl my-2 text-right'>
                        <CountUp end={skill.skill > 0 ? skill.skill : 0} />%
                    </p>
                </div>
                <div className='flex items-center justify-between'>
                    {/* title and category tag */}
                    <div className=''>
                        {/* Skill name */}
                        <h3 className='text-xl font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300 z-20 group-hover:text-white '>
                            {skill.title}
                        </h3>

                        {/* Category badge */}
                        <span className='inline-block px-3 py-1 text-xs font-medium bg-secondary/90 text-white/50 rounded-full z-10'>
                            {skill.category}
                        </span>
                    </div>

                    {/* Total project */}
                    <Tooltip
                        title='Total Projects'
                        className='text-6xl text-white/50 font-semibold z-50'>
                        <span>{skill.totalProjects}</span>
                    </Tooltip>
                </div>

                {/* Progress bar */}
                <div className='mt-4 bg-[#2A2C4C]/90 rounded-full h-2 overflow-hidden z-10'>
                    <div
                        className={`h-full  transition-all duration-1000 ease-out`}
                        style={{
                            width: `${skill.skill}%`,
                            transitionDelay: `${index * 0.1 + 0.5}s`,
                            backgroundColor: skill.color,
                        }}
                    />
                </div>
            </div>
        </Tilt>
    );
};
export default SkillCard;
