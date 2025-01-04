import Projects from "../../Components/Projects/Projects";
import TitleSection from "../../Components/TitleSection/TitleSection";
import cover1 from "../../assets/cover1.png";
import cover2 from "../../assets/cover2.png";
import cover3 from "../../assets/cover3.png";

const FeaturedProjects = () => {
  return (
    <div className="w-11/12 mx-auto space-y-12">
      <TitleSection
        title="featured projects"
        subTitle="Here are some of the selected projects that showcase my passion for front-end development."
      ></TitleSection>

      <div>
        <Projects
          image={cover1}
          title="Career Counseling Web Application"
          subTitle="Teamed up with a designer to breathe life into a promotional webpage........"
          year="2024"
          role={"Front-end Developer"}
          link1={"https://careerquest12.netlify.app"}
          link2={
            "https://github.com/programming-hero-web-course1/b10-a9-authentication-ahbab-zaman"
          }
        ></Projects>

        <Projects
          image={cover2}
          title="Sports Equipment Web Application"
          subTitle="The main purpose is to create a simple sports related web application......."
          year="2024"
          role={"Front-end Developer"}
          link1={"https://simple-firebase-2cb6e.firebaseapp.com"}
          link2={
            "https://github.com/programming-hero-web-course2/b10-a10-client-side-ahbab-zaman"
          }
        ></Projects>

        <Projects
          image={cover3}
          title="A Recommendation Platform"
          subTitle="A simple recommendation web application where user can review and add their query....."
          year="2024"
          role={"Front-end Developer"}
          link1={"https://recommendation-platform-1f3cf.web.app/"}
          link2={
            "https://github.com/programming-hero-web-course2/b10a11-client-side-ahbab-zaman"
          }
        ></Projects>
      </div>
    </div>
  );
};

export default FeaturedProjects;
