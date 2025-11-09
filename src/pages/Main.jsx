import { Content } from "../components/Content";
import { Loader } from "../components/Loader";
import { Outlet } from "react-router-dom";

export const MainPage = () => {

  return (
    <>
      <div className="wrapper">
        <Loader/>
        <Content/>
        <Outlet />
      </div>
    </>
  );
};
