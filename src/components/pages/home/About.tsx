"use client"
import image from "@/assets/my-image-2.png";
import Button from "@/components/ui/Button";
import Image from "next/image";
const About = () => {
    return (
        <div
            id="about"
            className="grid md:grid-cols-5 overflow-hidden gap-14 jm_container items-center pt-28 md:pt-0"
        >
            <div
                data-aos="fade-right"
                className="rounded-full mx-auto w-4/5 md:w-full bg_gradient col-span-2"
            >
                <Image
                    className="rounded-full w-[90%] h-[70vw] m-[5%] md:w-11/12 md:h-[32vw] md:m-[4.3%] bg-white object-cover"
                    src={image}
                    alt=""
                />
            </div>
            <div data-aos="fade-left" className="md:col-span-3">
                <h2 className="text-6xl font-semibold">
                    About
                    <span className="jm_special_font gradient_text ml-5">
                        Me
                    </span>
                </h2>
                <h3 className="mt-1 text-xl font-semibold">
                    I am a Front End Developer
                </h3>
                <p className="my-5">
                    I am working in the web development field since 2021. I have
                    good knowledge in HTML, CSS, JavaScript, React js, Node js,
                    Express js, Firebase and MongoDB, etc. I also have good
                    skills in popular CSS frameworks Bootstrap and Tailwind.
                    Recently I complete some MERN stack project. In those
                    projects, I use Firebase for authentication, use React and
                    Tailwind CSS for UI Design and use Express Js to manage the
                    Database as Database I use MongoDB. I am also comfortable
                    with web development tools like Git, GitHub, Figma, netlify,
                    and Vercel.
                </p>
                <Button>About Me</Button>
            </div>
        </div>
    );
};

export default About;
