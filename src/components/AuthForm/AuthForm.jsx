import { Link, useNavigate } from "react-router-dom";
import {
  BG,
  ButtonForm,
  FormBlock,
  FormGroup,
  InputComponent,
  InputWrapper,
  Modal,
  Title,
  Wrapper,
} from "./AuthForm.styled";
import { signIn, signUp } from "../../services/Auth";
import { useState } from "react";

export const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError("Заполните все поля");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        setIsAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <BG>
      <Modal>
        <Wrapper>
          <Title>{isSignUp ? "Регистрация" : "Вход"}</Title>
          <FormBlock id="form" action="#" onSubmit={handleSubmit}>
            <InputWrapper>
              {isSignUp && (
                <InputComponent
                  tag="input"
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <InputComponent
                tag="input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
              />
              <InputComponent
                tag="input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />
            </InputWrapper>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ButtonForm type="secondary">
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
