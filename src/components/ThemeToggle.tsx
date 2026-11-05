import { useState } from "react";

export default function ThemeToggle() {
  const [announcement, setAnnouncement] = useState("");

  function toggleTheme() {
    const current = document.documentElement.dataset.theme;
    const next = current === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      /* Theme still works without storage. */
    }
    setAnnouncement(`${next === "light" ? "Light" : "Dark"} theme selected`);
  }

  return (
    <>
      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label="Switch between light and dark themes"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" stroke="none" />
        </svg>
        <span>Change theme</span>
      </button>
      <span className="sr-only" role="status">
        {announcement}
      </span>
    </>
  );
}
