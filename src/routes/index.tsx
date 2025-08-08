import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Contacts } from "~/components/sections/contacts";
import { Skills } from "~/components/sections/skills";
import { Experience } from "~/components/sections/experience";
import { LiquidGlass } from "~/components/liquid-glass";

export default component$(() => {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <>
      <LiquidGlass variant="hero" class="mb-8 glass-shimmer-hover">
        <h1 class="text-xl font-bold sm:text-2xl">@waiphyo285</h1>
        <div class="mt-6 text-justify text-base leading-relaxed tracking-tight sm:text-lg sm:tracking-normal">
          <p>
            I am a passionate and dedicated software engineer with{" "}
            {yearsOfExperience}+ years of experience building scalable,
            efficient systems. I love solving real problems through clean,
            practical solutions. Always learning, always curious, and driven to
            make an impact.
          </p>
        </div>
      </LiquidGlass>

      <Contacts />
      <Experience />
      <Skills />
    </>
  );
});

export const head: DocumentHead = {
  title: "Wai Phyo Naing",
  meta: [
    {
      name: "description",
      content: "Always learning, always honest—and driven to make an impact.",
    },
  ],
};
