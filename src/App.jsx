import "./App.css";
import { useEffect, useState } from "react";
import { Content } from "./components/Content";
import { Loader } from "./components/Loader";

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="wrapper">
        {loading ? <Loader /> :<Content />} 
      </div>
      
    </>
  );
}
