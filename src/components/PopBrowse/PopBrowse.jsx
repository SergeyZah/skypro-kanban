import { Calendar } from "../Calendar/calendar";
import { Form, useNavigate } from "react-router-dom";
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
  StatusThemeSelected,
  SubTitle,
  ThemeDownCategories,
} from "./PopBrowse.styled";
import { useCallback, useContext, useEffect, useState } from "react";
import { deleteTask, editTask, getOneTask } from "../../services/api";
import { FetchTaskContext } from "../../context/FetchTaskContext";

export function PopBrowse({ id, token }) {
  const [task, setTask] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("Без статуса");
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState("");

  const { tasks, getTasks } = useContext(FetchTaskContext);
  const [tasksList, setTasksList] = useState(tasks);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const getTask = useCallback(async () => {
    try {
      const data = await getOneTask({
        token,
        id,
      });
      if (data) setTask(data);
      setSelectedDate(data.date);
      setDescription(data.description)
    } catch (err) {
      setError(err.message);
    }
  }, [token, id]);

  useEffect(() => {
    if (token) {
      getTask();
    }
  }, [getTask, token]);

  // if (task === "") {
  //   console.log("Нет задачи");
  // } else {
  //   console.log(task);
  // }

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

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (token) {
      deleteTask({ id, token })
        .then((updatedTasks) => {
          setTasksList(updatedTasks);
          getTasks();
          navigate("/");
        })
        .catch((err) => {
          if (err.message.includes("Ошибка авторизации")) {
            navigate("/login");
          } else {
            setError(err.message);
          }
        });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // const updatedTaskData = {
    //   title: originalTask.title,
    //   description: description.trim(),
    //   topic: category,
    //   date: dueDate.toISOString(),
    //   status,
    //   userId: originalTask.userId,
    // };

    const dataModifiedTask = {
      title: task.title,
      topic: task.topic,
      status: status,
      description: description,
      date: selectedDate,
    };

    editTask({ id, token, task: dataModifiedTask })
      .then((updatedTasks) => {
        setTasksList(updatedTasks);
        setEditing(false);
        getTasks();
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setEditing(false);
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
                  {editing ? (
                    <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
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
                    </div>
                  ) : (
                    <StatusThemeSelected
                      $isActive={true}
                      disabled={!editing}
                    ><p>{status}</p></StatusThemeSelected>
                  )}
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
                      value={description}
                      placeholder="Введите описание задачи..."
                      disabled={!editing}
                      onChange={(e) => editing && setDescription(e.target.value)}
                    ></FormBrowseArea>
                  </FormBrowseBlock>
                  <Calendar
                    value={selectedDate}
                    onChange={handleDateSelect}
                    disabled={!editing}
                  ></Calendar>
                </PopBrowseForm>
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
                        <ButtonBrowseDelete onClick={handleDelete}>
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
                        <ButtonEditSave onClick={handleSave}>
                          Сохранить
                        </ButtonEditSave>
                        <ButtonEditCancel onClick={handleCancel}>
                          Отменить
                        </ButtonEditCancel>
                        <ButtonBrowseDelete
                          id="btnDelete"
                          onClick={handleDelete}
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
