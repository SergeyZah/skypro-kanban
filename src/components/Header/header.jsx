import { useContext, useState } from "react";
import { PopUser } from "../PopUser/PopUser";
import {
  HeaderS,
  HeaderBlock,
  HeaderNav,
  HeaderButtonMainNew,
  HeaderLogo,
  HeaderUser,
  PopUserOverlay,
} from "./Header.styled.js";
import { Container } from "../Main/Main.styled.js";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext.js";

export function Header() {
  const { isDarkTheme } = useContext(TaskContext)
  const [isVisiblePopUser, setVisiblePopUser] = useState(false);
  const onClick = () => {
    setVisiblePopUser(!isVisiblePopUser);
  };

  const closePopUser = () => {
    setVisiblePopUser(false);
  };

  const navigate = useNavigate();

  const openPopNewCardModal = () => {
    navigate("/card-add");
  };

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userName = userInfo?.name || "Пользователь";

  return (
    <>
      <HeaderS isDarkTheme={isDarkTheme}>
        <Container>
          <HeaderBlock>
            <div>
              <a href="" target="_self">
                <HeaderLogo src={isDarkTheme ? "images/logo_dark.png" :"images/logo.png"} alt="logo" />
              </a>
            </div>
            <HeaderNav>
              <HeaderButtonMainNew
                id="btnMainNew"
                onClick={openPopNewCardModal}
              >
                Создать новую задачу
              </HeaderButtonMainNew>
              <HeaderUser isDarkTheme={isDarkTheme} onClick={onClick}>{userName}</HeaderUser>
              {isVisiblePopUser && (
                <PopUserOverlay onClick={closePopUser}>
                  <div onClick={(e) => e.stopPropagation()}>
                    <PopUser
                      $isVisible={isVisiblePopUser}
                      onClose={closePopUser}
                    />
                  </div>
                </PopUserOverlay>
              )}
            </HeaderNav>
          </HeaderBlock>
        </Container>
      </HeaderS>
    </>
  );
}
