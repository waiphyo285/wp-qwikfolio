import { component$, $ } from "@builder.io/qwik";
import { useTheme } from "./theme-provider";

export const ThemeSwitcher = component$(() => {
  const { themeSignal, setTheme } = useTheme();

  const handleToggle = $(() => {
    const newTheme = themeSignal.value === "light" ? "dark" : "light";
    // eslint-disable-next-line qwik/valid-lexical-scope
    setTheme(newTheme);
  });

  return (
    <button
      onClick$={handleToggle}
      class="group relative flex items-center justify-center rounded-md p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {/* Sun icon - visible in dark mode */}
      <svg
        class="hidden size-4 sm:size-6 dark:block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      {/* Moon icon - visible in light mode */}
      <svg
        class="block size-4 sm:size-6 dark:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>

      <div class="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white group-hover:block dark:bg-white dark:text-black">
        {themeSignal.value === "light" ? "Dark" : "Light"}
      </div>

      <span class="sr-only">Theme</span>
    </button>
  );
});
