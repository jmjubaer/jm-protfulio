"use client";
import Banner from "@/components/pages/home/banner/index.";
import Contact from "@/components/pages/home/contact";
// import EducationAndExperience from "@/components/pages/home/EducationAndExperience";
import Projects from "@/components/pages/home/Projects";
// import Service from "@/components/pages/home/Service";
// import Skill from "@/components/pages/home/Skill";
// import About from "./About-old";
import AboutSection from "./About/index";
import SkillSection from "./skills/index";
import ExperienceSection from "./Experience";

const HomePage = () => {
    return (
        <div className='overflow-hidden'>
            <Banner />
            {/* <About /> */}
            <AboutSection />
            {/* <Skill /> */}
            <SkillSection />
            {/* <Service /> */}
            <Projects />
            {/* <EducationAndExperience /> */}
            <ExperienceSection />
            <Contact />
        </div>
    );
};

export default HomePage;
