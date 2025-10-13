import { Link, useNavigate } from "react-router-dom";

export const AuthForm = ({ isSignUp }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="bg">
      <div className="modal">
        <div className="logo">Skypro-kanban</div>
        <div className="wrapper">
          <h2 className="title">{isSignUp ? "Регистрация" : "Вход"}</h2>
          <form className="form" id="form" action="#">
            <div className="input-wrapper">
              {isSignUp && (
                <BaseInput
                  tag="input"
                  className="auth-input"
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                />
              )}
              <BaseInput
                tag="input"
                className="auth-input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <BaseInput
                tag="input"
                className="auth-input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
            </div>

            <BaseButton
              onClick={handleLogin}
              type="secondary"
              fullWidth={true}
              className="button-enter"
              text={isSignUp ? "Зарегистрироваться" : "Войти"}
            />
            {!isSignUp && (
              <div className="form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to="/sign-up">Регистрируйтесь здесь</Link>
              </div>
            )}
            {isSignUp && (
              <div className="form-group">
                <p>Уже есть аккаунт?</p>
                <Link to="/sign-in">Войдите здесь</Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
