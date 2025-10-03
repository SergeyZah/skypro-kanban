import { useState } from "react";
import { PopUser } from "../PopUser/PopUser";

export function Header() {
  const [style, setStyle] = useState("header__pop-user-set pop-user-set");
  const onClick = () => {
    if (style === "header__pop-user-set pop-user-set") setStyle("header__pop-user-set-block pop-user-set");
    else setStyle("header__pop-user-set pop-user-set")
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
              <PopUser style={style}/>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
