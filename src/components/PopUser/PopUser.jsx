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

  const { isDarkTheme, setIsDarkTheme, websiteTheme } = useContext(TaskContext);

  const navigate = useNavigate();
  const OpenExit = () => {
    navigate("/exit");
    setVisiblePopUser(!$isVisible);
  };

  const HandleDarkTheme = () => {
    if (isDarkTheme) {
      setIsDarkTheme(false);
    } else {
      setIsDarkTheme(true);
    }
  };

  return (
    isVisiblePopUser && (
      <>
        <PopUserSet $isDarkTheme={websiteTheme === "dark"} id="user-set-target">
          <PopUserSetName $isDarkTheme={websiteTheme === "dark"}>
            {userName}
          </PopUserSetName>
          <PopUserSetMail $isDarkTheme={websiteTheme === "dark"}>
            {userLogin}
          </PopUserSetMail>
          <PopUserSetTheme $isDarkTheme={websiteTheme === "dark"}>
            <p>Темная тема</p>
            <input
              onClick={HandleDarkTheme}
              type="checkbox"
              className="checkbox"
              name="checkbox"
            ></input>
          </PopUserSetTheme>
          <PopUserSetButton
            $isDarkTheme={websiteTheme === "dark"}
            onClick={OpenExit}
            type="button"
            className="_hover03"
          >
            Выйти
          </PopUserSetButton>
        </PopUserSet>
      </>
    )
  );
}
