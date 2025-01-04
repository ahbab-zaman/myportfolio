import axios from "axios";
import TitleSection from "../../Components/TitleSection/TitleSection";
import { useEffect, useState } from "react";
import Projects from "../../Components/Projects/Projects";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("./projects.json").then((res) => {
      console.log(res.data);
      setProjects(res.data);
    });
  }, []);

  return (
    <div className="w-11/12 mx-auto space-y-12">
      <TitleSection
        title="featured projects"
        subTitle="Here are some of the selected projects that showcase my passion for front-end development."
      ></TitleSection>

      <div>
        {projects.map((project) => (
          <Projects project={project} key={project.id}></Projects>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
