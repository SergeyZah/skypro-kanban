import styled from "styled-components";

export const PopBrowseS = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgba(40, 40, 52, 1)" : "#fff"};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid
    ${({ $isDarkTheme }) => ($isDarkTheme ? "rgba(78, 85, 102, 1)" : "#d4dbe5")};
  position: relative;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesTheme = styled.div`
  width: auto;
  height: 15px;
  font-size: 14px;
  font-weight: 250;
  text-align: center;
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;

  &.card__theme--orange {
    background-color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? "rgba(255, 109, 0, 1)" : "rgba(255, 228, 194, 1)"};
    p {
      color: ${({ $isDarkTheme }) =>
        $isDarkTheme ? "rgba(255, 228, 194, 1)" : "rgba(255, 109, 0, 1)"};
    }
  }

  &.card__theme--green {
    background-color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? "rgba(6, 177, 110, 1)" : "rgba(180, 253, 209, 1)"};
    p {
      color: ${({ $isDarkTheme }) =>
        $isDarkTheme ? "rgba(180, 253, 209, 1)" : "rgba(6, 177, 110, 1)"};
    }
  }

  &.card__theme--purple {
    background-color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? "rgba(154, 72, 241, 1)" : "rgba(233, 212, 255, 1)"};
    p {
      color: ${({ $isDarkTheme }) =>
        $isDarkTheme ? "rgba(233, 212, 255, 1)" : "rgba(154, 72, 241, 1)"};
    }
  }
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const PopBrowseStatusSubtitle = styled.p`
  font-weight: 600;
  margin-bottom: 14px;
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
`;

export const StatusThemes = styled.div``;

export const StatusTheme = styled.div`
  max-width: 136px;
  max-height: 37px;
  background-color: ${({ $isActive }) =>
    $isActive ? "rgba(148, 166, 190)" : "#ffffff"};
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190);
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "rgba(148, 166, 190)")};
  padding: 10px 16px 10px;
  cursor: pointer;
  text-align: center;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const StatusThemeSelected = styled.div`
  max-width: 136px;
  max-height: 37px;
  background-color: ${({ $isActive }) =>
    $isActive ? "rgba(148, 166, 190)" : "#ffffff"};
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190);
  color: ${({ $isActive, $isDarkTheme }) => ($isActive ? ($isDarkTheme ? "rgba(21, 20, 25, 1)" : "#fff") : ($isDarkTheme ? "rgba(148, 166, 190, 1)" : "rgba(148, 166, 190, 1)"))};
  padding: 10px 16px 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  text-align: center;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowseForm = styled.form`
  width: 100%;
  display: block;
  margin-bottom: 20px;
  display: flex;
  gap: 21px;
`;

export const FormBrowseBlock = styled.div`
  width: 100%;
`;

export const SubTitle = styled.label`
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ $isDarkTheme, disabled }) =>
    $isDarkTheme ? (disabled ? "rgba(21, 20, 25, 1)" : "rgba(40, 40, 52, 1)") : (disabled ? "rgba(234, 238, 246, 1)" : "#fff")};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: rgba(148, 166, 190, 1);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
`;

export const ThemeDownCategories = styled.div`
  display: none;
  margin-bottom: 20px;
`;

export const CategoriesP = styled.p`
  margin-bottom: 14px;
`;

export const ThemeDownCategoriesTheme = styled.p`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
`;

export const PopBrowseThemeDown = styled.div`
  display: none;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const ButtonBrowse = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const ActionButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const ButtonBrowseEdit = styled.button`
  border-radius: 4px;
  border: 0.7px solid
    var(
      --palette-navy-60,
      ${({ $isDarkTheme }) =>
        $isDarkTheme ? "rgba(255, 255, 255, 1)" : "#565eef"}
    );
  outline: none;
  background: transparent;
  color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgba(255, 255, 255, 1)" : "#565eef"};
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: -1%;
  text-align: center;
  padding: 10px 14px;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
    border: 0.7px solid var(--palette-navy-60, #33399b);
  }
`;

export const ButtonBrowseDelete = styled.button`
  border-radius: 4px;
  border: 0.7px solid
    var(
      --palette-navy-60,
      ${({ $isDarkTheme }) =>
        $isDarkTheme ? "rgba(255, 255, 255, 1)" : "#565eef"}
    );
  outline: none;
  background: transparent;
  color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgba(255, 255, 255, 1)" : "#565eef"};
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: -1%;
  text-align: center;
  padding: 10px 14px;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
    border: 0.7px solid var(--palette-navy-60, #33399b);
  }
`;

export const ButtonBrowseClose = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: 0%;
  text-align: center;
  padding: 10px 14px;

  &:hover {
    background-color: #33399b;
  }
`;

export const ButtonEdit = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonEditSave = styled.button`
  border-radius: 4px;
  border: 0.7px solid
    var(
      --palette-navy-60,
      ${({ $isDarkTheme }) =>
        $isDarkTheme ? "rgba(255, 255, 255, 1)" : "#565eef"}
    );
  outline: none;
  background: transparent;
  color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgba(255, 255, 255, 1)" : "#565eef"};
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: -1%;
  text-align: center;
  padding: 10px 14px;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
    border: 0.7px solid var(--palette-navy-60, #33399b);
  }
`;

export const ButtonEditCancel = styled.button`
  border-radius: 4px;
  border: 0.7px solid
    var(
      --palette-navy-60,
      ${({ $isDarkTheme }) =>
        $isDarkTheme ? "rgba(255, 255, 255, 1)" : "#565eef"}
    );
  outline: none;
  background: transparent;
  color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgba(255, 255, 255, 1)" : "#565eef"};
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: -1%;
  text-align: center;
  padding: 10px 14px;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
    border: 0.7px solid var(--palette-navy-60, #33399b);
  }
`;
