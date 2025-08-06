import { component$ } from '@builder.io/qwik'
import EXPERIENCES from '~/data/experiences'
import { calcExperienceDuration } from '~/lib/utils'

export const Experience = component$(() => {
  return (
    <div class="mb-16">
      <h2 class="mb-8 text-2xl font-bold sm:text-4xl">Experience</h2>

      <div class="flex flex-col gap-6">
        {EXPERIENCES.map((experience, id) => {
          const { years, months } = calcExperienceDuration(experience)
          const yearText = years > 0 ? `${years} yr` : ''
          const monthText = months > 0 ? `${months} mo` : ''
          const durationText = [yearText, monthText].filter(Boolean).join(' ')

          return (
            <div
              key={id}
              class="rounded-md border-2 border-gray-300 bg-white/10 p-4 backdrop-blur-lg transition-all duration-300 hover:bg-white/20 sm:p-6 dark:border-gray-600 dark:bg-black/10 dark:hover:bg-black/20"
            >
              <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 class="text-xl font-bold sm:text-2xl">
                  {experience.position}
                </h3>

                <div>
                  <a
                    href={experience.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm font-medium text-blue-600 hover:underline sm:text-base dark:text-blue-400"
                  >
                    {experience.company}
                  </a>
                </div>
              </div>

              <div class="mt-1 flex flex-col gap-1 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between dark:text-gray-400">
                <div class="opacity-80 sm:text-right">
                  {experience.startDate} – {experience.endDate}{' '}
                  {durationText && ` (${durationText})`}
                </div>
                <div>
                  <span>{experience.location}</span> ·{' '}
                  <span>{experience.workType}</span> ·{' '}
                  <span>{experience.workMode}</span>
                </div>
              </div>

              <p class="mt-2 text-justify text-base leading-relaxed tracking-tight sm:tracking-normal">
                {experience.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
})
