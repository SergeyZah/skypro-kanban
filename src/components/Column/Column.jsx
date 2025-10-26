import { Card } from "../Card/Card";
import { MainColumn, ColumnTitle, Cards } from "./Column.styled.js";

export function Column({ cards, status }) {

  return (
    <>
      <MainColumn>
        <ColumnTitle>
          <p>{status}</p>
        </ColumnTitle>
        <Cards>
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                id={card.id}
                theme={card.topic}
                title={card.title}
                date={card.date}
              />
            );
          })}
        </Cards>
      </MainColumn>
    </>
  );
}
