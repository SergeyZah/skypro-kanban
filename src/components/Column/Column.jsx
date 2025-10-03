import { Card } from "../Card/Card";

export function Column({ cards, status }) {
  return (
    <>
      <div className="main__column column">
        <div className="column__title">
          <p>{status}</p>
        </div>
        {cards.map((card) => {
          return (
              <div key={card.id} className="cards">
                <Card
                  id={card.id}
                  theme={card.theme}
                  title={card.title}
                  date={card.date}
                />
              </div>
          );
        })}
      </div>
    </>
  );
}
