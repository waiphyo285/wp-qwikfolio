import { component$, useVisibleTask$, useSignal, $ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { diffDateTime } from '~/lib/utils'
import QUOTES from '~/data/quotes'

export default component$(() => {
  const timeData = useSignal({
    years: '00',
    months: '00',
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  const handleShare = $((quote: string) => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: 'Wai & Chi', text: quote })
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(quote)
      alert('Copied to clipboard (sharing not supported)')
    }
  })

  useVisibleTask$(() => {
    const updateTime = () => {
      const duration = diffDateTime('2016-07-26T00:00:00Z')
      timeData.value = duration
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  })

  useVisibleTask$(() => {
    const playAudio = () => {
      const audio = new Audio('/sounds/love-music.mp3')
      audio.loop = true
      audio.play().catch((err) => {
        console.error('Autoplay blocked:', err)
      })
    }

    document.addEventListener('click', playAudio, { once: true })
    return () => document.removeEventListener('click', playAudio)
  })

  return (
    <main class="min-h-screen">
      {/* Snowfall Effect */}
      <div class="pointer-events-none fixed inset-0 z-10 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => {
          const left = Math.random() * 100
          const delay = Math.random() * 10
          const duration = 10 + Math.random() * 10
          const opacity = 0.3 + Math.random() * 0.5
          const size = 4 + Math.random() * 2

          return (
            <div
              key={i}
              class="absolute top-[-10px] animate-pulse rounded-full bg-white"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                opacity: opacity,
                animation: `fall ${duration}s linear infinite`,
              }}
            />
          )
        })}
      </div>

      <h1
        class="mb-8 text-2xl font-bold sm:text-4xl"
        // style="font-family: 'Parisienne', cursive;"
      >
        Our Time
      </h1>

      <div class="flex flex-col gap-6">
        <div class="space-y-4 rounded-md border-2 border-gray-300 bg-white/10 p-4 backdrop-blur-lg transition-all duration-300 hover:bg-white/20 sm:p-6 dark:border-gray-600 dark:bg-black/10 dark:hover:bg-black/20">
          <div
          //   style="font-family: 'Parisienne', cursive;"
          >
            <span class="text-sm text-gray-600 dark:text-gray-400">
              Started on Tuesday, 26 July 2016
            </span>
          </div>

          <p
            class="text-justify text-md leading-relaxed tracking-tight sm:tracking-normal"
            // style="font-family: 'Parisienne', cursive;"
          >
            You entered my life out of nowhere — and suddenly, you became my
            entire world. I can't imagine going anywhere without you, because I
            know everything is always better when we're together.
          </p>

          <div class="mt-4 grid grid-cols-3 gap-4 text-center text-sm sm:grid-cols-6">
            {[
              { key: 'years', label: 'years' },
              { key: 'months', label: 'mons' },
              { key: 'days', label: 'days' },
              { key: 'hours', label: 'hours' },
              { key: 'minutes', label: 'mins' },
              { key: 'seconds', label: 'secs' },
            ].map((unit) => (
              <div key={unit.key} class="flex flex-col items-center">
                <h4 class="text-xl font-bold">
                  {timeData.value[unit.key as keyof typeof timeData.value]}
                </h4>
                <span>{unit.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quotes */}
        {QUOTES.slice()
          .reverse()
          .map((quote, index) => {
            const isLatest = index === 0

            return (
              <div
                key={index}
                class={`${
                  isLatest ? 'animate-pulse' : ''
                } rounded-md border-2 border-gray-300 bg-white/10 p-4 text-justify leading-relaxed tracking-tight backdrop-blur-lg transition-all duration-300 hover:bg-white/20 sm:p-6 sm:tracking-normal dark:border-gray-600 dark:bg-black/10 dark:hover:bg-black/20`}
              >
                <p
                  class="text-md text-sky-500"
                  //   style="font-family: 'Parisienne', cursive;"
                >
                  {quote.text}
                </p>

                <div class="mt-3 flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">
                    {quote.date}
                  </span>
                  <button
                    onClick$={() => handleShare(quote.text)}
                    class="cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-1 text-center text-sm transition-all hover:bg-gray-50 sm:text-base dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Share
                  </button>
                </div>
              </div>
            )
          })}
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Parisienne:wght@400&display=swap');
          
        //   @keyframes fall {
        //     0% {
        //       transform: translateX(0) translateY(0);
        //     }
        //     50% {
        //       transform: translateX(10px) translateY(50vh);
        //     }
        //     100% {
        //       transform: translateX(-10px) translateY(120vh);
        //     }
        //   }
        `}
      </style>
    </main>
  )
})

export const head: DocumentHead = {
  title: 'Our Time - Wai Phyo Naing',
  meta: [
    {
      name: 'description',
      content: 'A special page celebrating love and time together',
    },
  ],
}
