import debounce from 'lodash.debounce'
import { useEffect, useMemo } from 'react'

// Given a function T, define a new function type that takes the same parameters as T, but returns void (because it's debounced).
type DebouncedFn<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void

/**
 * This is a reusable hook that returns a debounced version of a callback function using Lodash
 * @param callback Function that you need to debounce
 * @param delay The debounce delay in milliseconds
 * @returns The debounce version of the callback
 */
export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 300
): DebouncedFn<T> {
  // We need to memoize the debounced function so it doesn't get recreacted on every render
  const debounced = useMemo(() => debounce(callback, delay), [callback, delay])

  // Cleanup on unmount to cancel any pending calls
  useEffect(() => {
    return () => {
      debounced.cancel()
    }
  }, [debounced])

  return debounced
}
