import {
  component$,
  createContextId,
  useContextProvider,
  useContext,
  useSignal,
  useVisibleTask$,
  $,
  Slot,
  type Signal,
} from "@builder.io/qwik";

export interface ThemeContextState {
  themeSignal: Signal<"light" | "dark">;
  setTheme: (theme: "light" | "dark") => void;
}

export const ThemeContext = createContextId<ThemeContextState>("theme-context");

export const ThemeProvider = component$(() => {
  const theme = useSignal<"light" | "dark">("light");

  const setTheme = $((newTheme: "light" | "dark") => {
    theme.value = newTheme;
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(newTheme);
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    theme.value = initialTheme;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initialTheme);
  });

  useContextProvider(ThemeContext, {
    themeSignal: theme,
    setTheme,
  });

  return <Slot />;
});

export const useTheme = () => useContext(ThemeContext);
