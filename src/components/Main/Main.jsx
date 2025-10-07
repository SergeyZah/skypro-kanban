import { Column } from "../Column/Column";
import { CardList } from "../data";

const COLUMN_TITLES = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export function Main() {
  const tasksByStatus = () => {
    const indexed = COLUMN_TITLES.reduce((acc, s) => {
      acc[s] = [];

      return acc;
    }, {});

    for (const t of CardList) {
      const key = COLUMN_TITLES.includes(t.status) ? t.status : "Без статуса";

      indexed[key].push(t);
    }

    return indexed;
  };

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {COLUMN_TITLES.map((title) => (
                <Column
                  key={title}
                  cards={tasksByStatus()[title]}
                  status={title}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
