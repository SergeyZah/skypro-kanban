import { PopNewCard } from "./PopNewCard/PopNewCard";
import { PopBrowse } from "./PopBrowse/PopBrowse";
import { Header } from "./Header/header";
import { Main } from "./Main/Main";
import { PopExit } from "./PopExit/PopExit";
import { Outlet } from "react-router-dom";

export function Content() {
  return (
    <>
      <PopExit />

      <PopNewCard></PopNewCard>

      <PopBrowse></PopBrowse>

      <Header></Header>

      <Main></Main>

      <Outlet />
    </>
  );
}
