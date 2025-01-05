import TitleSection from "../../Components/TitleSection/TitleSection";

const Education = () => {
  return (
    <div className="w-11/12 mx-auto">
      <TitleSection title="education"></TitleSection>
      <div className="py-8 flex justify-between items-center gap-3">
        <div
          className="bg-[#2B384C] text-white py-5 px-8 space-y-2
                "
        >
          <h4 className="text-gray-500 text-center">-BBA-</h4>
          <h1 className="text-2xl font-bold">Modon Mohon College</h1>
          <p className="font-semibold">Still Studying</p>
          <p className="text-blue-500">2021-</p>
          <p className="font-semibold">Business Management</p>
        </div>
        <div
          className="bg-[#2B384C] text-white py-5 px-8 space-y-2
                "
        >
          <h4 className="text-gray-500 text-center">-HSC-</h4>
          <h1 className="text-2xl font-bold">Blue Bird High School & College</h1>
          <h3 className="font-semibold">GPA-4.67</h3>
          <p className="text-blue-500">2019-2021</p>
          <p className="font-semibold">Science</p>
        </div>
        <div
          className="bg-[#2B384C] text-white py-5 px-8 space-y-2
                "
        >
          <h4 className="text-gray-500 text-center">-SSC-</h4>
          <h1 className="text-2xl font-bold">Blue Bird High School & College</h1>
          <h3 className="font-semibold">GPA-4.22</h3>
          <p className="text-blue-500">2017-2019</p>
          <p className="font-semibold">Science</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
