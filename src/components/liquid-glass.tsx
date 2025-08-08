import { component$, Slot } from "@builder.io/qwik";
import { clsx } from "clsx";

interface LiquidGlassProps {
  class?: string;
  variant?: "default" | "card" | "nav" | "hero";
}

export const LiquidGlass = component$<LiquidGlassProps>(
  ({ class: className, variant = "default" }) => {
    const baseClasses = "liquid-glass dark:liquid-glass-dark rounded-xl";

    const variantClasses = {
      default: "p-6",
      card: "p-6 hover:scale-[1.02] transition-transform duration-300",
      nav: "p-4 backdrop-blur-md",
      hero: "p-8 lg:p-12",
    };

    return (
      <div class={clsx(baseClasses, variantClasses[variant], className)}>
        <Slot />
      </div>
    );
  }
);

export const LiquidBackground = component$<{ class?: string }>(
  ({ class: className }) => {
    return (
      <div
        class={clsx(
          "relative min-h-screen overflow-hidden",
          "bg-gray-100",
          "dark:bg-gray-900",
          className
        )}
      >
        {/* Content */}
        <div class="relative z-10">
          <Slot />
        </div>
      </div>
    );
  }
);
