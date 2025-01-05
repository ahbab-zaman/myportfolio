import { MdOutlineMail } from "react-icons/md";
import TitleSection from "../../Components/TitleSection/TitleSection";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { TbLocationFilled } from "react-icons/tb";

const ContactMe = () => {
  return (
    <div className="py-12">
      <TitleSection title="let's contact"></TitleSection>
      <div className="lg:w-3/4 w-11/12 mx-auto bg-[#ffffff59] my-6 flex lg:flex-row flex-col  gap-4 p-12 shadow-2xl rounded-xl">
        <div className="space-y-4">
          <h3 className="text-gray-500">
            If you want to contact me here are my personal credentials:
          </h3>
          <div className="flex items-center gap-2 hover:shadow-xl hover:transition-all hover:duration-500 p-4 rounded-lg">
            <h3 className="bg-[#A53DFF] text-white p-2 rounded-lg">
              <HiOutlineLocationMarker></HiOutlineLocationMarker>
            </h3>
            <div>
              <h4 className="text-gray-500">Address: </h4>
              <h3 className="font-semibold">Subid Bazar, Sylhet</h3>
            </div>
          </div>

          <div className="flex items-center gap-2 hover:shadow-xl hover:transition-all hover:duration-500 p-4 rounded-lg">
            <h3 className="bg-[#A53DFF] text-white p-2 rounded-lg">
              <MdOutlineMail></MdOutlineMail>
            </h3>
            <div>
              <h4 className="text-gray-500">Email: </h4>
              <h3 className="font-semibold">ahbabtahmim@gmail.com</h3>
            </div>
          </div>

          <div className="flex items-center gap-2 hover:shadow-xl hover:transition-all hover:duration-500 p-4 rounded-lg">
            <h3 className="bg-[#A53DFF] text-white p-2 rounded-lg">
              <FaPhone></FaPhone>
            </h3>
            <div>
              <h4 className="text-gray-500">Contact: </h4>
              <h3 className="font-semibold">01569118531</h3>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full space-y-2">
          <h3 className="font-semibold">Send me your details:</h3>
          <label className="form-control w-full">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="bg-gray-100 p-3 rounded-lg w-full"
            />
            <div className="label"></div>
          </label>

          <label className="form-control mt-3 w-full">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-gray-100 p-3 rounded-lg w-full"
            />
            <div className="label"></div>
          </label>

          <label className="form-control mt-3 w-full">
            <input
              type="text"
              placeholder="Subject"
              className="bg-gray-100 p-3 rounded-lg w-full"
            />
            <div className="label"></div>
          </label>

          <textarea
            className="textarea textarea-accent w-full resize-none border-none bg-gray-100 p-3 rounded-lg"
            placeholder="Message"
          ></textarea>
          <button className="flex items-center gap-2 bg-[#A53DFF] px-4 py-2 text-white rounded-xl font-semibold">Submit <TbLocationFilled></TbLocationFilled></button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
