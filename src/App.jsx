import "./App.css";
import { AppRoutes } from "./components/AppRoutes";
import { AuthProvider } from "./context/AuthProvider";
import { TaskProvider } from "./context/TaskProvider";

export function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <AppRoutes />
      </TaskProvider>
    </AuthProvider>
  );
}
