import styled from "styled-components";

export const MainColumn = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ColumnTitle = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: start;

  p {
    color: #94a6be;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
