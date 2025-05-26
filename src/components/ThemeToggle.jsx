import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);

  return (
    <button
      className={cn(
        // "fixed max-md:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        " max-md:hidden z-50 px-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
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
