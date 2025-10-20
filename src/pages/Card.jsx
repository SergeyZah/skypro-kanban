import { useParams } from "react-router-dom";
import { PopBrowse } from "../components/PopBrowse/PopBrowse";
import { CardList } from "../components/data";

export const CardPage = () => {
  const { id } = useParams();

  const task = CardList.find((t) => t.id === id);

  return <PopBrowse task={task} />;
};
