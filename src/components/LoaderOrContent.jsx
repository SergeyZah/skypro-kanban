import { Loader } from "./Loader";
import { Content } from "./Content";
export function LoaderOrConent ({loading}) {
  return (
    <>
      <div className="wrapper">{loading ? <Loader /> : <Content />}</div>
    </>
  );
}
