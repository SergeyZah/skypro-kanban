import { PopBrowse } from "./PopBrowse/PopBrowse";
import { Header } from "./Header/header";
import { Main } from "./Main/Main";
import { PopExit } from "./PopExit/PopExit";

export function Content({loading}) {
  return !loading && (
    <>
      <PopExit />

      <PopBrowse></PopBrowse>

      <Header></Header>

      <Main></Main>

    </>
  );
}
