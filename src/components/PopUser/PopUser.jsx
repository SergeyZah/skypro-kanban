import { Link } from "react-router-dom";
import { PopUserSet, PopUserSetButton, PopUserSetMail, PopUserSetName, PopUserSetTheme } from "./PopUser.styled";

export function PopUser() {

  return (
    <>
      <PopUserSet id="user-set-target">
        <PopUserSetName>Ivan Ivanov</PopUserSetName>
        <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
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
