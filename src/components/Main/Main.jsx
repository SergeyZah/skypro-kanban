import { Column } from "../Column/Column";
import { CardList1, CardList2, CardList3, CardList4, CardList5 } from "../data";

export function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              <Column cards={CardList1} status={"Без статуса"}/>
              <Column cards={CardList2} status={"Нужно сделать"}/>
              <Column cards={CardList3} status={"В работе"}/>
              <Column cards={CardList4} status={"Тестирование"}/>
              <Column cards={CardList5} status={"Готово"}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
