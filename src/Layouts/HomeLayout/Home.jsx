import Banner from "./Banner";
import FeaturedProjects from "./FeaturedProjects";

const Home = () => {
    return (
        <div className="space-y-12">
           <Banner></Banner>
           <FeaturedProjects></FeaturedProjects>
        </div>
    );
};

export default Home;