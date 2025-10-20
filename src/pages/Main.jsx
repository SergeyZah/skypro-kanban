import { Content } from "../components/Content";
import { Loader } from "../components/Loader";
import { Outlet } from "react-router-dom";

export const MainPage = ({ loading }) => {
  return (
    <>
      <div className="wrapper">
        <Loader loading={loading} />
        <Content loading={loading} />
        <Outlet />
      </div>
    </>
  );
};
