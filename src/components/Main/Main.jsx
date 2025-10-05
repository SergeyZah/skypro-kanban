import { Column } from "../Column/Column";
import { CardList } from "../data";

export function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              <Column cards={CardList.filter((card) => card.status === "Без статуса")} status={"Без статуса"}/>
              <Column cards={CardList.filter((card) => card.status === "Нужно сделать")} status={"Нужно сделать"}/>
              <Column cards={CardList.filter((card) => card.status === "В работе")} status={"В работе"}/>
              <Column cards={CardList.filter((card) => card.status === "Тестирование")} status={"Тестирование"}/>
              <Column cards={CardList.filter((card) => card.status === "Готово")} status={"Готово"}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}