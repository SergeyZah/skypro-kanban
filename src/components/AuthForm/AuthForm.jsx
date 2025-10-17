import { Link, useNavigate } from "react-router-dom";
import { BG, ButtonForm, FormBlock, FormGroup, InputComponent, InputWrapper, Modal, Title, Wrapper } from "./AuthForm.styled";

export const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true)
    navigate("/");
  };
  return (
    <BG>
      <Modal>
        <Wrapper>
          <Title>{isSignUp ? "Регистрация" : "Вход"}</Title>
          <FormBlock id="form" action="#">
            <InputWrapper>
              {isSignUp && (
                <InputComponent
                  tag="input"
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                />
              )}
              <InputComponent
                tag="input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <InputComponent
                tag="input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
            </InputWrapper>

            <ButtonForm
              onClick={handleLogin}
              type="secondary"
              className="button-enter"
            >
              {isSignUp ? "Зарегистрироваться" : "Войти"}
            </ButtonForm>
            {!isSignUp && (
              <FormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/register">Регистрируйтесь здесь</Link>
              </FormGroup>
            )}
            {isSignUp && (
              <FormGroup>
                <p>Уже есть аккаунт?</p>
                <Link to="/login">Войдите здесь</Link>
              </FormGroup>
            )}
          </FormBlock>
        </Wrapper>
      </Modal>
    </BG>
  );
};
