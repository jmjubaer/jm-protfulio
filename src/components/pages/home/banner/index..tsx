"use client";
import { TypeAnimation } from "react-type-animation";
// import bg from "@/assets/my-image.png";
// import newImage from "@/assets/new.jpeg";
import newImage from "@/assets/IMG_20250510_130850.jpg";

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
const Banner = () => {
    return (
        <div id='home' className='mt-8'>
            <div className='grid md:grid-cols-3 gap-5 justify-between items-center min-h-screen jm_container '>
                <div className='md:col-span-2 order-2 md:order-1'>
                    <h1 className='text-3xl mb-5 heading_font font-semibold'>
                        Hi, I am Jm{" "}
                        <span className='gradient_text jm_special_font'>
                            Jubaer
                        </span>
                        ,
                    </h1>
                    <TypeAnimation
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
                    />
                    <p className='mt-5 w-11/12'>
                         I’m Md Jubaer from Khulna, Bangladesh. I’m a
                        MERN stack developer with professional experience in
                        building modern web applications. I have strong skills
                        in HTML, CSS, JavaScript, TypeScript, React.js, Next.js,
                        Express.js, Mongoose, and MongoDB. I’m also proficient
                        in CSS frameworks like Tailwind CSS and Bootstrap, and
                        experienced with state management libraries such as
                        Redux and Zustand.
                    </p>
                    <ul className='flex flex-wrap justify-center sm:justify-normal gap-10 mt-5'>
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
                    <div className='flex flex-wrap gap-8 mt-8'>
                        <Button>
                            <a href='/Resume.pdf' download={true}>
                                Download my resume
                            </a>
                        </Button>
                        <ShowResumeModal />
                    </div>
                </div>

                <div className='rounded-full bg_gradient mx-auto w-4/5 md:w-full order-1 md:order-3 overflow-hidden'>
                    <Image
                        className='rounded-full w-[90%] md:w-11/12 h-[70vw] md:h-[28vw] top-1/2 m-[5%] md:m-[4.2%] bg-white object-cover object-top '
                        src={newImage}
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
