import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <button
      onClick={() => {
        setDarkMode((x) => !x);
      }}
    >
      {darkMode ? (
        <Sun className=" size-6 text-yellow-300" />
      ) : (
        <Moon className=" size-6 text-blue-900" />
      )}
    </button>
  );
}
