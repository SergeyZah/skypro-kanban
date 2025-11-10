import { useContext } from "react";
import { Column } from "../Column/Column";
import { MainS, Container, MainBlock, MainContent } from "./Main.styled.js";
import { TaskContext } from "../../context/TaskContext.js";

export const Main = ({ error }) => {
  const { tasks } = useContext(TaskContext);

  const COLUMN_TITLES = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const tasksByStatus = () => {
    const indexed = COLUMN_TITLES.reduce((acc, s) => {
      acc[s] = [];

      return acc;
    }, {});

    for (const t of tasks) {
      const key = COLUMN_TITLES.includes(t.status) ? t.status : "Без статуса";

      indexed[key].push(t);
    }

    return indexed;
  };

  return (
    <>
      <MainS>
        <Container>
          <MainBlock>
            <MainContent>
              {COLUMN_TITLES.map((title) => (
                <Column
                  key={title}
                  cards={tasksByStatus()[title]}
                  status={title}
                />
              ))}
            </MainContent>
          </MainBlock>
        </Container>
        <p>{error}</p>
      </MainS>
    </>
  );
};
