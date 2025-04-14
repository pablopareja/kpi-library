/**
 * I'm gonna use this method to simulate the time API calls might take (and thus allowing
 * Suspense fallbacks or Loading skeletons to be temporarily visible)
 * @param ms
 * @returns
 */
export const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
