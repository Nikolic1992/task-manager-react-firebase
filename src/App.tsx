import { useThemeStore } from "./store/useThemeStore";
import NavBar from "./components/NavBar";

function App() {
  const { theme } = useThemeStore();

  return (
    <div className="h-screen" data-theme={theme}>
      <NavBar />
    </div>
  );
}

export default App;
