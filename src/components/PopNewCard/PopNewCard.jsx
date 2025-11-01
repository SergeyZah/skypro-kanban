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
import { useContext, useState } from "react";
import { postTask } from "../../services/api";
import { FetchTaskContext } from "../../context/FetchTaskContext";

export function PopNewCard() {
  const {getTasks, token} = useContext(FetchTaskContext)
  const [category, setCategory] = useState("Web Design");
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState("");
  const closeNewCard = () => navigate("/");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
    setError("");
  };

  const createTask = async () => {
    const newTask = {
      title: formData.title,
      topic: category,
      status: "Без статуса",
      description: formData.description,
      date: selectedDate,
    };

    try {
      await postTask({ token, task: newTask });
      getTasks()
      closeNewCard();
    } catch (err) {
      console.error("Ошибка при создании задачи:", err);
    }
  };

  const onCloseModal = () => {
    navigate("/");
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setError("");
    console.log(error)
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
                      name="title"
                      id="formTitle"
                      placeholder="Введите название задачи..."
                      autoFocus
                      onChange={handleChange}
                    ></FormNewInput>
                  </FormNewBlock>
                  <FormNewBlock>
                    <SubTitle htmlFor="textArea">Описание задачи</SubTitle>
                    <FormNewArea
                      name="description"
                      id="textArea"
                      placeholder="Введите описание задачи..."
                      onChange={handleChange}
                    ></FormNewArea>
                  </FormNewBlock>
                </PopNewCardForm>
                <Calendar onChange={handleDateSelect}></Calendar>
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
              <FormNewCreate id="btnCreate" onClick={createTask}>Создать задачу</FormNewCreate>
            </PopNewCardContent>
          </PopNewCardBlock>
        </PopNewCardContainer>
      </PopNewCardS>
    </>
  );
}
