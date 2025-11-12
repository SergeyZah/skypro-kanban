import { useNavigate } from "react-router-dom";
import {
  PopExitBlock,
  PopExitContainer,
  PopExitForm,
  PopExitFormGroup,
  PopExitNo,
  PopExitS,
  PopExitTitle,
  PopExitYes,
} from "./PopExit.styled";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export function PopExit() {
  const navigate = useNavigate();

  const { isDarkTheme } = useContext(TaskContext);

  const YesExit = () => {
    navigate("/login");
  };

  const NoExit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <PopExitS id="popExit">
        <PopExitContainer>
          <PopExitBlock isDarkTheme={isDarkTheme}>
            <PopExitTitle isDarkTheme={isDarkTheme}>
              <p>Выйти из аккаунта?</p>
            </PopExitTitle>
            <PopExitForm id="formExit" action="#">
              <PopExitFormGroup>
                <PopExitYes onClick={YesExit} id="exitYes">
                  Да, выйти
                </PopExitYes>
                <PopExitNo isDarkTheme={isDarkTheme} onClick={NoExit} id="exitNo">
                  Нет, остаться
                </PopExitNo>
              </PopExitFormGroup>
            </PopExitForm>
          </PopExitBlock>
        </PopExitContainer>
      </PopExitS>
    </>
  );
}
