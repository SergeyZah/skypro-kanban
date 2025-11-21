import styled from "styled-components";

export const CardItem = styled.div`
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgba(40, 40, 52, 1);" : "#fff"};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardDate = styled.div`
  width: 58px;
  height: 13px;
  background: linear-gradient(
    90deg,
    rgba(193.25848388671875, 204.71737670898438, 219.99583435058594, 1),
    rgba(233.0180206298828, 237.53041076660156, 246.55517578125, 1) 46%,
    rgba(193, 205, 220, 1) 97%
  );
`;

export const CardBtn = styled.div`
  width: 18px;
  height: 4px;
  background: linear-gradient(
    90deg,
    rgba(193.25848388671875, 204.71737670898438, 219.99583435058594, 1),
    rgba(233.0180206298828, 237.53041076660156, 246.55517578125, 1) 46%,
    rgba(193, 205, 220, 1) 97%
  );
`;

export const CardTheme = styled.div`
  width: 82px;
  height: 20px;
  border-radius: 18px;
  background: linear-gradient(
    90deg,
    rgba(193.25848388671875, 204.71737670898438, 219.99583435058594, 1),
    rgba(233.0180206298828, 237.53041076660156, 246.55517578125, 1) 46%,
    rgba(193, 205, 220, 1) 97%
  );
`;

export const CardTitle = styled.h3`
  width: 113px;
  height: 13px;
  background: linear-gradient(
    90deg,
    rgba(193.25848388671875, 204.71737670898438, 219.99583435058594, 1),
    rgba(233.0180206298828, 237.53041076660156, 246.55517578125, 1) 46%,
    rgba(193, 205, 220, 1) 97%
  );
`;
