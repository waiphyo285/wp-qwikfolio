import { component$ } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'
import { cn } from '~/lib/utils'
import { ThemeSwitcher } from './theme-switcher'

export const NavBar = component$(() => {
  const location = useLocation()

  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/project',
      text: 'Project',
    },
    // {
    //   path: '/our-time',
    //   text: 'Our Time',
    // },
  ]

  return (
    <div class="fixed top-5 left-0 z-50 w-full">
      <nav class="mx-auto flex w-max gap-5 rounded-md border-2 border-gray-300 bg-white/80 p-2.5 px-5 text-sm backdrop-blur-lg sm:text-base dark:border-gray-600 dark:bg-black/80">
        {links.map((link) => (
          <Link
            key={link.path}
            class={cn(
              'rounded-md border-2 px-2 py-1 transition-colors hover:border-gray-300 dark:hover:border-gray-600',
              location.url.pathname === link.path
                ? 'border-gray-300 dark:border-gray-600'
                : 'border-transparent',
            )}
            href={link.path}
          >
            {link.text}
          </Link>
        ))}
        <ThemeSwitcher />
      </nav>
    </div>
  )
})
