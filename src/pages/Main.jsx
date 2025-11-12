import styled from "styled-components";
import { Content } from "../components/Content";
import { Loader } from "../components/Loader";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: ${({ isDarkTheme }) =>
    isDarkTheme ? "rgba(21, 20, 25, 1);;" : "rgba(234, 238, 246, 1)"};
`;

export const MainPage = () => {
  const { isDarkTheme } = useContext(TaskContext)
  return (
    <>
      <Wrapper isDarkTheme={isDarkTheme}>
        <Loader />
        <Content />
        <Outlet />
      </Wrapper>
    </>
  );
};
