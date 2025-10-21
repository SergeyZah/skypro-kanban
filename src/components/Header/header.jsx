import { useState } from "react";
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

export function Header() {
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
      <HeaderS>
        <Container>
          <HeaderBlock>
            <div className="_show _light">
              <a href="" target="_self">
                <HeaderLogo src="images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="_dark">
              <a href="" target="_self">
                <HeaderLogo src="images/logo_dark.png" alt="logo" />
              </a>
            </div>
            <HeaderNav>
              <HeaderButtonMainNew
                id="btnMainNew"
                onClick={openPopNewCardModal}
              >
                Создать новую задачу
              </HeaderButtonMainNew>
              <HeaderUser onClick={onClick}>{userName}</HeaderUser>
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
