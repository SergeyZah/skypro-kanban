import { useNavigate } from "react-router-dom";
import {
  PopUserSet,
  PopUserSetButton,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
} from "./PopUser.styled";
import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

export function PopUser($isVisible) {
  const [isVisiblePopUser, setVisiblePopUser] = useState($isVisible);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userName = userInfo?.name || "Пользователь";
  const userLogin = userInfo?.login || "Эл. почта";

  const { isDarkTheme, setIsDarkTheme} = useContext(TaskContext)

  const navigate = useNavigate();
  const OpenExit = () => {
    navigate("/exit");
    setVisiblePopUser(!$isVisible)
  };

  const handleDarkTheme = () => {
    if (!isDarkTheme) setIsDarkTheme(true)
      else setIsDarkTheme(false)
  }

  console.log(isDarkTheme)

  return isVisiblePopUser && (
    <>
      <PopUserSet isDarkTheme={isDarkTheme} id="user-set-target">
        <PopUserSetName isDarkTheme={isDarkTheme}>{userName}</PopUserSetName>
        <PopUserSetMail isDarkTheme={isDarkTheme}>{userLogin}</PopUserSetMail>
        <PopUserSetTheme isDarkTheme={isDarkTheme} onClick={handleDarkTheme}>
          <p>Темная тема</p>
          <input type="checkbox" className="checkbox" name="checkbox"></input>
        </PopUserSetTheme>
        <PopUserSetButton isDarkTheme={isDarkTheme} onClick={OpenExit} type="button" className="_hover03">
          Выйти
        </PopUserSetButton>
      </PopUserSet>
    </>
  );
}
