import { useParams } from "react-router-dom";
import { PopBrowse } from "../components/PopBrowse/PopBrowse";

export const CardPage = () => {
  const { id } = useParams();

  return <PopBrowse id={id} />;
};
