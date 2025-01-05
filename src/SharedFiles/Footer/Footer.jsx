import { Link } from "react-router-dom";
import facebook from "../../assets/fb.png";
import logo from "../../assets/icons8-code-50.png"
import g from "../../assets/gh.png";
const Footer = () => {
  return (
    <footer className="footer bg-[#2B384C] text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
       <h3 className="w-10 h-10 flex justify-center items-center rounded-full bg-[#fff] text-xl text-black font-semibold">A</h3>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link to="https://www.facebook.com/profile.php?id=100015172482884&mibextid=ZbWKwL">
          <img
            className="w-8 hover:border hover:border-black hover:rounded-full hover:p-1 hover:transition-all hover:duration-300"
            src={facebook}
            alt=""
          />
        </Link>
        <Link to="https://github.com/ahbab-zaman">
          {" "}
          <img
            className="w-8 hover:border hover:border-black hover:rounded-full hover:p-1 hover:transition-all hover:duration-300"
            src={g}
            alt=""
          />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
