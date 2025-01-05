import TitleSection from "../../Components/TitleSection/TitleSection";

const Skills = () => {
  return (
    <div className="w-11/12 mx-auto">
      <TitleSection title={"skills"}></TitleSection>
      <div className="">
        <h2 className="text-[#87909D] w-5/6 mx-auto text-center">
          I am always looking for new technology. Now I am still learning web
          development. These are my current skills based on my learning and beginner experience
        </h2>
        <div className="flex justify-start items-center gap-3 flex-wrap lg:w-1/2 w-full mx-auto my-6">
          <span className="flex items-center justify-center gap-1 text-lg font-semibold border rounded-full p-2 w-28 hover:border hover:border-black hover:transition-all hover:duration-300 cursor-pointer">
            HTML{" "}
            <img
              className="w-7"
              src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
              alt=""
            />
          </span>
          <span className="flex items-center justify-center gap-1 text-lg font-semibold border rounded-full p-2 w-28 hover:border hover:border-black hover:transition-all hover:duration-300 cursor-pointer">
            CSS
            <img
              className="w-7"
              src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
              alt=""
            />
          </span>
          <span className="flex items-center justify-center gap-1 text-lg font-semibold border rounded-full p-2 w-28 hover:border hover:border-black hover:transition-all hover:duration-300 cursor-pointer">
            JS
            <img
              className="w-7"
              src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
              alt=""
            />
          </span>
          <span className="flex items-center justify-center gap-1 text-lg font-semibold border rounded-full p-2 w-28 hover:border hover:border-black hover:transition-all hover:duration-300 cursor-pointer">
            React
            <img
              className="w-7"
              src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
              alt=""
            />
          </span>
          <span className="flex items-center justify-center gap-1 text-lg font-semibold border rounded-full p-2 w-28 hover:border hover:border-black hover:transition-all hover:duration-300 cursor-pointer">
            React
            <img
              className="w-7"
              src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
              alt=""
            />
          </span>

          <span className="flex items-center justify-center gap-1 text-lg font-semibold border rounded-full p-2 w-32 hover:border hover:border-black hover:transition-all hover:duration-300 cursor-pointer">
            Firebase
            <img
              className="w-7"
              src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000"
              alt=""
            />
          </span>
          <span className="flex items-center justify-center gap-1 text-lg font-semibold border rounded-full p-2 w-32 hover:border hover:border-black hover:transition-all hover:duration-300 cursor-pointer">
            MongoDB
            <img
              className="w-7"
              src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
              alt=""
            />
          </span>
          <span className="flex items-center justify-center gap-1 text-lg font-semibold border rounded-full p-2 w-36 hover:border hover:border-black hover:transition-all hover:duration-300 cursor-pointer">
            Node JS
            <img
              className="w-7"
              src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
