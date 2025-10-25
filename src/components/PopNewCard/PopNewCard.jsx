import { useNavigate } from "react-router-dom";
import { Calendar } from "../Calendar/calendar";

import {
  CategoriesTheme,
  CategoriesThemes,
  FormNewArea,
  FormNewBlock,
  FormNewCreate,
  FormNewInput,
  PopNewCardBlock,
  PopNewCardCategories,
  PopNewCardCategoriesParagraf,
  PopNewCardClose,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardS,
  PopNewCardTitle,
  PopNewCardWrap,
  SubTitle,
} from "./PopNewCard.styled";
import { useState } from "react";

export function PopNewCard() {
  const [category, setCategory] = useState("Web Design");
  const navigate = useNavigate();

  const onCloseModal = () => {
    navigate("/");
  };
  return (
    <>
      <PopNewCardS id="popNewCard">
        <PopNewCardContainer>
          <PopNewCardBlock>
            <PopNewCardContent>
              <PopNewCardTitle>Создание задачи</PopNewCardTitle>
              <PopNewCardClose onClick={onCloseModal}>&#10006;</PopNewCardClose>
              <PopNewCardWrap>
                <PopNewCardForm id="formNewCard" action="#">
                  <FormNewBlock>
                    <SubTitle htmlFor="formTitle">Название задачи</SubTitle>
                    <FormNewInput
                      type="text"
                      name="name"
                      id="formTitle"
                      placeholder="Введите название задачи..."
                      autoFocus
                    ></FormNewInput>
                  </FormNewBlock>
                  <FormNewBlock>
                    <SubTitle htmlFor="textArea">Описание задачи</SubTitle>
                    <FormNewArea
                      name="text"
                      id="textArea"
                      placeholder="Введите описание задачи..."
                    ></FormNewArea>
                  </FormNewBlock>
                </PopNewCardForm>
                <Calendar></Calendar>
              </PopNewCardWrap>
              <PopNewCardCategories>
                <PopNewCardCategoriesParagraf>
                  Категория
                </PopNewCardCategoriesParagraf>
                <CategoriesThemes>
                  <CategoriesTheme
                    onClick={() => setCategory("Web Design")}
                    className={`_orange ${
                      category === "Web Design" ? "_active-category" : ""
                    }`}
                  >
                    <p className="_orange">Web Design</p>
                  </CategoriesTheme>
                  <CategoriesTheme
                    onClick={() => setCategory("Research")}
                    className={`_green ${
                      category === "Research" ? "_active-category" : ""
                    }`}
                  >
                    <p className="_green">Research</p>
                  </CategoriesTheme>
                  <CategoriesTheme
                    onClick={() => setCategory("Copywriting")}
                    className={`_purple ${
                      category === "Copywriting" ? "_active-category" : ""
                    }`}
                  >
                    <p className="_purple">Copywriting</p>
                  </CategoriesTheme>
                </CategoriesThemes>
              </PopNewCardCategories>
              <FormNewCreate id="btnCreate">Создать задачу</FormNewCreate>
            </PopNewCardContent>
          </PopNewCardBlock>
        </PopNewCardContainer>
      </PopNewCardS>
    </>
  );
}
