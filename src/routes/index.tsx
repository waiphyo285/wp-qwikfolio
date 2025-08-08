import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Skills } from "~/components/sections/skills";
import { Experience } from "~/components/sections/experience";
import { HeroCard } from "~/components/sections/hero-card";

export default component$(() => {
  return (
    <>
      <HeroCard />
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
