import { create } from "zustand";

interface ThemeStoreProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useThemeStore = create<ThemeStoreProps>((set) => ({
  theme: localStorage.getItem("linkup-theme") || "night",
  setTheme: (theme) => {
    localStorage.setItem("linkup-theme", theme);
    set({ theme });
  },
}));
