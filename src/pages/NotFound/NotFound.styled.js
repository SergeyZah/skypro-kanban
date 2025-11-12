import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Занимаем всю высоту viewport */
  background-color: #f7f7f7;
  color: #333;
  font-family: Arial, sans-serif;
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: 8em;
  margin-bottom: 0.1em;
  color: #000000;
`;

export const NotFoundText = styled.p`
  font-size: 1.5em;
  color: #000000;
`;

export const NotFoundLink = styled.p`
  font-size: 1em;
  color: #000000;

  &:hover {
    color: #33399b;
    cursor: pointer;
  }
`;