"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", initial);
    setDark(initial);
  }, []);
  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  };
  return (
    <button aria-label="Toggle theme" onClick={toggle} className="rounded-xl p-2 hover:bg-secondary/10">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
