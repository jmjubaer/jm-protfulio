"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionTitle from "@/components/shered/SectionTitle";
import CountUp from "react-countup";
import { TSkill } from "@/types/skill.type";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSkills } from "@/services/skillServices";

const Skill = () => {
    const [skills, setSkills] = useState<TSkill[] | null>(null);
    useEffect(() => {
        (async () => {
            const data = await getSkills();
            if (data.success) {
                setSkills(data.data);
            }
        })();
    }, []);
    return (
        <div className='pt-28 jm_container'>
            <SectionTitle
                subHeading={"Explore What can I do."}
                firstHeading={"My"}
                lastheading={"Skill"}></SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    540: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    880: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                modules={[Autoplay]}
                className=' mt-14'>
                {skills?.map((skill, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            // data-aos='zoom-in'
                            className='relative border transition-all duration-500 border-gray-300 mb-10 rounded-br-4xl rounded-4xl group overflow-hidden shadow-xl flex flex-col justify-between p-5'>
                            <Image
                                className='object-contain h-[100px] rounded-xl mx-auto'
                                src={skill?.image}
                                width={100}
                                height={100}
                                alt=''
                            />
                            <p className='text-center font-bold gradient_text text-5xl my-2'>
                                <CountUp
                                    end={skill.skill > 0 ? skill.skill : 0}
                                />
                                %
                            </p>
                            <h2 className='md:text-3xl text-2xl my-t text-center'>
                                {skill?.title}
                            </h2>
                            <div className='absolute -bottom-80 group-hover:bottom-0 left-0 w-full h-full bg-gray-600/90 transition-all duration-500 flex flex-col items-center text-white justify-center'>
                                <p className='text-4xl font-bold my-4'>
                                    <span className='text-2xl'>
                                        Total Project:
                                    </span>{" "}
                                    {skill?.totalProjects}
                                </p>
                                {/* <p>{skill?.description}</p> */}

                                <Link
                                    href={`/projects?technology=${skill?.title}`}
                                    className='button_primary text-center'>
                                    Show Project
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Skill;
