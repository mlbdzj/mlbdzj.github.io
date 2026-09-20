import { useEffect, useState, type MouseEvent } from 'react'

interface Contribution {
  date: string
  count: number
  level: number
}

const USERNAME = 'mlbdzj'
const WEEKS = 27
const LEVELS = [
  'bg-gray-200',
  'bg-green-200',
  'bg-green-400',
  'bg-green-500',
  'bg-green-700',
]

let contributionsPromise: Promise<Contribution[]> | null = null

function loadContributions() {
  if (!contributionsPromise) {
    contributionsPromise = fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`,
    )
      .then((response) => response.json())
      .then((data) => data.contributions ?? [])
      .catch(() => [])
  }
  return contributionsPromise
}

function ContributionGraph() {
  const [days, setDays] = useState<Contribution[]>([])
  const [tip, setTip] = useState<{ text: string; x: number; y: number } | null>(
    null,
  )

  useEffect(() => {
    let active = true
    loadContributions().then((data) => {
      if (active) setDays(data)
    })
    return () => {
      active = false
    }
  }, [])

  if (days.length === 0) return null

  const firstDay = new Date(`${days[0].date}T00:00:00`).getDay()
  const padded: (Contribution | null)[] = [
    ...Array<null>(firstDay).fill(null),
    ...days,
  ]
  const allWeeks: (Contribution | null)[][] = []
  for (let i = 0; i < padded.length; i += 7) {
    allWeeks.push(padded.slice(i, i + 7))
  }
  const weeks = allWeeks.slice(-WEEKS)
  const total = weeks
    .flat()
    .reduce((sum, day) => sum + (day?.count ?? 0), 0)

  function showTip(event: MouseEvent<HTMLDivElement>, day: Contribution) {
    const cell = event.currentTarget.getBoundingClientRect()
    setTip({
      text: `${day.date}：${day.count} 次`,
      x: cell.left + cell.width / 2,
      y: cell.top,
    })
  }

  return (
    <div>
      <h2 className="mb-3 text-base text-gray-900">GitHub 贡献</h2>

      <div className="overflow-x-auto pb-1">
        <div className="inline-block">
          <div className="flex gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    onMouseEnter={
                      day ? (event) => showTip(event, day) : undefined
                    }
                    onMouseLeave={day ? () => setTip(null) : undefined}
                    className={`size-4 rounded-[4px] ${
                      day ? (LEVELS[day.level] ?? LEVELS[0]) : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>

          {tip && (
            <div
              className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white"
              style={{ left: tip.x, top: tip.y - 6 }}
            >
              {tip.text}
            </div>
          )}
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-400">近半年共 {total} 次贡献</p>
    </div>
  )
}

export default ContributionGraph
