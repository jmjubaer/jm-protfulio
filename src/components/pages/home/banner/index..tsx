"use client";
// import { TypeAnimation } from "react-type-animation";
// import bg from "@/assets/my-image.png";
// import newImage from "@/assets/new.jpeg";
// import newImage from "@/assets/IMG_20250510_130850.jpg";
import newImage from "@/assets/my-vector.png";

import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaEnvelope,
} from "react-icons/fa";
import Button from "@/components/ui/Button";
import Image from "next/image";
import ShowResumeModal from "./ShowResumeModal";
import { FlipWords } from "./FlipWord";
const Banner = () => {
    return (
        <div id='home' className='pt-8 bg-hero'>
            <div className='grid md:grid-cols-3 gap-5 justify-between items-center min-h-screen jm_container py-10 md:py-0'>
                <div className='md:col-span-2 order-2 md:order-1'>
                    <h1 className='text-3xl mb-5 heading_font font-semibold'>
                        Hi, I am{" "}
                        <span className='gradient_text jm_special_font'>
                            Jubaer
                        </span>
                        ,
                    </h1>
                    {/* Type Animation */}
                    {/* <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "I am also a Web Developer",
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            "I am also a Front-end Developer",
                            1000,
                            "I am also a React Developer",
                            1000,
                            "I am also a Next Js Developer",
                            1000,
                            "I am also a Back-end Developer",
                            1000,
                            "I am also a Full Stack Developer",
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        style={{ display: "inline-block" }}
                        className='text-3xl md:text-4xl lg:text-5xl font-semibold gradient_text'
                        repeat={Infinity}
                    /> */}

                    {/* flip words Animation */}
                    <h2 className='text-3xl md:text-4xl lg:text-6xl font-semibold '>
                        {" "}
                        <span className=''>
                            I am also a
                        </span>
                    </h2>
                    
                    <FlipWords
                        words={[
                            "Web Developer",
                            "Front-end Developer",
                            "React Developer",
                            "Next Js Developer",
                            "Back-end Developer",
                            "Full Stack Developer",
                        ]}
                        className='text-3xl md:text-4xl lg:text-7xl font-semibold  text-white mt-5 gradient_text'
                    />
                    <ul className='flex flex-wrap justify-center sm:justify-normal gap-5 sm:gap-7 md:gap-10 mt-5'>
                        <li className='p-3 rounded-full dics_effects'>
                            <a
                                target='_blank'
                                href='https://web.facebook.com/jm.jubaerm'
                                rel='noreferrer'>
                                <FaFacebookF className='text-lg text-[#0C83E9]' />
                            </a>
                        </li>
                        <li className='p-3 rounded-full dics_effects'>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://www.linkedin.com/in/jmjubaer/'>
                                <FaLinkedinIn className='text-lg text-[#0077B5]' />
                            </a>
                        </li>
                        <li className='p-3 rounded-full dics_effects'>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://github.com/jmjubaer'>
                                <FaGithub className='text-lg text-[]' />
                            </a>
                        </li>
                        <li className='p-3 rounded-full dics_effects'>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://twitter.com/MDJUBAERM'>
                                <FaTwitter className='text-lg text-[#1DA1F2]' />
                            </a>
                        </li>
                        <li className='p-3  rounded-full dics_effects'>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://www.instagram.com/jmjubaer16247/'>
                                <FaInstagram className='text-lg text-[#B62EB1]' />
                            </a>
                        </li>
                        <li className='p-3  rounded-full dics_effects'>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='mailto:jmjubaer3927@gmail.com'>
                                <FaEnvelope className='text-lg text-[#BF211E]' />
                            </a>
                        </li>
                    </ul>
                    <div className='flex flex-wrap md:gap-8 gap-2 sm:gap-3 justify-between md:justify-start mt-8'>
                        <Button>
                            <a href='/Resume.pdf' download={true}>
                                Download resume
                            </a>
                        </Button>
                        <ShowResumeModal />
                    </div>
                </div>

                <Image className='order-1 md:order-3 hidden md:block' src={newImage} alt='' />
            </div>
        </div>
    );
};

export default Banner;
