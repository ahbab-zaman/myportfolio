import { MdOutlineFileDownload } from "react-icons/md";
import bannerImg from "../../assets/portfolioImg.jpg";
import facebook from "../../assets/fb.png";
import github from "../../assets/gh.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#fff] to-[#fbd8ff3c] py-6">
      <div className="hero w-11/12 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="relative ">
            <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="absolute w-3/4 mx-auto left-14 rounded-xl -bottom-4 bg-[#F0F1F3] p-3 flex justify-around items-center shadow-xl">
              <Link to="https://www.facebook.com/profile.php?id=100015172482884&mibextid=ZbWKwL">
                <img className="w-8" src={facebook} alt="" />
              </Link>
              <Link to="https://github.com/ahbab-zaman">
                {" "}
                <img className="w-8" src={github} alt="" />
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-5xl leading-[60px] font-bold">
              Hello, I'm <br />
              Ahbab Uz Zaman
            </h1>
            <p className="py-6 w-3/4 text-justify">
              I'm a Junior Web Developer based in Sylhet, Bangladesh. I strives
              to build immersive and beautiful web applications through
              carefully crafted code and user-centric design.
            </p>
            <button className="bg-[#A53DFF] text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold">
              Resume{" "}
              <MdOutlineFileDownload className="text-xl"></MdOutlineFileDownload>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
