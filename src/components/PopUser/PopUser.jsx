import { Link } from "react-router-dom";
import { PopUserSet, PopUserSetButton, PopUserSetMail, PopUserSetName, PopUserSetTheme } from "./PopUser.styled";

export function PopUser() {

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userName = userInfo?.name || "Пользователь";
  const userLogin = userInfo?.login || "Эл. почта";

  return (
    <>
      <PopUserSet id="user-set-target">
        <PopUserSetName>{userName}</PopUserSetName>
        <PopUserSetMail>{userLogin}</PopUserSetMail>
        <PopUserSetTheme>
          <p>Темная тема</p>
          <input
            type="checkbox"
            className="checkbox"
            name="checkbox"
          ></input>
        </PopUserSetTheme>
        <PopUserSetButton type="button" className="_hover03">
          <Link to="/exit">Выйти</Link>
        </PopUserSetButton>
      </PopUserSet>
    </>
  );
}
