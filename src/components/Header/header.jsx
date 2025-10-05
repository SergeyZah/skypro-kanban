import { useState } from "react";
import { PopUser } from "../PopUser/PopUser";

export function Header() {
  const [isVisible, setVisible] = useState(false)
  const onClick = () => {
    if (isVisible) setVisible(false);
    else setVisible(true)
  } 
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__block">
            <div className="header__logo _show _light">
              <a href="" target="_self">
                <img src="images/logo2.png" alt="logo"></img>
              </a>
            </div>
            <div className="header__logo _dark">
              <a href="" target="_self">
                <img src="images/logo_dark.png" alt="logo"></img>
              </a>
            </div>
            <nav className="header__nav">
              <button className="header__btn-main-new _hover01" id="btnMainNew">
                <a href="#popNewCard">Создать новую задачу</a>
              </button>
              <a
                href="#user-set-target"
                className="header__user _hover02"
                onClick={onClick}
              >
                Ivan Ivanov
              </a>
              {isVisible && <PopUser />}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
