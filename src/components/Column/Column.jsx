import { useContext } from "react";
import { Card } from "../Card/Card";
import { MainColumn, ColumnTitle, Cards, ColumnNull } from "./Column.styled.js";
import { AuthContext } from "../../context/AuthContext.js";
import { Loader } from "..//Loader/Loader.jsx";

export function Column({ cards, status }) {
  const { loading } = useContext(AuthContext);

  return (
    <>
      <MainColumn>
        <ColumnTitle>
          <p>{status}</p>
        </ColumnTitle>
        <Cards>
          {loading ? (
            <Loader />
          ) : cards.length !== 0 ? (
            cards.map((card) => {
              return (
                <Card
                  key={card._id}
                  id={card._id}
                  theme={card.topic}
                  title={card.title}
                  date={card.date}
                />
              );
            })
          ) : (
            <ColumnNull>Нет задач</ColumnNull>
          )}
        </Cards>
      </MainColumn>
    </>
  );
}
