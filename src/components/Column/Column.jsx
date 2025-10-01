import { Card } from "../Card/Card";

export function Column() {
  return (
    <>
      <div className="main__column column">
        <div className="column__title">
          <p>Без статуса</p>
        </div>
        <div className="cards">
          <Card></Card>
        </div>
      </div>
    </>
  );
}
