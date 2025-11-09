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

export function PopExit() {
  const navigate = useNavigate();

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
          <PopExitBlock>
            <PopExitTitle>
              <h2>Выйти из аккаунта?</h2>
            </PopExitTitle>
            <PopExitForm id="formExit" action="#">
              <PopExitFormGroup>
                <PopExitYes onClick={YesExit} id="exitYes">
                  Да, выйти
                </PopExitYes>
                <PopExitNo onClick={NoExit} id="exitNo">
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
