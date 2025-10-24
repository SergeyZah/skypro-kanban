import { Header } from "./Header/header";
import { Main } from "./Main/Main";

export function Content({tasks, loading, error}) {
  return !loading && (
    <>

      <Header></Header>

      <Main tasks={tasks} error={error}></Main>

    </>
  );
}
