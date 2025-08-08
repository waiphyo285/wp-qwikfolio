import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { cn } from "~/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";

export const NavBar = component$(() => {
  const location = useLocation();

  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/project",
      text: "Project",
    },
    // {
    //   path: '/our-time',
    //   text: 'Our Time',
    // },
  ];

  return (
    <div class="fixed top-5 left-0 z-50 w-full">
      <nav class="mx-auto flex w-max gap-5 rounded-xl liquid-glass dark:liquid-glass-dark p-2.5 px-5 text-sm sm:text-base glass-shimmer">
        {links.map((link) => (
          <Link
            key={link.path}
            class={cn(
              "rounded-md border-2 px-2 py-1 transition-colors hover:border-gray-300 dark:hover:border-gray-600",
              location.url.pathname === link.path
                ? "border-gray-300 dark:border-gray-600"
                : "border-transparent"
            )}
            href={link.path}
          >
            {link.text}
          </Link>
        ))}

        <a
          href="https://github.com/waiphyo285/wp-qwikfolio"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative flex items-center rounded-md border-2 border-transparent px-2 py-1 transition-colors hover:border-gray-300 dark:hover:border-gray-600"
        >
          <svg
            class="h-5 w-5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
          </svg>
          <div class="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white group-hover:block dark:bg-white dark:text-black">
            Repository
          </div>
        </a>

        <ThemeSwitcher />
      </nav>
    </div>
  );
});
