"use client";
import { useRef } from "react";
import CapabilityCard from "./CapabilityCard";
import CopyEmailButton from "./CopyEmailButton";
import vector from "@/assets/flat_my_image.png";
import Image from "next/image";
const AboutSection = () => {
    const grid2Container = useRef<HTMLDivElement>(null);
    const isSmall = typeof window !== "undefined" && window.innerWidth < 640;
    return (
        <section className='jm_container' id='about'>
            <h2 className='text-4xl font-semibold'>About Me</h2>
            <div className='grid lg:grid-cols-2 gap-4 mt-5 lg:h-screen'>
                {/* Grid 1 */}
                <div className=' relative bg-[#2A2C4C]/50 row-span-1 lg:row-span-2 rounded-2xl p-4 overflow-hidden flex flex-col justify-between '>
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
                <div className='bg-[#2A2C4C]/50 w-full sm:min-h-[300px] min-h-56 lg:min-h-full relative overflow-hidden rounded-2xl'>
                    <div
                        ref={grid2Container}
                        className='flex items-center justify-center w-full h-full relative'>
                        <p className='flex items-end text-5xl text-gray-500'>
                            MY CAPABILITIES
                        </p>
                        <CapabilityCard
                            style={{
                                rotate: "75deg",
                                top: "30%",
                                left: "20%",
                                width: isSmall ? "130px" : "170px",
                                fontSize: isSmall ? "14px" : "20px",
                                padding: isSmall ? "10px" : "12px",
                            }}
                            text='MERN Stack'
                            containerRef={grid2Container}
                        />
                        <CapabilityCard
                            style={{
                                rotate: "-30deg",
                                top: "60%",
                                left: "45%",
                                width: isSmall ? "140px" : "170px",
                                fontSize: isSmall ? "15px" : "20px",        padding: isSmall ? "10px" : "12px",
                            }}
                            text='NEXT JS'
                            containerRef={grid2Container}
                        />
                        <CapabilityCard
                            style={{
                                rotate: "90deg",
                                bottom: "30%",
                                right: "-8%",
                                width: isSmall ? "140px" : "170px",
                                fontSize: isSmall ? "15px" : "20px",        padding: isSmall ? "10px" : "12px",
                            }}
                            text='Front End'
                            containerRef={grid2Container}
                        />
                        <CapabilityCard
                            style={{
                                rotate: "-45deg",
                                top: "55%",
                                left: "0%",
                                width: isSmall ? "140px" : "170px",
                                fontSize: isSmall ? "15px" : "20px",        padding: isSmall ? "10px" : "12px",
                            }}
                            text='Back End'
                            containerRef={grid2Container}
                        />
                        <CapabilityCard
                            style={{
                                rotate: "20deg",
                                top: "10%",
                                left: "38%",
                                width: isSmall ? "140px" : "170px",
                                fontSize: isSmall ? "15px" : "20px",        padding: isSmall ? "10px" : "12px",
                            }}
                            text='Full Stack'
                            containerRef={grid2Container}
                        />
                        <CapabilityCard
                            style={{
                                rotate: "30deg",
                                top: "70%",
                                left: "70%",
                                width: isSmall ? "50px" : "70px",
                            }}
                            image='assets/node.png'
                            containerRef={grid2Container}
                        />
                        <CapabilityCard
                            style={{
                                rotate: "-45deg",
                                top: "70%",
                                left: "25%",
                                    width: isSmall ? "40px" : "60px",
                            }}
                            image='assets/javascript.png'
                            containerRef={grid2Container}
                        />
                        <CapabilityCard
                            style={{
                                rotate: "-45deg",
                                top: "5%",
                                right: "10%",
                                    width: isSmall ? "90px" : "130px",
                            }}
                            image='assets/mongodb.png'
                            containerRef={grid2Container}
                        />
                        <CapabilityCard
                            style={{
                                rotate: "0deg",
                                top: "5%",
                                left: "0%",
                                    width: isSmall ? "140px" : "200px",
                            }}
                            image='assets/mongoose.png'
                            containerRef={grid2Container}
                        />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className='bg-[#2A2C4C]/80 w-full sm:min-h-[300px] min-h-56 lg:min-h-full relative overflow-hidden rounded-2xl'>
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
