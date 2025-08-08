import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import PROJECTS from "~/data/projects";
import { LiquidGlass } from "~/components/liquid-glass";

export default component$(() => {
  return (
    <>
      <h1 class="mb-8 text-2xl font-bold sm:text-4xl">Projects</h1>

      <div class="flex flex-col gap-6">
        {PROJECTS.map((project, id) => {
          const hasLive = project.portfolio && project.portfolio !== "#";
          const hasRepo = project.repository && project.repository !== "#";
          const hasAnyLink = hasLive || hasRepo;

          return (
            <LiquidGlass
              key={id}
              variant="card"
              class="liquid-flow-hover glass-shimmer-hover"
            >
              <div class="font-medium">
                {/* Title and Links in one line */}
                <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h2 class="text-xl font-bold sm:text-2xl">{project.name}</h2>

                  {hasAnyLink && (
                    <div class="flex gap-4 text-sm sm:text-base">
                      {hasLive && (
                        <a
                          class="text-blue-600 underline underline-offset-4 transition hover:opacity-80 dark:text-blue-400"
                          href={project.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            class="h-5 w-5 rotate-[-45deg]"
                            fill="currentColor"
                          >
                            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                          </svg>
                        </a>
                      )}
                      {hasRepo && (
                        <a
                          class="text-blue-600 underline underline-offset-4 transition hover:opacity-80 dark:text-blue-400"
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Repository"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            class="h-5 w-5"
                            fill="currentColor"
                          >
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p class="mt-2 text-base leading-relaxed tracking-tight sm:tracking-normal">
                  {project.description}
                </p>

                {project.technologies?.length > 0 && (
                  <div class="mt-4 flex flex-wrap gap-2 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        class="tech-chip rounded-full px-3 py-1.5 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </LiquidGlass>
          );
        })}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Projects - Wai Phyo Naing",
  meta: [
    {
      name: "description",
      content: "Projects and work by Wai Phyo Naing - Full Stack Developer",
    },
  ],
};
