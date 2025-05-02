"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Circle } from "rc-progress";
import img1 from "@/assets/skill/1.jpg";
import img2 from "@/assets/skill/2.jpg";
import img3 from "@/assets/skill/3.jpg";
import img4 from "@/assets/skill/4.jpg";
import img5 from "@/assets/skill/5.jpg";
import img6 from "@/assets/skill/6.jpg";
import img7 from "@/assets/skill/7.jpg";
import img8 from "@/assets/skill/8.jpg";
import img9 from "@/assets/skill/9.jpg";
import img10 from "@/assets/skill/10.jpg";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionTitle from "@/components/shered/SectionTitle";
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
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay]}
                className='mySwiper mt-14'>
                <SwiperSlide>
                    <div className='relative'>
                        <Circle
                            className=''
                            percent={90}
                            trailWidth={6}
                            strokeWidth={6}
                            trailColor='#ddd'
                            strokeColor='#7644FF'
                        />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <p className='text-center font-bold gradient_text text-5xl'>
                                90%
                            </p>
                            <Image
                                className='object-cover rounded-xl w-4/5 mx-auto'
                                src={img1}
                                alt=''
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Circle
                            className=''
                            percent={80}
                            trailWidth={6}
                            strokeWidth={6}
                            trailColor='#ddd'
                            strokeColor='#7644FF'
                        />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <p className='text-center font-bold gradient_text text-5xl'>
                                80%
                            </p>
                            <Image
                                className='object-cover rounded-xl'
                                src={img2}
                                alt=''
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Circle
                            className=''
                            percent={60}
                            trailWidth={6}
                            strokeWidth={6}
                            trailColor='#ddd'
                            strokeColor='#7644FF'
                        />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <p className='text-center font-bold gradient_text text-5xl'>
                                60%
                            </p>
                            <Image
                                className='object-cover rounded-xl'
                                src={img3}
                                alt=''
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Circle
                            className=''
                            percent={80}
                            trailWidth={6}
                            strokeWidth={6}
                            trailColor='#ddd'
                            strokeColor='#7644FF'
                        />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <p className='text-center font-bold gradient_text text-5xl mb-4'>
                                80%
                            </p>
                            <Image
                                className='object-cover rounded-xl'
                                src={img4}
                                alt=''
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Circle
                            className=''
                            percent={95}
                            trailWidth={6}
                            strokeWidth={6}
                            trailColor='#ddd'
                            strokeColor='#7644FF'
                        />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <p className='text-center font-bold gradient_text text-5xl'>
                                95%
                            </p>
                            <Image
                                className='object-cover rounded-xl'
                                src={img5}
                                alt=''
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Circle
                            className=''
                            percent={80}
                            trailWidth={6}
                            strokeWidth={6}
                            trailColor='#ddd'
                            strokeColor='#7644FF'
                        />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <p className='text-center font-bold mb-3 gradient_text text-5xl'>
                                80%
                            </p>
                            <Image
                                className='object-cover rounded-xl'
                                src={img6}
                                alt=''
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Circle
                            className=''
                            percent={30}
                            trailWidth={6}
                            strokeWidth={6}
                            trailColor='#ddd'
                            strokeColor='#7644FF'
                        />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <p className='text-center font-bold gradient_text text-5xl'>
                                30%
                            </p>
                            <Image
                                className='object-cover rounded-xl'
                                src={img7}
                                alt=''
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Circle
                            className=''
                            percent={50}
                            trailWidth={6}
                            strokeWidth={6}
                            trailColor='#ddd'
                            strokeColor='#7644FF'
                        />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <p className='text-center font-bold gradient_text text-5xl'>
                                50%
                            </p>
                            <Image
                                className='object-cover mt-5'
                                src={img8}
                                alt=''
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Circle
                            className=''
                            percent={50}
                            trailWidth={6}
                            strokeWidth={6}
                            trailColor='#ddd'
                            strokeColor='#7644FF'
                        />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <p className='text-center font-bold gradient_text text-5xl'>
                                50%
                            </p>
                            <Image
                                className='object-cover rounded-xl'
                                src={img9}
                                alt=''
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Circle
                            className=''
                            percent={70}
                            trailWidth={6}
                            strokeWidth={6}
                            trailColor='#ddd'
                            strokeColor='#7644FF'
                        />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <p className='text-center font-bold gradient_text text-5xl'>
                                70%
                            </p>
                            <Image
                                className='object-cover rounded-xl'
                                src={img10}
                                alt=''
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Skill;
