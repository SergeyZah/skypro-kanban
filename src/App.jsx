import "./App.css";
import { AppRoutes } from "./components/AppRoutes";
import { FetchTaskProvider } from "./context/FetchTaskProvider";

export function App() {
  return (
    <FetchTaskProvider>
      <AppRoutes />
    </FetchTaskProvider>
  );
}
