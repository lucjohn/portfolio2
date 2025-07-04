import { useState,useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../src/lib/utils";

// changes dark/light mode
export const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    //runs this code right away when page loads
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);
  const toggleTheme = () => {
    if (isDarkMode == false) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); //determines what the user likes
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button onClick={toggleTheme} className={cn("fixed max-md:hidden top-4 right-5 ml-3 z-50 p-2 rounded-full transition-colors duration-300 bg-gray-800 focus:outline-hidden ", 
      "focus: outline-hidden"

    )}>
      {isDarkMode ? (
        <Sun className="h-4 w-4 text-yellow-300 hover:text-yellow-100" />
      ) : (
        <Moon className="h-4 w-4 text-blue-900 hover:text-blue-500" />
      )}
    </button>
  );
};
