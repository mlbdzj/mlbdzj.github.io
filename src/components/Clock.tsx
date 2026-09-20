import { useEffect, useState } from 'react'

function Clock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const time = now.toLocaleTimeString('zh-CN', { hour12: false })
  const date = now.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })

  return (
    <div className="rounded-2xl bg-white px-5 py-4 text-center shadow-lg">
      <p className="text-2xl font-semibold tabular-nums text-gray-900">
        {time}
      </p>
      <p className="mt-1 text-xs text-gray-400">{date}</p>
    </div>
  )
}

export default Clock
