"use client";
import { TProject } from "@/types/project.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// import required modules
import {
    EffectFade,
    Navigation,
    Pagination,
    Thumbs,
    FreeMode,
} from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsProps } from "antd";
import DescriptionTab from "./DescriptionTab";
import TechnologyTab from "./TechnologyTab";
import ChallengeAndPlanTab from "./ChallengeAndPlanTab";

const ProjectDetails = ({ project }: { project: TProject }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Description",
            children: (
                <DescriptionTab
                    duration={project?.duration}
                    description={project?.description}
                />
            ),
        },
        {
            key: "2",
            label: `Technology`,
            children: <TechnologyTab project={project} />,
        },
        {
            key: "3",
            label: `Challenge and Plan`,
            children: <ChallengeAndPlanTab project={project} />,
        },
    ];
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
                        thumbs={{ swiper: thumbsSwiper }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[
                            EffectFade,
                            Navigation,
                            Pagination,
                            Autoplay,
                            Thumbs,
                        ]}
                        className=''>
                        {project?.images?.map((image) => (
                            <SwiperSlide key={image}>
                                <Image
                                    className='w-full h-[400px] object-cover'
                                    src={image}
                                    width={500}
                                    height={300}
                                    alt='image'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='mySwiper'>
                        {project?.images?.map((image) => (
                            <SwiperSlide
                                key={image}
                                className='border-2 border-gray-300'>
                                <Image
                                    className='w-full h-[50px] object-cover'
                                    src={image}
                                    width={200}
                                    height={50}
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
            <div className='border-t text-white border-gray-300 mt-8 pt-5'>
                <Tabs
                    defaultActiveKey='1'
                    items={items}
                    // onChange={onChange}
                />
            </div>
            {/* Link  section */}
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
