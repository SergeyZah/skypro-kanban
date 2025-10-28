import { Header } from "./Header/header";
import { Main } from "./Main/Main";

export function Content({token, tasks, loading, error}) {
  return !loading && (
    <>

      <Header token={token}></Header>

      <Main tasks={tasks} error={error}></Main>

    </>
  );
}
