import { useContext } from "react";
import { Header } from "./Header/header";
import { Main } from "./Main/Main";
import { AuthContext } from "../context/AuthContext";

export function Content({ error }) {
  const { loading } = useContext(AuthContext);
  return (
    !loading && (
      <>
        <Header />

        <Main error={error} />
      </>
    )
  );
}
