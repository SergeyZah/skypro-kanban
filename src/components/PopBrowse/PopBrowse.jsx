import { Calendar } from "../Calendar/calendar";
import { Link } from "react-router-dom";
import {
  CategoriesP,
  CategoriesTheme,
  FormBrowseArea,
  FormBrowseBlock,
  PopBrowseBlock,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseS,
  PopBrowseStatus,
  PopBrowseStatusSubtitle,
  PopBrowseTitle,
  PopBrowseTopBlock,
  PopBrowseWrap,
  StatusTheme,
  StatusThemes,
  SubTitle,
  ThemeDownCategories,
} from "./PopBrowse.styled";

export function PopBrowse({ task }) {
  const Colors = {
    "Web Design": "card__theme--orange",
    Research: "card__theme--green",
    Copywriting: "card__theme--purple",
  };

  const ColorTheme = Colors[task.theme];

  return (
    <>
      <PopBrowseS id="popBrowse">
        <PopBrowseContainer>
          <PopBrowseBlock>
            <PopBrowseContent>
              <PopBrowseTopBlock>
                <PopBrowseTitle>{task.title}</PopBrowseTitle>
                <CategoriesTheme className={ColorTheme}>
                  <p>{task.theme}</p>
                </CategoriesTheme>
              </PopBrowseTopBlock>
              <PopBrowseStatus>
                <PopBrowseStatusSubtitle>{task.status}</PopBrowseStatusSubtitle>
                <StatusThemes>
                  <StatusTheme className="_hide">
                    <p>Без статуса</p>
                  </StatusTheme>
                  <StatusTheme className="_gray">
                    <p className="_gray">Нужно сделать</p>
                  </StatusTheme>
                  <StatusTheme className="_hide">
                    <p>В работе</p>
                  </StatusTheme>
                  <StatusTheme className="_hide">
                    <p>Тестирование</p>
                  </StatusTheme>
                  <StatusTheme className="_hide">
                    <p>Готово</p>
                  </StatusTheme>
                </StatusThemes>
              </PopBrowseStatus>
              <PopBrowseWrap>
                <PopBrowseForm
                  className="form-browse"
                  id="formBrowseCard"
                  action="#"
                >
                  <FormBrowseBlock>
                    <SubTitle htmlFor="textArea01">Описание задачи</SubTitle>
                    <FormBrowseArea
                      name="text"
                      id="textArea01"
                      readOnly
                      placeholder="Введите описание задачи..."
                    ></FormBrowseArea>
                  </FormBrowseBlock>
                </PopBrowseForm>
                <Calendar></Calendar>
              </PopBrowseWrap>
              <ThemeDownCategories>
                <CategoriesP>Категория</CategoriesP>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </ThemeDownCategories>
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  <button className="btn-browse__edit _btn-bor _hover03">
                    <a href="#">Редактировать задачу</a>
                  </button>
                  <button className="btn-browse__delete _btn-bor _hover03">
                    <a href="#">Удалить задачу</a>
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01">
                  <Link to="/">Закрыть</Link>
                </button>
              </div>
              <div className="pop-browse__btn-edit _hide">
                <div className="btn-group">
                  <button className="btn-edit__edit _btn-bg _hover01">
                    <a href="#">Сохранить</a>
                  </button>
                  <button className="btn-edit__edit _btn-bor _hover03">
                    <a href="#">Отменить</a>
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                  >
                    <a href="#">Удалить задачу</a>
                  </button>
                </div>
                <button className="btn-edit__close _btn-bg _hover01">
                  <a href="#">Закрыть</a>
                </button>
              </div>
            </PopBrowseContent>
          </PopBrowseBlock>
        </PopBrowseContainer>
      </PopBrowseS>
    </>
  );
}
