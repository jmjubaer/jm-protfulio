import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Service from "./Service";
import Skill from "./Skill";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Skill/>
            <Service/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;