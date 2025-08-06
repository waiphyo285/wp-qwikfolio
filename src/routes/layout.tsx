import { component$, Slot } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { NavBar } from '~/components/nav-bar'
import { ThemeProvider } from '~/components/theme-provider'

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  }
})

export default component$(() => {
  return (
    <ThemeProvider>
      <NavBar />

      {/* Background Wrapper */}
      <div class="relative min-h-screen w-full bg-white dark:bg-black">
        <div
          class="pointer-events-none absolute inset-0 z-0 dark:hidden"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, #fdfdfd 0)',
            backgroundSize: '26px 26px',
          }}
        />
        <div
          class="pointer-events-none absolute inset-0 z-0 hidden dark:block"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, #303030 0)',
            backgroundSize: '26px 26px',
          }}
        />
        <div class="relative z-10 mx-auto w-[750px] max-w-full px-5 pt-24 pb-12">
          <main>
            <Slot />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
})
