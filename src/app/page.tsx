// "use client";
// import dynamic from "next/dynamic";

// import Home from "@/components/pages/home";
import About from "@/components/pages/home/About";
import Banner from "@/components/pages/home/banner/index.";
import Contact from "@/components/pages/home/contact";
import EducationAndExperience from "@/components/pages/home/EducationAndExperience";
import Projects from "@/components/pages/home/Projects";
import Service from "@/components/pages/home/Service";
import Skill from "@/components/pages/home/Skill";
import { getAllProjects } from "@/services/projectServices";
import { getSkills } from "@/services/skillServices";

// const HomeComponent = dynamic(() => import("../components/pages/home/index"), {
//     ssr: false,
// });
const HomePage = async () => {
    const { data:skills } = await getSkills();
    const { data: projects } = await getAllProjects([
        { name: "page", value: 1 },
        { name: "limit", value: 3 },
        { name: "sort", value: "serial" },
    ]);
    return (
        <div className='overflow-hidden'>
            <Banner />
            <About />
            <Skill skills={skills} />
            <Service />
            <Projects projects={projects}/>
            <EducationAndExperience />
            <Contact />
        </div>
    );
};

export default HomePage;
