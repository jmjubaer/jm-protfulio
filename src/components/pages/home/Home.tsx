"use client";
import About from "@/components/pages/home/About";
import Banner from "@/components/pages/home/banner/index.";
import Contact from "@/components/pages/home/contact";
import EducationAndExperience from "@/components/pages/home/EducationAndExperience";
import Projects from "@/components/pages/home/Projects";
import Service from "@/components/pages/home/Service";
import Skill from "@/components/pages/home/Skill";

const HomePage = () => {
    return (
        <div className='overflow-hidden'>
            <Banner />
            <About />
            <Skill />
            <Service />
            <Projects />
            <EducationAndExperience />
            <Contact />
        </div>
    );
};

export default HomePage;
