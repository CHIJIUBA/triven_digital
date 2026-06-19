import { useEffect, useRef, useState } from 'react'

export default function Counter({ target, suffix = '', duration = 1500 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const startTime = performance.now()
            const step = (now) => {
              const progress = Math.min((now - startTime) / duration, 1)
              setValue(Math.floor(progress * target))
              if (progress < 1) requestAnimationFrame(step)
              else setValue(target)
            }
            requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
