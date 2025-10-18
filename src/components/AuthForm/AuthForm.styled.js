import styled from "styled-components";

export const BG = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: rgba(234, 238, 246, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 368px;
  height: 329px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px 60px 50px 60px;
  box-sizing: border-box;
  border: 0.7px solid rgba(212, 219, 229, 1);
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
`;

export const Wrapper = styled.div`
  width: 248px;
  height: 229px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
`;

export const FormBlock = styled.form`
  width: 248px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 248px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const InputComponent = styled.input`
  width: 248px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10;
  padding: 8px 10px 8px 10px;
  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
`;

export const ButtonForm = styled.button`
  width: 248px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px 8px 10px;
  border-radius: 4px;
  background: rgba(86, 94, 239, 1);
  color: rgba(255, 255, 255, 1);
  font-family: Roboto;
  border: none;
`;

export const FormGroup = styled.div`
  width: 230px;
  height: 42px;
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    text-decoration: underline;
  }
`;
