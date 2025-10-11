import { useState } from "react";
import { PopUser } from "../PopUser/PopUser.jsx";
import {
  HeaderS,
  HeaderBlock,
  HeaderNav,
  HeaderButtonMainNew,
  HeaderLogo,
} from "./Header.styled.js";
import { Container } from "../Main/Main.styled.js";

export function Header() {
  const [isVisible, setVisible] = useState(false);
  const onClick = () => {
    if (isVisible) setVisible(false);
    else setVisible(true);
  };
  return (
    <>
      <HeaderS>
        <Container>
          <HeaderBlock>
            <div className=" _show _light">
              <a href="" target="_self">
                <HeaderLogo src="images/logo2.png" alt="logo"/>
              </a>
            </div>
            <div className=" _dark">
              <a href="" target="_self">
                <HeaderLogo src="images/logo_dark.png" alt="logo"/>
              </a>
            </div>
            <HeaderNav>
              <HeaderButtonMainNew id="btnMainNew">
                <a href="#popNewCard">Создать новую задачу</a>
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
