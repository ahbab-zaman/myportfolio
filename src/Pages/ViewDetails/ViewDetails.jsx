import { AiFillGithub } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Technology from "../../Components/Technology/Technology";

const ViewDetails = () => {
  const projects = useLoaderData();
  const params = useParams();
  const singleProject = projects.find((project) => params.id == project.id);
  console.log(singleProject);
  const {
    project_name,
    description,
    image,
    year,
    role,
    technologies,
    live_link,
    repo_link,
    challenges,
  } = singleProject;
  return (
    <div className="container mx-auto py-12">
      <div className="flex py-4 items-start gap-12">
        <div className="w-1/2 bg-[#e2eff95e]  py-14 px-6 rounded-xl">
          <img className="w-full rounded-xl" src={image} alt="" />
        </div>

        <div className="w-1/2 space-y-3">
          <h2 className="text-xl font-semibold">
            Project Name: <span className="font-bold">{project_name}</span>
          </h2>
          <p className="text-xl font-semibold">
            Description:{" "}
            <span className="text-[#87909D] text-base">{description}</span>
          </p>
          <p className="text-xl font-semibold">
            Year: <span className="font-bold">{year}</span>
          </p>
          <p className="text-xl font-semibold">Creator Role: {role}</p>
          <Link
            to={live_link}
            className="font-semibold text-[#222] flex items-center gap-[4px] link"
          >
            Live Demo
            <MdLiveTv></MdLiveTv>
          </Link>
          <Link
            to={repo_link}
            className="font-semibold text-[#222] flex items-center gap-[4px] link"
          >
            GitHub Repo
            <AiFillGithub></AiFillGithub>
          </Link>
          <div className="flex items-center gap-2">
            {technologies.map((technology) => (
              <Technology technology={technology}></Technology>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-xl font-semibold">
          Challenges I faced:{" "}
          <span className="text-[#87909D]">{challenges}</span>
        </h4>
      </div>
    </div>
  );
};

export default ViewDetails;
