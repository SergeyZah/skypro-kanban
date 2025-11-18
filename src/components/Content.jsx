import { Header } from "./Header/header";
import { Main } from "./Main/Main";

export function Content({ error }) {
  return (
    <>
      <Header />
      <Main error={error} />
    </>
  );
}
