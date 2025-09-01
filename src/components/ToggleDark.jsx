import { FaMoon, FaSun } from "react-icons/fa"
import { useEffect, useState } from "react"

export default function ToggleDark() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`relative w-14 h-8 flex items-center rounded-full p-1 transition-colors cursor-pointer
        ${dark ? "bg-violet-600" : "bg-gray-400"}`}
      aria-label="dark-mode-toggle"
    >
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out
          ${dark ? "translate-x-6" : "translate-x-0"}`}
      >
        {dark ? (
          <FaMoon className="text-violet-600 text-sm" />
        ) : (
          <FaSun className="text-yellow-500 text-sm" />
        )}
      </div>
    </button>
  )
}