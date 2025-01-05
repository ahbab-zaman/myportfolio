import About from "./About";
import Banner from "./Banner";
import FeaturedProjects from "./FeaturedProjects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="space-y-12">
           <Banner></Banner>
           <Skills></Skills>
           <About></About>
           <FeaturedProjects></FeaturedProjects>
        </div>
    );
};

export default Home;