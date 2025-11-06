import { useParams } from "react-router-dom";
import { PopBrowse } from "../components/PopBrowse/PopBrowse";

export const CardPage = ({token}) => {
  const { id } = useParams();

  return <PopBrowse id={id} token={token}/>;
};
