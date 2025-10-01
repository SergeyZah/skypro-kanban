import "./App.css";
import { Header } from "./components/Header/header";
import { PopNewCard } from "./components/PopNewCard/PopNewCard";
import { PopBrowse } from "./components/PopBrowse/PopBrowse";
import { Main } from "./components/Main/Main";

export function App() {
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

        <Main></Main>
      </div>
    </>
  );
}
