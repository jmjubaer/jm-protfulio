import { useRef } from "react";
import SkillCard from "./SkillCard";
import { SkillsContainer } from "./SkillsContainer";

const AboutSection = () => {
    const grid2Container = useRef<HTMLDivElement>(null);
    return (
        <section className='jm_container' id='about'>
            <h2 className=''>About Me</h2>
            <div className='grid grid-cols-2 gap-4 mt-12 '>
                {/* Grid 1 */}
                <div className=' relative bg-[#2A2C4C] row-span-2 rounded-2xl p-4'>
                    <img src='assets/coding-pov.png' className='' />
                    <div className='z-10'>
                        <p className='headtext'>Hi, I`m Ali Sanati</p>
                        <p className='subtext'>
                            Over the last 4 years, I developed my frontend and
                            backend dev skills to deliver dynamic and software
                            and web applications.
                        </p>
                    </div>
                    {/* <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' /> */}
                </div>
                {/* Grid 2 */}
                <div className='bg-[#2A2C4C] w-full h-[50vh] relative overflow-hidden rounded-2xl'>
                    <div
                        ref={grid2Container}
                        className='flex items-center justify-center w-full h-full relative'>
                        <p className='flex items-end text-5xl text-gray-500'>
                            CODE IS CRAFT
                        </p>
                        <SkillCard
                            style={{
                                rotate: "75deg",
                                top: "30%",
                                left: "20%",
                            }}
                            text='GRASP'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "-30deg",
                                top: "60%",
                                left: "45%",
                            }}
                            text='SOLID'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "90deg",
                                bottom: "30%",
                                left: "70%",
                            }}
                            text='Design Patterns'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "-45deg",
                                top: "55%",
                                left: "0%",
                            }}
                            text='Design Principles'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "20deg",
                                top: "10%",
                                left: "38%",
                            }}
                            text='SRP'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "30deg",
                                top: "70%",
                                left: "70%",
                            }}
                            image='assets/logos/csharp-pink.png'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "-45deg",
                                top: "70%",
                                left: "25%",
                            }}
                            image='assets/logos/dotnet-pink.png'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "-45deg",
                                top: "5%",
                                left: "10%",
                            }}
                            image='assets/logos/blazor-pink.png'
                            containerRef={grid2Container}
                        />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className='bg-[#2A2C4C] w-full h-[50vh] relative rounded-2xl p-4'>
                    <div className=''>
                        <p className='headText'>Teck Stack</p>
                        <p className='subtext'>
                            I specialize in a variety of languages, frameworks,
                            and tools taht allow me to build robust and scalable
                            applications
                        </p>
                    </div>
                    <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
                        <SkillsContainer />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
