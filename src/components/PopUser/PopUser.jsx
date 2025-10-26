import { useNavigate } from "react-router-dom";
import {
  PopUserSet,
  PopUserSetButton,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
} from "./PopUser.styled";
import { useState } from "react";

export function PopUser($isVisible) {
  const [isVisiblePopUser, setVisiblePopUser] = useState($isVisible);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userName = userInfo?.name || "Пользователь";
  const userLogin = userInfo?.login || "Эл. почта";

  const navigate = useNavigate();
  const OpenExit = () => {
    navigate("/exit");
    setVisiblePopUser(!$isVisible)
  };

  return isVisiblePopUser && (
    <>
      <PopUserSet id="user-set-target">
        <PopUserSetName>{userName}</PopUserSetName>
        <PopUserSetMail>{userLogin}</PopUserSetMail>
        <PopUserSetTheme>
          <p>Темная тема</p>
          <input type="checkbox" className="checkbox" name="checkbox"></input>
        </PopUserSetTheme>
        <PopUserSetButton onClick={OpenExit} type="button" className="_hover03">
          Выйти
        </PopUserSetButton>
      </PopUserSet>
    </>
  );
}
