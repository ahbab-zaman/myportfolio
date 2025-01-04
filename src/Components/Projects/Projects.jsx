import { AiFillGithub } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = ({ image, title, subTitle, year, role, link1, link2 }) => {
  return (
    <div className="flex items-center gap-8 mb-8">
      <div className="w-1/2 bg-[#e2eff95e]  py-14 px-6 rounded-xl">
        <img className="w-full rounded-xl" src={image} alt="cover-photo" />
      </div>
      <div className="w-1/2">
        <div className="space-y-2 mb-2">
          <h2 className="text-2xl font-semibold ">{title}</h2>
          <p className="text-[#87909D]">{subTitle}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Project Info</h4>
          <div className="divider"></div>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Year</h4>
            <p className="font-semibold">{year}</p>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Role</h4>
            <p className="text-lg font-bold">{role}</p>
          </div>
          <div className="divider"></div>
        </div>

        <div className="flex items-center gap-6">
          <Link
            to={link1}
            className="font-semibold text-[#A53DFF] flex items-center gap-[4px] link"
          >
            Live Demo
            <FaLocationArrow></FaLocationArrow>
          </Link>
          <Link
            to={link2}
            className="font-semibold text-[#A53DFF] flex items-center gap-[4px] link"
          >
            GitHub Repo
            <AiFillGithub></AiFillGithub>
          </Link>
        </div>
        <div className="mt-3">
          <button className="bg-[#A53DFF] text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold hover:bg-[#333333] hover:text-[#ddd] hover:transition-colors hover:duration-500">
            View Details{" "}
            <CgDetailsMore className="text-xl"></CgDetailsMore>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
