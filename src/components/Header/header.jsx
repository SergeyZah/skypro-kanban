import { useState } from "react";
import { PopUser } from "../PopUser/PopUser";
import {
  HeaderS,
  HeaderBlock,
  HeaderNav,
  HeaderButtonMainNew,
  HeaderLogo,
} from "./Header.styled.js";
import { Container } from "../Main/Main.styled.js";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const [isVisible, setVisible] = useState(false);
  const onClick = () => {
    if (isVisible) setVisible(false);
    else setVisible(true);
  };

  const navigate = useNavigate();

  const openPopNewCardModal = () => {
    navigate("/card-add");
  };

  return (
    <>
      <HeaderS>
        <Container>
          <HeaderBlock>
            <div className="_show _light">
              <a href="" target="_self">
                <HeaderLogo src="images/logo.png" alt="logo"/>
              </a>
            </div>
            <div className="_dark">
              <a href="" target="_self">
                <HeaderLogo src="images/logo_dark.png" alt="logo"/>
              </a>
            </div>
            <HeaderNav>
              <HeaderButtonMainNew id="btnMainNew" onClick={openPopNewCardModal}>
                Создать новую задачу
              </HeaderButtonMainNew>
              <a
                href="#user-set-target"
                className="header__user _hover02"
                onClick={onClick}
              >
                Ivan Ivanov
              </a>
              {isVisible && <PopUser />}
            </HeaderNav>
          </HeaderBlock>
        </Container>
      </HeaderS>
    </>
  );
}
