import Banner from "@/components/pages/home/Banner";
import About from "@/components/pages/home/About";
import Skill from "@/components/pages/home/Skill";
import Service from "@/components/pages/home/Service";
import Projects from "@/components/pages/home/Projects";
import Contact from "@/components/pages/home/Contact";
import EducationAndExperience from "@/components/pages/home/EducationAndExperience";


const HomePage = () => {
    return (
        <div className="overflow-hidden">
            <Banner />
            <About />
            <Skill />
            <Service />
            <Projects />
            <EducationAndExperience/>
            <Contact />
        </div>
    );
};

export default HomePage;
