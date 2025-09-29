import "./App.css";
import Header from "./components/Header/header"
import Calendar from "./components/Calendar/calendar"

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="pop-exit" id="popExit">
          <div className="pop-exit__container">
            <div className="pop-exit__block">
              <div className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </div>
              <form className="pop-exit__form" id="formExit" action="#">
                <div className="pop-exit__form-group">
                  <button className="pop-exit__exit-yes _hover01" id="exitYes">
                    <a href="modal/signin.html">Да, выйти</a>{" "}
                  </button>
                  <button className="pop-exit__exit-no _hover03" id="exitNo">
                    <a href="main.html">Нет, остаться</a>{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="pop-new-card" id="popNewCard">
          <div className="pop-new-card__container">
            <div className="pop-new-card__block">
              <div className="pop-new-card__content">
                <h3 className="pop-new-card__ttl">Создание задачи</h3>
                <a href="#" className="pop-new-card__close">
                  &#10006;
                </a>
                <div className="pop-new-card__wrap">
                  <form
                    className="pop-new-card__form form-new"
                    id="formNewCard"
                    action="#"
                  >
                    <div className="form-new__block">
                      <label htmlFor="formTitle" className="subttl">
                        Название задачи
                      </label>
                      <input
                        className="form-new__input"
                        type="text"
                        name="name"
                        id="formTitle"
                        placeholder="Введите название задачи..."
                        autoFocus
                      ></input>
                    </div>
                    <div className="form-new__block">
                      <label htmlFor="textArea" className="subttl">
                        Описание задачи
                      </label>
                      <textarea
                        className="form-new__area"
                        name="text"
                        id="textArea"
                        placeholder="Введите описание задачи..."
                      ></textarea>
                    </div>
                  </form>
                  <Calendar></Calendar>
                </div>
                <div className="pop-new-card__categories categories">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__themes">
                    <div className="categories__theme _orange _active-category">
                      <p className="_orange">Web Design</p>
                    </div>
                    <div className="categories__theme _green">
                      <p className="_green">Research</p>
                    </div>
                    <div className="categories__theme _purple">
                      <p className="_purple">Copywriting</p>
                    </div>
                  </div>
                </div>
                <button className="form-new__create _hover01" id="btnCreate">
                  Создать задачу
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pop-browse" id="popBrowse">
          <div className="pop-browse__container">
            <div className="pop-browse__block">
              <div className="pop-browse__content">
                <div className="pop-browse__top-block">
                  <h3 className="pop-browse__ttl">Название задачи</h3>
                  <div className="categories__theme theme-top _orange _active-category">
                    <p className="_orange">Web Design</p>
                  </div>
                </div>
                <div className="pop-browse__status status">
                  <p className="status__p subttl">Статус</p>
                  <div className="status__themes">
                    <div className="status__theme _hide">
                      <p>Без статуса</p>
                    </div>
                    <div className="status__theme _gray">
                      <p className="_gray">Нужно сделать</p>
                    </div>
                    <div className="status__theme _hide">
                      <p>В работе</p>
                    </div>
                    <div className="status__theme _hide">
                      <p>Тестирование</p>
                    </div>
                    <div className="status__theme _hide">
                      <p>Готово</p>
                    </div>
                  </div>
                </div>
                <div className="pop-browse__wrap">
                  <form
                    className="pop-browse__form form-browse"
                    id="formBrowseCard"
                    action="#"
                  >
                    <div className="form-browse__block">
                      <label htmlFor="textArea01" className="subttl">
                        Описание задачи
                      </label>
                      <textarea
                        className="form-browse__area"
                        name="text"
                        id="textArea01"
                        readOnly
                        placeholder="Введите описание задачи..."
                      ></textarea>
                    </div>
                  </form>
                  <Calendar></Calendar>
                </div>
                <div className="theme-down__categories theme-down">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">Web Design</p>
                  </div>
                </div>
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
                    <a href="#">Закрыть</a>
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
              </div>
            </div>
          </div>
        </div>

        <Header></Header>
        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                <div className="main__column column">
                  <div className="column__title">
                    <p>Без статуса</p>
                  </div>
                  <div className="cards">
                    <div className="cards__item">
                      <div className="cards__card card">
                        <div className="card__group">
                          <div className="card__theme _orange">
                            <p className="_orange">Web Design</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div className="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div className="card__content">
                          <a href="" target="_blank">
                            <h3 className="card__title">Название задачи</h3>
                          </a>
                          <div className="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="cards__item">
                      <div className="cards__card card">
                        <div className="card__group">
                          <div className="card__theme _green">
                            <p className="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div className="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div className="card__content">
                          <a href="" target="_blank">
                            <h3 className="card__title">Название задачи</h3>
                          </a>
                          <div className="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="cards__item">
                      <div className="cards__card card">
                        <div className="card__group">
                          <div className="card__theme _orange">
                            <p className="_orange">Web Design</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div className="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div className="card__content">
                          <a href="" target="_blank">
                            <h3 className="card__title">Название задачи</h3>
                          </a>
                          <div className="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="cards__item">
                      <div className="cards__card card">
                        <div className="card__group">
                          <div className="card__theme _purple">
                            <p className="_purple">Copywriting</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div className="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div className="card__content">
                          <a href="" target="_blank">
                            <h3 className="card__title">Название задачи</h3>
                          </a>
                          <div className="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="cards__item">
                      <div className="cards__card card">
                        <div className="card__group">
                          <div className="card__theme _orange">
                            <p className="_orange">Web Design</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div className="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div className="card__content">
                          <a href="" target="_blank">
                            <h3 className="card__title">Название задачи</h3>
                          </a>
                          <div className="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main__column">
                  <div className="column__title">
                    <p>Нужно сделать</p>
                  </div>
                  <div className="cards">
                    <div className="cards__item">
                      <div className="cards__card card">
                        <div className="card__group">
                          <div className="card__theme _green">
                            <p className="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div className="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div className="card__content">
                          <a href="" target="_blank">
                            <h3 className="card__title">Название задачи</h3>
                          </a>
                          <div className="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main__column">
                  <div className="column__title">
                    <p>В работе</p>
                  </div>
                  <div className="cards">
                    <div className="cards__item">
                      <div className="cards__card card">
                        <div className="card__group">
                          <div className="card__theme _green">
                            <p className="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div className="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div className="card__content">
                          <a href="" target="_blank">
                            <h3 className="card__title">Название задачи</h3>
                          </a>
                          <div className="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="cards__item">
                      <div className="cards__card card">
                        <div className="card__group">
                          <div className="card__theme _purple">
                            <p className="_purple">Copywriting</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div className="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div className="card__content">
                          <a href="" target="_blank">
                            <h3 className="card__title">Название задачи</h3>
                          </a>
                          <div className="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="cards__item">
                      <div className="cards__card card">
                        <div className="card__group">
                          <div className="card__theme _orange">
                            <p className="_orange">Web Design</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div className="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div className="card__content">
                          <a href="" target="_blank">
                            <h3 className="card__title">Название задачи</h3>
                          </a>
                          <div className="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main__column">
                  <div className="column__title">
                    <p>Тестирование</p>
                  </div>
                  <div className="cards">
                    <div className="cards__item">
                      <div className="cards__card card">
                        <div className="card__group">
                          <div className="card__theme _green">
                            <p className="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div className="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div className="card__content">
                          <a href="" target="_blank">
                            <h3 className="card__title">Название задачи</h3>
                          </a>
                          <div className="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main__column">
                  <div className="column__title">
                    <p>Готово</p>
                  </div>
                  <div className="cards">
                    <div className="cards__item">
                      <div className="cards__card card">
                        <div className="card__group">
                          <div className="card__theme _green">
                            <p className="_green">Research</p>
                          </div>
                          <a href="#popBrowse" target="_self">
                            <div className="card__btn">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </a>
                        </div>
                        <div className="card__content">
                          <a href="" target="_blank">
                            <h3 className="card__title">Название задачи</h3>
                          </a>
                          <div className="card__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_1_415)">
                                <path
                                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                  stroke="#94A6BE"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>30.10.23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
