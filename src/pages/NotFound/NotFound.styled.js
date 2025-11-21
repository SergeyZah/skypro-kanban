import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Занимаем всю высоту viewport */
  background-color:rgba(234, 238, 246, 1);
  color: #333;
  font-family: Arial, sans-serif;
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: 8em;
  margin-bottom: 0.1em;
  color: rgba(148, 166, 190, 1);
`;

export const NotFoundText = styled.p`
  font-size: 1.5em;
  color: rgba(148, 166, 190, 1);
`;

export const NotFoundLink = styled.p`
  font-size: 1em;
  color: rgba(148, 166, 190, 1);
  text-decoration: underline;

  &:hover {
    color:rgb(120, 13, 173);
    cursor: pointer;
  }
`;