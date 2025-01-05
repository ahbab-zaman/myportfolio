import aboutImg from "../../assets/aboutImg.jpg"
const AboutMe = () => {
  return (
    <div className="py-8">
      <div className="divider w-1/2 mx-auto text-4xl font-bold ">ABOUT ME</div>
      <div className="lg:w-3/4 w-11/12 mx-auto bg-gradient-to-r from-[#fff] to-[#f9cefea6] p-12 rounded-xl mt-6">
        <h2 className="text-3xl font-semibold my-4 flex items-center gap-2 ">Hi!! <img className="w-20 h-20 rounded-full" src={aboutImg} alt="" /></h2>
        <h3 className="text-[#697484]">
          My name is Ahbab UZ Zaman and I specialize in front-end development
          that utilizes HTML, CSS, JS, and REACT etc. I am a highly motivated
          individual and eternal optimist dedicated to writing clear, concise,
          robust code that works. Striving to never stop learning and improving.
          When I'm not coding, I am reading blogs on the internet, or playing
          outdoor games. I like to have my perspective and belief systems
          challenged so that I see the world through new eyes.
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;
