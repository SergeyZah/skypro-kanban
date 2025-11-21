import { useNavigate } from "react-router-dom";
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundText,
  NotFoundLink,
} from "./NotFound.styled";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
  }
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>Страница не найдена</NotFoundText>
      <NotFoundLink onClick={handleClick}>Вернитесь на главную</NotFoundLink>
    </NotFoundContainer>
  );
};