"use client";
import { useRef } from "react";
import SkillCard from "./SkillCard";
import CopyEmailButton from "./CopyEmailButton";
import vector from "@/assets/flat_my_image.png";
import Image from "next/image";
const AboutSection = () => {
    const grid2Container = useRef<HTMLDivElement>(null);

    return (
        <section className='jm_container' id='about'>
            <h2 className='text-4xl font-semibold'>About Me</h2>
            <div className='grid grid-cols-2 gap-4 mt-5 h-screen'>
                {/* Grid 1 */}
                <div className=' relative bg-[#2A2C4C]/50 row-span-2 rounded-2xl p-4 overflow-hidden flex flex-col justify-between '>
                    <Image
                        src={vector}
                        alt='vector'
                        className='scale-[1.8] -mt-7 ml-16 rotate-6'
                    />
                    <div className='z-20 '>
                        <p className='text-2xl font-semibold mb-2'>
                            Hi, I`m Md Jubaer
                        </p>
                        <p className='text-white/60'>
                            I’m Md Jubaer from Khulna, Bangladesh. I’m a MERN
                            stack developer with professional experience in
                            building modern web applications. I have strong
                            skills in HTML, CSS, JavaScript, TypeScript,
                            React.js, Next.js, Express.js, Mongoose, and
                            MongoDB. I’m also proficient in CSS frameworks like
                            Tailwind CSS and Bootstrap, and experienced with
                            state management libraries such as Redux and
                            Zustand.
                        </p>
                    </div>
                </div>
                {/* Grid 2 */}
                <div className='bg-[#2A2C4C]/50 w-full relative overflow-hidden rounded-2xl'>
                    <div
                        ref={grid2Container}
                        className='flex items-center justify-center w-full h-full relative'>
                        <p className='flex items-end text-5xl text-gray-500'>
                            MY CAPABILITIES
                        </p>
                        <SkillCard
                            style={{
                                rotate: "75deg",
                                top: "30%",
                                left: "20%",
                            }}
                            text='MERN Stack'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "-30deg",
                                top: "60%",
                                left: "45%",
                            }}
                            text='NEXT JS'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "90deg",
                                bottom: "30%",
                                right: "-8%",
                            }}
                            text='Front End'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "-45deg",
                                top: "55%",
                                left: "0%",
                            }}
                            text='Back End'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "20deg",
                                top: "10%",
                                left: "38%",
                            }}
                            text='Full Stack'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "30deg",
                                top: "70%",
                                left: "70%",
                            }}
                            image='assets/node.png'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "-45deg",
                                top: "70%",
                                left: "25%",
                            }}
                            image='assets/javascript.png'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "-45deg",
                                top: "5%",
                                right: "10%",
                                width: "120px",
                            }}
                            image='assets/mongodb.png'
                            containerRef={grid2Container}
                        />
                        <SkillCard
                            style={{
                                rotate: "0deg",
                                top: "5%",
                                left: "0%",
                                width: "200px",
                            }}
                            image='assets/mongoose.png'
                            containerRef={grid2Container}
                        />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className='bg-[#2A2C4C]/80 w-full relative overflow-hidden rounded-2xl'>
                    <div className='flex flex-col items-center justify-center gap-4 size-full'>
                        <p className='text-center text-xl font-medium'>
                            Do you want to start a project together?
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
