import { Header } from "./Header/header";
import { Main } from "./Main/Main";

export function Content({tasks, error }) {
  return (
    <>
      <Header />
      <Main tasks={tasks} error={error} />
    </>
  );
}
