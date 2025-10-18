import styled from "styled-components";

export const MainS = styled.main`
  width: 100%;
  background: rgba(234, 238, 246, 1);
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

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
