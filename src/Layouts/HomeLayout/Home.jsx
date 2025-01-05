import About from "./About";
import Banner from "./Banner";
import Education from "./Education";
import FeaturedProjects from "./FeaturedProjects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="space-y-12">
           <Banner></Banner>
           <Skills></Skills>
           <Education></Education>
           <About></About>
           <FeaturedProjects></FeaturedProjects>
        </div>
    );
};

export default Home;