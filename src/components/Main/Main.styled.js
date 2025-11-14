import styled from "styled-components";

export const MainS = styled.main`
  width: 100%;
  background: ${({ $isDarkTheme }) => ($isDarkTheme ? "rgba(21, 20, 25, 1)" : "rgba(234, 238, 246, 1)")};
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 128px 0 135px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 40px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 19px;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const MainNull = styled.div`
  color: #94a6be;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;
