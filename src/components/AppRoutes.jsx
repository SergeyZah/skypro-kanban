import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { Content } from "./Content";

export function AppRoutes () {
    const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, []);
    
      return (
        <>
          <div className="wrapper">{loading ? <Loader /> : <Content />}</div>
        </>
      );
}