import { Link } from "react-router-dom";
import TitleSection from "../../Components/TitleSection/TitleSection";

const About = () => {
  return (
    <div className="bg-[#F0F1F3] py-12">
      <div className="w-11/12 mx-auto">
        <TitleSection title={"About me"}></TitleSection>
        <div className="mt-4 space-y-2">
          <h3 className="text-2xl font-semibold">I am a Front-end Web Developer</h3>
          <p className="text-[#697484]">
            I am a front-end developer based sylhet, Bangladesh. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring ReactJS and planning to
            learn the backend technology. While I am not programming, I enjoy
            playing football, photography and playing Valorant. Learning more to
            improve skill. <Link to="/about" className="text-blue-600 link">View More</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
