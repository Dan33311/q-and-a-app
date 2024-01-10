import { useProgressiveNumber } from '../hooks/useIncreaseNumber'
import { useEffect } from 'react'

export const CountUp = ({ initial, final, decimals, duration }) => {
  const [count, setCount] = useProgressiveNumber(initial, duration, decimals)

  useEffect(() => {
    setCount(final)
  }, [])

  return <span>{count}</span>
}