"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionTitle from "@/components/shered/SectionTitle";
import { skills } from "@/services/skillServices";
import CountUp from "react-countup";

const Skill = () => {
    return (
        <div className='pt-28 jm_container'>
            <SectionTitle
                subHeading={"Explore What can I do."}
                firstHeading={"My"}
                lastheading={"Skill"}></SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay]}
                className='mySwiper mt-14'>
                {skills?.map((skill, idx) => (
                    <SwiperSlide key={idx}>
                        <div className='relative border border-gray-300 mb-10 rounded-md shadow-xl flex flex-col justify-between p-5 h-[450px]'>
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
                            <h2 className='text-3xl my-t text-center'>
                                {skill?.title}
                            </h2>
                            <p className="text-4xl font-bold my-4">
                                <span className="text-2xl">Total Project:</span>{" "}
                                {skill?.totalProjects}
                            </p>
                            <p>{skill?.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Skill;
