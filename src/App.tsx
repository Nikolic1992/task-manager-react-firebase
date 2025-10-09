import { useThemeStore } from "./store/useThemeStore";
import { Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Landing from "./pages/Landing.tsx";

function App() {
  const { theme } = useThemeStore();

  return (
    <div className="h-screen" data-theme={theme}>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
