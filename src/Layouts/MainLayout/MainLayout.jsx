import { Outlet } from "react-router-dom";
import Navbar from "../../SharedFiles/Navbar/Navbar";
import Footer from "../../SharedFiles/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};
export default MainLayout;