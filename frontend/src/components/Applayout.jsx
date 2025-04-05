import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div>
      <Navbar />
      {/* outlet is used for dynamic routing for childs */}
      <Outlet />
    </div>
  );
};

export default Applayout;
