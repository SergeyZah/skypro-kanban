import { useContext } from "react";
import { Column } from "../Column/Column";
import {
  MainS,
  Container,
  MainBlock,
  MainContent,
  ColumnNull,
} from "./Main.styled.js";
import { TaskContext } from "../../context/TaskContext.js";

export const Main = ({ tasks, error }) => {
  const { websiteTheme } = useContext(TaskContext);

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
      <MainS $isDarkTheme={websiteTheme === "dark"}>
        <Container>
          <MainBlock>
            <MainContent>
              {tasks.length !== 0 ? (
                COLUMN_TITLES.map((title) => (
                  <Column
                    key={title}
                    cards={tasksByStatus()[title]}
                    status={title}
                  />
                ))
              ) : (
                <ColumnNull>Пока задач нет</ColumnNull>
              )}
            </MainContent>
          </MainBlock>
        </Container>
        <p>{error}</p>
      </MainS>
    </>
  );
};
