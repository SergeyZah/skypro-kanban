import { Calendar } from "../Calendar/calendar";
import { useNavigate } from "react-router-dom";
import {
  ActionButtons,
  ButtonBrowse,
  ButtonBrowseClose,
  ButtonBrowseDelete,
  ButtonBrowseEdit,
  ButtonEdit,
  ButtonEditCancel,
  ButtonEditSave,
  ButtonGroup,
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
import { useCallback, useEffect, useState } from "react";
import { getOneTask } from "../../services/api";

export function PopBrowse({ id, token }) {

  const [task, setTask] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("Без статуса");
  const [editing, setEditing] = useState(false);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const getTask = useCallback (async () => {
      try {
        const data = await getOneTask({
          token,
          id,
        });
        if (data) setTask(data);
      } catch (err) {
        setError(err.message);
      }
    }, [token, id]);
  
    useEffect(() => {
      if (token) {
        getTask();
      }
    }, [getTask, token]);

  console.log(task)

  const Colors = {
    "Web Design": "card__theme--orange",
    Research: "card__theme--green",
    Copywriting: "card__theme--purple",
  };

  const ColorTheme = Colors[task.topic];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setError("");
    console.log(error);
  };

  const statusProcessing = (newStatus) => {
    if (newStatus !== status) {
      setStatus(newStatus);
    }
  };

  const openEditing = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setEditing(true);
  };

  const navigate = useNavigate();
  const onCloseModal = () => {
    navigate("/");
  };

  return (
    <>
      <PopBrowseS id="popBrowse">
        <PopBrowseContainer>
          <PopBrowseBlock>
            <PopBrowseContent>
              <PopBrowseTopBlock>
                <PopBrowseTitle>{task.title}</PopBrowseTitle>
                <CategoriesTheme className={ColorTheme}>
                  <p>{task.topic}</p>
                </CategoriesTheme>
              </PopBrowseTopBlock>
              <PopBrowseStatus>
                <PopBrowseStatusSubtitle>Статус</PopBrowseStatusSubtitle>
                <StatusThemes>
                  {statuses.map((stat) => {
                    return (
                      <StatusTheme
                        key={stat}
                        onClick={() => statusProcessing(stat)}
                        $isActive={stat === status}
                        disabled={!editing}
                      >
                        <p>{stat}</p>
                      </StatusTheme>
                    );
                  })}
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
                      value={task.description}
                      readOnly
                      placeholder="Введите описание задачи..."
                      disabled={!editing}
                    ></FormBrowseArea>
                  </FormBrowseBlock>
                </PopBrowseForm>
                <Calendar
                  value={selectedDate}
                  onChange={handleDateSelect}
                ></Calendar>
              </PopBrowseWrap>
              <ThemeDownCategories>
                <CategoriesP>Категория</CategoriesP>
              </ThemeDownCategories>
              <ButtonGroup>
                {!editing ? (
                  <>
                    <ButtonBrowse>
                      <ActionButtons>
                        <ButtonBrowseEdit onClick={openEditing}>
                          Редактировать задачу
                        </ButtonBrowseEdit>
                        <ButtonBrowseDelete>
                          Удалить задачу
                        </ButtonBrowseDelete>
                      </ActionButtons>
                      <ButtonBrowseClose onClick={onCloseModal}>
                        Закрыть
                      </ButtonBrowseClose>
                    </ButtonBrowse>
                  </>
                ) : (
                  <>
                    <ButtonEdit>
                      <ActionButtons>
                        <ButtonEditSave>Сохранить</ButtonEditSave>
                        <ButtonEditCancel>Отменить</ButtonEditCancel>
                        <ButtonBrowseDelete
                          id="btnDelete"
                        >
                          Удалить задачу
                        </ButtonBrowseDelete>
                      </ActionButtons>
                      <ButtonBrowseClose onClick={onCloseModal}>
                        Закрыть
                      </ButtonBrowseClose>
                    </ButtonEdit>
                  </>
                )}
              </ButtonGroup>
            </PopBrowseContent>
          </PopBrowseBlock>
        </PopBrowseContainer>
      </PopBrowseS>
    </>
  );
}
