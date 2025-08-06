import clsx, { type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function calcExperienceDuration(experience: {
  startDate: string
  endDate: string
}) {
  const parseDate = (dateStr: string) => {
    if (dateStr.toLowerCase() === 'now') {
      return new Date()
    }
    return new Date(dateStr + ' 1')
  }

  const startDate = parseDate(experience.startDate)
  const endDate = parseDate(experience.endDate)

  const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44))

  const years = Math.floor(diffMonths / 12)
  const months = diffMonths % 12

  return { years, months }
}
export function diffDateTime(dateStr: string) {
  const startDate = new Date(dateStr)
  const now = new Date()
  now.setHours(now.getHours() + 7)

  let years = now.getFullYear() - startDate.getFullYear()
  let months = now.getMonth() - startDate.getMonth()
  let days = now.getDate() - startDate.getDate()
  let hours = now.getHours() - startDate.getHours()
  let minutes = now.getMinutes() - startDate.getMinutes()
  let seconds = now.getSeconds() - startDate.getSeconds()

  if (seconds < 0) {
    seconds += 60
    minutes--
  }
  if (minutes < 0) {
    minutes += 60
    hours--
  }
  if (hours < 0) {
    hours += 24
    days--
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
    days += prevMonth.getDate()
    months--
  }
  if (months < 0) {
    months += 12
    years--
  }

  const pad = (num: number) => String(num).padStart(2, '0')

  return {
    years: pad(years),
    months: pad(months),
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  }
}
