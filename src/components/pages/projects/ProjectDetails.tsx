"use client";
import { TProject } from "@/types/project.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const ProjectDetails = ({ project }: { project: TProject }) => {
    console.log(project);
    return (
        <div className='jm_container py-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
                <div className=''>
                    <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Navigation, Pagination, Autoplay]}
                        className='mySwiper'>
                        {project?.images?.map((image) => (
                            <SwiperSlide key={image}>
                                <Image
                                    className='w-full h-[400px] object-contain'
                                    src={image}
                                    width={500}
                                    height={300}
                                    alt='image'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className=''>
                    <h2 className='text-5xl font-semibold'>{project?.title}</h2>
                    <p className='text-xl font-medium mt-2 text-[#1C99FE]'>
                        {project?.techTitle}
                    </p>
                    <h3 className='text-2xl mt-8 font-semibold'>Features:</h3>
                    <div className='text-lg'>
                        {project?.features?.map((feature: string) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-300 mt-8 pt-5'>
                <div className=''>
                    <h2 className='text-xl font-semibold'>
                        Project Description{" "}
                    </h2>
                    <p className=' mt-3 sm:ml-10'>{project?.description}</p>
                </div>{" "}
                <div className='flex gap-5 my-5'>
                    <h2 className='text-xl font-semibold'>
                        Project duration:{" "}
                    </h2>
                    <p className='font-bold text-2xl '>{project?.duration}</p>
                </div>
                <div className=' sm:flex  gap-20 mt-5'>
                    <div className=''>
                        <h2 className='text-xl font-semibold'>
                            Use Technology{" "}
                        </h2>
                        <div className=' mt-3 ml-10'>
                            {project?.technology?.map((item) => (
                                <li className='text-lg font-medium' key={item}>
                                    {item}
                                </li>
                            ))}
                        </div>
                    </div>{" "}
                    <div className=''>
                        <h2 className='text-xl font-semibold'>
                            Use Technology{" "}
                        </h2>
                        <div className=' mt-3 ml-10'>
                            {project?.packages?.map((item) => (
                                <li className='text-lg font-medium' key={item}>
                                    {item}
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap md:flex-nowrap gap-5 justify-between mt-10'>
                <a
                    className='button_primary w-full text-center'
                    target='_blank'
                    href={project?.liveLink}>
                    Live Site
                </a>
                <a
                    className='button_primary w-full text-center'
                    target='_blank'
                    href={project?.clientCode}>
                    Clint Code
                </a>
                <a
                    className='button_primary w-full text-center'
                    target='_blank'
                    href={project?.serverCode}>
                    Server Code
                </a>
            </div>
        </div>
    );
};

export default ProjectDetails;
