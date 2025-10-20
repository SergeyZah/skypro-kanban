import { Header } from "./Header/header";
import { Main } from "./Main/Main";

export function Content({loading}) {
  return !loading && (
    <>

      <Header></Header>

      <Main></Main>

    </>
  );
}
