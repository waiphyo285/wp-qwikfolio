import { component$, Slot, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { NavBar } from "~/components/nav-bar";
import { ThemeProvider } from "~/components/theme-provider";
import { LiquidBackground } from "~/components/liquid-glass";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    // Set config first
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).TallyConfig = {
      formId: "waqWDE",
      popup: {
        emoji: {
          text: "👋",
          animation: "none",
        },
        open: {
          trigger: "time",
          ms: 30000,
        },
      },
    };

    // Then load the script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.defer = true;
    document.body.appendChild(script);
  });

  return (
    <ThemeProvider>
      <NavBar />

      {/* Liquid Glass Background */}
      <LiquidBackground>
        <div class="mx-auto w-[750px] max-w-full px-5 pt-24 pb-12">
          <main>
            <Slot />
          </main>
        </div>
      </LiquidBackground>
    </ThemeProvider>
  );
});
