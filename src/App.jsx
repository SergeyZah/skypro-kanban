import "./App.css";
import Header from "./components/Header/header"
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import Card from "./components/Card/Card";

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

        <PopNewCard></PopNewCard>

        <PopBrowse></PopBrowse>

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
                    <Card></Card>

                    <Card></Card>

                    <Card></Card>

                    <Card></Card>

                    <Card></Card>
                  </div>
                </div>
                <div className="main__column">
                  <div className="column__title">
                    <p>Нужно сделать</p>
                  </div>
                  <div className="cards">
                    <Card></Card>
                  </div>
                </div>
                <div className="main__column">
                  <div className="column__title">
                    <p>В работе</p>
                  </div>
                  <div className="cards">
                    <Card></Card>

                    <Card></Card>

                    <Card></Card>
                  </div>
                </div>
                <div className="main__column">
                  <div className="column__title">
                    <p>Тестирование</p>
                  </div>
                  <div className="cards">
                    <Card></Card>
                  </div>
                </div>
                <div className="main__column">
                  <div className="column__title">
                    <p>Готово</p>
                  </div>
                  <div className="cards">
                    <Card></Card>
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
