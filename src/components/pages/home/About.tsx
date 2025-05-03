"use client";
import image from "@/assets/my-image-2.png";
import Button from "@/components/ui/Button";
import Image from "next/image";
const About = () => {
    return (
        <div
            id='about'
            className='grid md:grid-cols-5 overflow-hidden gap-14 jm_container items-center pt-28 md:pt-0'>
            <div
                data-aos='fade-right'
                className='rounded-full mx-auto w-4/5 md:w-full bg_gradient col-span-2'>
                <Image
                    className='rounded-full w-[90%] h-[70vw] m-[5%] md:w-11/12 md:h-[32vw] md:m-[4.3%] bg-white object-cover'
                    src={image}
                    alt=''
                />
            </div>
            <div data-aos='fade-left' className='md:col-span-3'>
                <h2 className='text-6xl font-semibold'>
                    About
                    <span className='jm_special_font gradient_text ml-5'>
                        Me
                    </span>
                </h2>
                <h3 className='mt-1 text-xl font-semibold'>
                    I am a MERN Stack Developer
                </h3>
                <p className='my-5'>
                    I have been working in the web development field since 2021.
                    I have strong knowledge of HTML, CSS, JavaScript,
                    TypeScript, React.js, Next.js, Node.js, Express.js, and
                    MongoDB. I’m also skilled in popular CSS frameworks like
                    Bootstrap and Tailwind CSS. Recently, I completed several
                    MERN stack projects where I used Firebase, NextAuth, or JWT
                    for authentication; React.js, Next.js, and Tailwind CSS for
                    building user interfaces; and Express.js with Mongoose to
                    manage databases, using MongoDB as the primary database
                    solution. In addition, I have professional experience
                    working with two companies. I am also comfortable with
                    modern web development tools such as Git, GitHub, Figma,
                    Netlify, and Vercel. Now I am learn the SQL technology.
                </p>
                <Button>About Me</Button>
            </div>
        </div>
    );
};

export default About;
